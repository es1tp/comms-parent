import { DatasourceType } from '../../src/api-db';
import { ErauApi } from '../../src/api-erau';
import { createFilePath, writeFile } from '../utils'
import { GiftVisitor } from './gift-visitor';






export async function visitAssets(
  db: DatasourceType,
  config: {
    src: string,
    target: {
      a: string,
      b: string,
      d: string
    }
  }
) {

  const root = process.cwd();
  try {  



    for(const [qualification, filePrefix] of Object.entries(config.target)) {
      const locale = 'et';
      const subjects: ErauApi.ErauSubject[] = db.questionnaires({ locale, qualification });

      const questionsFile = createFilePath([root], `${filePrefix}_questions_${locale}.gift`).fullPath;
      const moduleFile = createFilePath([root], `${filePrefix}_module_names_${locale}.txt`).fullPath

      const visitor = new GiftVisitor(`${qualification.toUpperCase()}-kategooria eksam`);
      subjects.forEach(s => visitor.visit(s))
      const { gift, module_names } = visitor.close();


      writeFile({ fullPath: questionsFile, content: gift });
      writeFile({ fullPath: moduleFile, content: module_names });
    }

  } catch (err) {
    console.error(`\u{1F30D} failed to generate Moodle GIFT from: ${config.src}`, err)
  }
}

