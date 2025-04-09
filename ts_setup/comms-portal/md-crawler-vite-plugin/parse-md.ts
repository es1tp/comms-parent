import { Dirent, readdirSync } from 'node:fs'
import { parseDir } from './dir-visitor';
import { Article } from '../src/api-kb';



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


export type KbFile = {
  fileName: string;
  content: string;
}

export async function parseFolders(path: string): Promise<KbFile[]> {

  const articles: (KbFile & { article: Article })[] = findValidFolders(path)
    .flatMap(root => {
      const parent = parseDir(root);
      const children = findValidFolders(`${root.parentPath}/${root.name}`)
        .map(child => parseDir(child, parent))
      return [parent, ...children];
    })
    .map(article => {
      const lines = JSON.stringify(article, null, 2)
      const content = `export const ${article.id}  = ${lines}`;
      return { content, fileName: `${article.id}.ts`, article };
    });

  const imports = articles
    .map(({article}) => `import { ${article.id} } from './${article.id}'`)
    .join('\r\n');


  //const content = `${imports}\r\nexport default { ${articles.map(({article}) => article.id).join(', ')}}`;
  const index = { fileName: 'index.ts', content: '' }

  return [...articles, index];
}