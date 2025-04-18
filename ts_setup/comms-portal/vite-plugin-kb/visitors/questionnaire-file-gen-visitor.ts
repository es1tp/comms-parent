import { readdirSync, existsSync, unlinkSync } from 'node:fs'
import { ErauApi } from '../../src/api-erau';
import { KbApi } from '../../src/api-kb';
import { createFilePath, readTsObjectDirent, TsObjectSource, writeFile } from '../utils'
import { visitQuestions } from './questionnaire-visitor';

import { visitNewArticleChangeLog, visitDiffArticleChangeLog, visitNoChangesArticleChangeLog, NOW } from './questionnaire-changelog-visitor';



interface TsSource {
  filename: string, content: string
}

const CHANGE_LOG_FILE = 'changelog.ts'

class FileGenVisitor {
  private _targetDir: string;
  private _new_articles: ErauApi.ErauSubject[];

  private _current_source: Record<string, TsObjectSource<ErauApi.ErauSubject>>;
  private _current_changelog: TsObjectSource<ErauApi.ErauChangeLog> | undefined;
  
  private _new_change_log: ErauApi.ErauChange[] = [];
  private _regen_index: boolean = false;

  constructor(targetDir: string, articles: KbApi.Article[]) {
  
    const exists = existsSync(targetDir);
    const tsFiles = exists ? readdirSync(targetDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile())
      .filter(dirent => dirent.name.endsWith('.ts')) : []; 

    this._current_source = tsFiles
      .filter(dirent => dirent.name !== 'index.ts')
      .filter(dirent => dirent.name !== CHANGE_LOG_FILE)
      .map(dirent => readTsObjectDirent<ErauApi.ErauSubject>(dirent))
      .reduce<Record<string, TsObjectSource<ErauApi.ErauSubject>>>((collector, current) => {
        collector[current.object.id] = current
        return collector;
      }, {});
    this._current_changelog = tsFiles
      .filter(dirent => dirent.name === CHANGE_LOG_FILE)
      .map(dirent => readTsObjectDirent<ErauApi.ErauChangeLog>(dirent))
      .find(entry => true);
      
    this._targetDir = targetDir;
    this._new_articles = articles.flatMap(article => visitQuestions([article]))
  }

  visit() {
    this._new_articles.forEach(article => this.visitArticle(article));
    return this;
  }

  visitArticle(article: ErauApi.ErauSubject) {
    const prev: TsObjectSource<ErauApi.ErauSubject> | undefined = this._current_source[article.id];
    if(prev) {
      this.visitDiffArticle(prev, article)
    } else {
      this.visitNewArticle(article);
    }
  }
  visitNewArticle(current: ErauApi.ErauSubject) {
    const newSource = this.visitTsSource(current);
    this._new_change_log.push(...visitNewArticleChangeLog(current));
    this.visitWriteFile(newSource);
  }

  visitDiffArticle(prev: TsObjectSource<ErauApi.ErauSubject>, current: ErauApi.ErauSubject) {
    const newFile = this.visitTsSource(current);
    if(prev.test(newFile.content)) {
      // no changes
      this.visitNoChangeArticle(prev, current);
      return;
    }

    // figure out changes
    const newSource = this.visitTsSource(current);
    this._new_change_log.push(...visitDiffArticleChangeLog({ newArticle: current, prevArticle: prev.object, changelog: this._current_changelog?.object}));
    this.visitWriteFile(newSource);
  }

  visitNoChangeArticle(prev: TsObjectSource<ErauApi.ErauSubject>, current: ErauApi.ErauSubject) {
    this._new_change_log.push(...visitNoChangesArticleChangeLog({ current, changelog: this._current_changelog?.object})); 
  }

  visitTsSource(article: ErauApi.ErauSubject): TsSource {
    const lines = JSON.stringify(article, null, 2)
    const importLine = `import { ErauApi } from '../../api-erau'\n\n`;
    const content = importLine + `export const ${article.id}: ErauApi.ErauSubject = ${lines}`;
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

    const changeLog: ErauApi.ErauChangeLog = {
      timestamp: NOW,
      changes: newLog
    }

    const importLine = `import { ErauApi } from '../../api-erau'\n\n`;
    const content = `${importLine}export default ${JSON.stringify(changeLog, null, 2)}`;

    this.visitWriteFile({ filename: CHANGE_LOG_FILE, content });
  }
  visitDeletedArticles() {
    Object.values(this._current_source).forEach(currentSource => {
      const isDeleted = !this._new_articles.find(({ id }) => currentSource.object.id === id);
        if(isDeleted) {
          this._regen_index = true;
          console.debug(`  - deleting erau subject: ${currentSource.object.id} - ${currentSource.object.title}`);
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


export async function generateQuestionnaireFiles(
  props: {
    targetDirectory: string;
    articles: KbApi.Article[]; 
  }
) {
  try { 
    console.debug(`Generating questionnaire files into: ${props.targetDirectory}`);
    new FileGenVisitor(props.targetDirectory, props.articles).visit().close();
  } catch (err) {
    console.error(`\u{1F30D} failed to generate questionnaire files to directory: ${props.targetDirectory}`, err)
  }
}