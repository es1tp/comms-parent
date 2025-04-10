import { Dirent, readdirSync } from 'node:fs'
import { parseDir } from './dir-visitor';
import { Article } from '../src/api-kb';
import { QuestionnaireVisitor } from './questionnaire-visitor';
import { ExamApi } from '../src/api-exam';



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

/**
    function toAnswers(row: RowAnswer): ExamApi.ErauAnswer {
      return {
        correct: row.correct,
        text: row.answer
      }
    }
    function toQuestion(row: RowQuestion): ExamApi.ErauQuestion {
      return {
        id: row.id,
        text: row.question,
        answers: row.answers.map(toAnswers),
        info: row.info.map(info => info.info),
      }
    }

    function toSubject(row: RowSubject): ExamApi.ErauSubject {
      return {
        id: row.id,
        title: row.title,
        questions: row.questions.map(toQuestion)
      }
    }
    const subjects = this._all_subjects
      .map(toSubject)
      .map(sub => ({
        id: sub.id.trim().toUpperCase(),
        fileName: sub.id.trim().toUpperCase() + '.ts',
        content: `export default ${JSON.stringify(sub, null, 2)}`
      }));

    const imports = subjects.map(e => `import ${e.id} from './${e.id}'`).join('\r\n')
      + '\r\nimport { withTk } from \'./id-gen\'\r\n'
      + '\r\nimport { ExamApi } from \'../exam-context\'\r\n';

    return [...subjects, {
      fileName: 'index.ts',
      content: imports + `export const defs: ExamApi.ErauSubject[] = withTk([${subjects.map(e => e.id).join(', ')}])`
    }];
 */


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

  return [
    ...createSiteFiles(articles),
    ...createQuestionnaireFile(articles)
  ];
}