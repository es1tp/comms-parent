import { Dirent } from 'node:fs';
import { readLocaleDirent, getKeyValues } from './file-utils'

import { Article, Page, Question, LocaleCode, Answer } from '../src/api-kb' 

function createDefaultPage(localeCode: string, articleId: string): Page {
  return {
    id: `${articleId}_${localeCode}`,
    localeCode: localeCode as LocaleCode,
    title: '',
    materials: [],
    questionnaire: [],
    qualification: undefined
    
  }
}

class DirVisitor {
  private _pages: Record<string, Page> = {}; 
  private _id: string;
  private _parent: Article | undefined;
  private _parentId: string | undefined;
  private _questions: Record<string, Question> = {};
  constructor() {
  }

  visit(dirent: Dirent, parent?: Article) {
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
    readLocaleDirent(dirent, 'meta.').forEach(({locale, content, file}) => {
      const entries = getKeyValues(content);
      const page: Page = this.getOrCreatePage(locale);

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
      const page: Page = this.getOrCreatePage(locale);

      const parentPage: Page | undefined = this._parent ? this._parent.pages.find(page => page.localeCode === locale) : undefined

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
      const page: Page = this.getOrCreatePage(locale);
      const gid = `${nameWithoutExt}_${locale}`;

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


        const answers: Answer[] = Object.entries(entries)
          .filter(([key]) => !(key === '?' || key === '.' || key === 'Q') )
          .map(([key, value]) => ({
            id: `${this._id}_${locale}_${key.substring(0, 1)}`,
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

        const newEntry: Question = { id: nameWithoutExt, question, answers, qualifications };
        page.questionnaire.push(newEntry);

        this._pages[locale] = page;
        this._questions[gid] = newEntry;
      } catch(error) {
        console.error(`Failed to parse question with gid: ${gid} in: ${dirent.parentPath}`);
      }
    });
  }
  close(): Article {
    return {
      id: this._id,
      parentId: this._parentId,
      pages: Object.values(this._pages),
    };
  }
}

export function parseDir(dirent: Dirent, parent?: Article): Article {
  return new DirVisitor().visit(dirent, parent).close();
}