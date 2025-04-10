import { Dirent, readdirSync } from 'node:fs'

import { Article } from '../src/api-kb';
import { ExamApi } from '../src/api-exam';

import { parseDir } from './dir-visitor';
import { QuestionnaireVisitor } from './questionnaire-visitor';
import { validateArticles } from './article-validator';


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

function createSiteFiles(articles: Article[]): KbFile[] {
  const site: (KbFile & { article: Article })[] = articles
    .map(article => {
      const lines = JSON.stringify(article, null, 2)
      const importLine = `import { Article } from '@/api-kb'\n\n`;
      const content = importLine + `export const ${article.id}: Article = ${lines}`;
      return { content, fileName: `${article.id}.ts`, article, type: 'site' };
    });

  const imports = site
    .map(({article}) => `import { ${article.id} } from './${article.id}'`)
    .join('\r\n');

  const content = `${imports}\r\nexport default { ${site.map(({article}) => article.id).join(', ')}}`;
  const index: KbFile = { fileName: 'index.ts', content: content, type: 'site' }

  const result: KbFile[] = [index, ...site];
  return result;
}


function createQuestionnaireFile(articles: Article[]): KbFile[] {
  const questionnaires: (KbFile & { subject: ExamApi.ErauSubject })[] = new QuestionnaireVisitor(articles).visit().close()
    .map(subject => {
      const lines = JSON.stringify(subject, null, 2)
      const importLine = `import { ExamApi } from '@/api-exam'\n\n`;
      const content = importLine + `export const ${subject.id}: ExamApi.ErauSubject = ${lines}`;
      return { content, fileName: `${subject.id}.ts`, subject, type: 'questionnaire' };
    });

  const imports = questionnaires
    .map(({subject}) => `import { ${subject.id} } from './${subject.id}'`)
    .join('\r\n');

  if(questionnaires.length === 0) {
    return [];
  }

  const content = `${imports}\r\nexport default { ${questionnaires.map(({subject}) => subject.id).join(', ')}}`;
  const index: KbFile = { fileName: 'index.ts', content: content, type: 'questionnaire' }

  const result: KbFile[] = [index, ...questionnaires];
  return result;

}


export type KbFile = {
  fileName: string;
  content: string;
  type: 'questionnaire' | 'site'
}

export async function parseFolders(path: string): Promise<KbFile[]> {
  const articles: Article[] = findValidFolders(path)
    .flatMap(root => {
      const parent = parseDir(root);
      const children = findValidFolders(`${root.parentPath}/${root.name}`)
        .map(child => parseDir(child, parent))
      return [parent, ...children];
    });

  validateArticles(articles);

  return [
    ...createSiteFiles(articles),
    ...createQuestionnaireFile(articles)
  ];
}