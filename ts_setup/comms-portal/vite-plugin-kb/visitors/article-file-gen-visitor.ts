import { readdirSync, existsSync, unlinkSync } from 'node:fs'

import { createFilePath, readTsObjectDirent, TsObjectSource, writeFile } from '../utils'
import { KbApi } from '../../src/api-kb';
import { visitNewArticleChangeLog, visitDiffArticleChangeLog, visitNoChangesArticleChangeLog, NOW } from './article-changelog-visitor';

interface TsSource {
  filename: string, content: string
}


const CHANGE_LOG_FILE = 'changelog.ts'

class FileGenVisitor {
  private _targetDir: string;
  private _new_articles: KbApi.Article[];

  private _current_source: Record<string, TsObjectSource<KbApi.Article>>;
  private _current_changelog: TsObjectSource<KbApi.ArticleChangeLog> | undefined;
  
  private _new_change_log: KbApi.ArticleChange[] = [];
  private _regen_index: boolean = false;

  constructor(targetDir: string, articles: KbApi.Article[]) {
    this._new_articles = articles;
    const exists = existsSync(targetDir);
    const tsFiles = exists ? readdirSync(targetDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile())
      .filter(dirent => dirent.name.endsWith('.ts')) : []; 

    this._current_source = tsFiles
      .filter(dirent => dirent.name !== 'index.ts')
      .filter(dirent => dirent.name !== CHANGE_LOG_FILE)
      .map(dirent => readTsObjectDirent<KbApi.Article>(dirent))
      .reduce<Record<string, TsObjectSource<KbApi.Article>>>((collector, current) => {
        collector[current.object.id] = current
        return collector;
      }, {});
    this._current_changelog = tsFiles
      .filter(dirent => dirent.name === CHANGE_LOG_FILE)
      .map(dirent => readTsObjectDirent<KbApi.ArticleChangeLog>(dirent))
      .find(entry => true);
    this._targetDir = targetDir;
  }

  visit() {
    this._new_articles.forEach(article => this.visitArticle(article));
    return this;
  }

  visitArticle(article: KbApi.Article) {
    const prev: TsObjectSource<KbApi.Article> | undefined = this._current_source[article.id];
    if(prev) {
      this.visitDiffArticle(prev, article)
    } else {
      this.visitNewArticle(article);
    }
  }
  visitNewArticle(current: KbApi.Article) {
    console.log(`  - adding new article: ${current.id}`);
    const newSource = this.visitTsSource(current);
    this._new_change_log.push(...visitNewArticleChangeLog(current));
    this.visitWriteFile(newSource);
  }

  visitDiffArticle(prev: TsObjectSource<KbApi.Article>, current: KbApi.Article) {
    const newFile = this.visitTsSource(current);
    if(prev.test(newFile.content)) {
      // no changes
      console.log(`  - no changes in article: ${current.id}`);
      this.visitNoChangeArticle(prev, current);
      return;
    }

    // figure out changes
    console.log(`  - diffing changes in article: ${current.id}`);
    const newSource = this.visitTsSource(current);
    this._new_change_log.push(...visitDiffArticleChangeLog({ newArticle: current, prevArticle: prev.object, changelog: this._current_changelog?.object}));
    this.visitWriteFile(newSource);
  }

  visitNoChangeArticle(prev: TsObjectSource<KbApi.Article>, current: KbApi.Article) {
    this._new_change_log.push(...visitNoChangesArticleChangeLog({ current, changelog: this._current_changelog?.object})); 
  }

  visitTsSource(article: KbApi.Article): TsSource {
    const lines = JSON.stringify(article, null, 2)
    const importLine = `import { KbApi } from '../../api-kb'\n\n`;
    const content = importLine + `export const ${article.id}: KbApi.Article = ${lines}`;
    return { content, filename: `${article.id}.ts` };
  }

  visitWriteFile(file: TsSource) {
    this._regen_index = true;
    const path = createFilePath([this._targetDir], file.filename);
    console.debug(`  - writing new entry: ${path.fileName}`);
    writeFile({ fullPath: path.fullPath, content: file.content });
  }

  visitIndexFile() {
    if(!this._regen_index) {
      return;
    }
    const imports = this._new_articles
      .map((article) => `import { ${article.id} } from './${article.id}'`)
      .join('\r\n');

    const content = `${imports}\r\nexport default { ${this._new_articles.map((article) => article.id).join(', ')}}`;
    
    this.visitWriteFile({ filename: 'index.ts', content });
  } 

  visitChangesLog() {
    const newLog = this._new_change_log.sort((a, b) => a.id.localeCompare(b.id));
    const preLog = (this._current_changelog?.object.changes ?? []).sort((a, b) => a.id.localeCompare(b.id));
    if(JSON.stringify(newLog) === JSON.stringify(preLog)) {
      console.debug(`  - no changes`);
      return;
    }

    const changeLog: KbApi.ArticleChangeLog = {
      timestamp: NOW,
      changes: newLog
    }

    const importLine = `import { KbApi } from '../../api-kb'\n\n`;
    const content = `${importLine}export default ${JSON.stringify(changeLog, null, 2)}`;

    this.visitWriteFile({ filename: CHANGE_LOG_FILE, content });
  }
  visitDeletedArticles() {
    Object.values(this._current_source).forEach(currentSource => {
      const isDeleted = !this._new_articles.find(({ id }) => currentSource.object.id === id);
        if(isDeleted) {
          this._regen_index = true;
          console.debug(`  - deleting article: ${currentSource.object.id} - ${currentSource.object.pages[0]?.title}`);
          unlinkSync(`${currentSource.dirent.parentPath}/${currentSource.dirent.name}`);
        }
    })
  }

  close() {
    this.visitDeletedArticles();
    this.visitChangesLog();
    this.visitIndexFile();
  }
}

export async function generateArticleFiles(
  props: {
    targetDirectory: string;
    articles: KbApi.Article[]; 
  }
) {
  try { 
    console.debug(`Generating article files into: ${props.targetDirectory}`);
    new FileGenVisitor(props.targetDirectory, props.articles).visit().close();
  } catch (err) {
    console.error(`\u{1F30D} failed to generate article files to directory: ${props.targetDirectory}`, err)
  }
}