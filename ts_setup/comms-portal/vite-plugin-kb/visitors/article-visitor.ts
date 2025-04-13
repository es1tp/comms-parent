import { Dirent, readdirSync } from 'node:fs'

import { KbApi } from '../../src/api-kb' 

import { readLocaleDirent, getKeyValues } from '../utils'
import { validateArticles } from './article-validator';



class DirVisitor {
  private _pages: Record<string, KbApi.Page> = {}; 
  private _id: string;
  private _parent: KbApi.Article | undefined;
  private _parentId: string | undefined;
  private _questions: Record<string, KbApi.Question> = {};
  constructor() {
  }

  visit(dirent: Dirent, parent?: KbApi.Article) {
    if(parent) {
      this._id = `${parent.id}_${dirent.name}`
    } else {
      this._id = dirent.name
    }
    this._parent = parent;
    this._parentId = parent?.id;
    this.visitMeta(dirent);
    this.visitContent(dirent)
    this.visitQuestion(dirent);
    return this;
  }

  getOrCreatePage(localeCode: string) {
    return this._pages[localeCode] ?? createDefaultPage(localeCode, this._id);
  }

  visitMeta(dirent: Dirent) {
    console.log(`  - syncing directory: ${dirent.name}`);

    readLocaleDirent(dirent, 'meta.').forEach(({locale, content, file}) => {
      const entries = getKeyValues(content);
      const page: KbApi.Page = this.getOrCreatePage(locale);

      if(entries['Q']) {
        page.qualification = entries['Q'];
      }

      if(entries['T']) {
        page.title = entries['T'];
      } else {
        const fullpath = `${file.parentPath}/${file.name}`;
        console.error(`Title missing on in: ${fullpath}!`);
        page.title = 'missing title in: ' + fullpath;
      }
      this._pages[locale] = page;
    });
  }

  visitContent(dirent: Dirent) {
    readLocaleDirent(dirent, 'content.').forEach(({locale, content}) => {
      const page: KbApi.Page = this.getOrCreatePage(locale);

      const parentPage: KbApi.Page | undefined = this._parent ? this._parent.pages.find(page => page.localeCode === locale) : undefined

      const header1 = parentPage ? `# ${parentPage.title}  \n` : '';
      const header2 = page.title ? `## ${page.title}  \n` : '';

      page.materials.push({
        id: `${page.id}_content`,
        text: header1 + header2 + content
      });
      this._pages[locale] = page;
    });
  }
  visitQuestion(dirent: Dirent) {
    readLocaleDirent(dirent, 'q').forEach(({locale, content, nameWithoutExt}) => {
      const page: KbApi.Page = this.getOrCreatePage(locale);
      const gid = `${page.id}_${nameWithoutExt}_${locale}`;

      if(this._questions[gid]) {
        throw Error(`duplicate question id-s for the same locale: ${gid}!`);
      }

      try {
        const entries = getKeyValues(content);
        const question = entries['?']?.trim();
        if(!question) {
          console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath} because it has missing title!`);
          return;
        }

        const rawClassifiers = entries['.'];
        if(!rawClassifiers) {
          console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath} because it has missing classifiers! \r\n${content}!`);
        }

        const qualifications: string[] = rawClassifiers ? rawClassifiers.trim().split('') : [];
        if(!qualifications) {
          console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath} because it has missing classifiers! \r\n${content}!`);
        }


        const answers: KbApi.Answer[] = Object.entries(entries)
          .filter(([key]) => !(key === '?' || key === '.' || key === 'Q') )
          .map(([key, value]) => ({
            id: `${gid}_${key.substring(0, 1)}`,
            answer: value,
            isCorrect: key.includes('*')
          }));

        if(answers.length === 0) {
          console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath} because there are no answers!`);
          return;
        }
        if(answers.filter(a => a.isCorrect).length === 0) {
          console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath} because there are no correct answers! \r\n${content}`);
          return;
        }

        const newEntry: KbApi.Question = { id: gid, groupId: nameWithoutExt, question, answers, qualifications };
        page.questionnaire.push(newEntry);

        this._pages[locale] = page;
        this._questions[gid] = newEntry;
      } catch(error) {
        console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath}`);
      }
    });
  }
  close(): KbApi.Article {
    return {
      id: this._id,
      parentId: this._parentId,
      pages: Object.values(this._pages),
    };
  }
}


function createDefaultPage(localeCode: string, articleId: string): KbApi.Page {
  return {
    id: `${articleId}_${localeCode}`,
    localeCode: localeCode as KbApi.LocaleCode,
    title: '',
    materials: [],
    questionnaire: [],
    qualification: undefined
    
  }
}

function findValidFolders(path: string): Dirent[] {
  return readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => {
      const dirName = `${dirent.parentPath}/${dirent.name}`;
      const isValidDir = readdirSync(dirName, { withFileTypes: true })
        .filter(file => file.name.startsWith('meta.') || file.name.startsWith('content.'))
        .filter(file => file.isFile()).length > 0;
      return isValidDir;
    });
}


export function visitArticles(path: string): KbApi.Article[] {
  const articles: KbApi.Article[] = findValidFolders(path)
    .flatMap(root => {
      const parent = new DirVisitor().visit(root).close();
      const children = findValidFolders(`${root.parentPath}/${root.name}`)
        .map(child => new DirVisitor().visit(child, parent).close())
      return [parent, ...children];
    });

  validateArticles(articles);
  return articles;
}

