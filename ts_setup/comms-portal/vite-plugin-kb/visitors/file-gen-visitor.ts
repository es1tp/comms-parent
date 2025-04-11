import { createFilePath, writeFile } from '../utils'
import { KbApi } from '../../src/api-kb';
import { ExamApi } from '../../src/api-exam';
import { visitQuestions } from './questionnaire-visitor';
import { visitArticles } from './article-visitor';


function createSiteFiles(articles: KbApi.Article[]): KbFile[] {
  const site: (KbFile & { article: KbApi.Article })[] = articles
    .map(article => {
      const lines = JSON.stringify(article, null, 2)
      const importLine = `import { KbApi } from '@/api-kb'\n\n`;
      const content = importLine + `export const ${article.id}: KbApi.Article = ${lines}`;
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


function createQuestionnaireFile(articles: KbApi.Article[]): KbFile[] {
  const questionnaires: (KbFile & { subject: ExamApi.ErauSubject })[] = visitQuestions(articles)
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

export async function visitAssets(
  config: { 
    src: string, 
    target: {
      questionnaire: string,
      site: string
    } 
}) {
  const root = process.cwd();
  const { fullPath } = createFilePath([root], config.src);
    
  try {  
    const articles: KbApi.Article[] = visitArticles(fullPath)
    const kbFiles = [
      ...createSiteFiles(articles),
      ...createQuestionnaireFile(articles)
    ];

    for(const newFile of kbFiles) {
      const path = createFilePath([root, config.target[newFile.type]], newFile.fileName);
      writeFile({ fullPath: path.fullPath, content: newFile.content });
    }
    console.log(`\u{1F30D} generated new datasource: ${config.src}, total files: ${kbFiles.length}`);
  } catch (err) {
    console.error(`\u{1F30D} failed to generate files from: ${fullPath}`, err)
  }
}

