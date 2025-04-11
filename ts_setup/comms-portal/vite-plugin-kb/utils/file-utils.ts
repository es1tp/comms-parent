import { writeFileSync, existsSync, mkdirSync, Dirent, readFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import _ from 'lodash'


export function writeFile(props: {
  fullPath: string;
  content: string;
}): void {
  const directory = dirname(props.fullPath)
  if (!existsSync(directory)) {
    mkdirSync(directory)
  }
  writeFileSync(props.fullPath, props.content, { flag: 'w' });
}


export type FilePath = {
  fullPath: string;
  fileName: string;
}

export function createFilePath(directory: string[], fileName: string): FilePath {
  const fullPath = resolve(...directory, fileName)
  return {
    fullPath,
    fileName
  }
}

export function getKeyValues(fileContent: string): Record<string, string> {
  const rows = fileContent.split('\n');

  return rows.reduce<Record<string, string>>((collector, row) => {

    if(row.trim().length <= 1) {
      console.error("Empty row in the middle of the content TF???");
      return collector;
    }

    const key = row.substring(0, row.indexOf(' ')).toUpperCase();
    const value = row.substring(row.indexOf(' ') + 1);

    collector[key] = value;
    return collector;
  }, {});
}



export function readLocaleDirent(dirent: Dirent, startsWith: string): { file: Dirent, content: string, locale: string, nameWithoutExt: string }[] {
  const dirName = `${dirent.parentPath}/${dirent.name}`;
  const files = readdirSync(dirName, { withFileTypes: true })
    .filter(file => file.name.startsWith(startsWith))
    .filter(file => file.isFile())
    .map(file => {
      const filename = `${file.parentPath}/${file.name}`;
      try {
        return {
          file,
          filename,
          locale: getFileLocale(file),
          content: getFileContent(filename),
          nameWithoutExt: getFileNameWithoutExt(file)
        }
      } catch(error) {
        console.error(`failed to parse dirent: ${filename}`);
        throw error;
      }
    });
  return files;
}

export interface TsObjectSource<T extends object> {
  object: T, 
  text: string, 
  dirent: Dirent, 
  test: (newInput: string) => boolean // true if content is identical
}

export function readTsObjectDirent<T extends object>(dirent: Dirent): TsObjectSource<T> {
  const filename = `${dirent.parentPath}/${dirent.name}`;
  const contents = getFileContent(filename);
  const json = contents.split('\n').filter(e => !e.trim().startsWith('import')).join('\n');
  const objectStart = json.indexOf('{');
  if(objectStart < 0) {
    throw new Error(`Can't read file: ${filename} because it does not contain objects!`);
  }

  try {
    return { 
      object: JSON.parse(json.substring(objectStart)), 
      dirent, 
      text: contents,
      test: (newInput) => cleanLineEndings(newInput) === contents
    };
  } catch(error) {
    throw new Error(`Can't parse file: ${filename}!`, error);
  }
}

function cleanLineEndings(text: string) {
  const init = text.replace(/\r?\n/g, '\n').trim();
  return _.trim(init, '\n');
}


function getFileNameWithoutExt(file: Dirent): string {
  return file.name.split('\.')[0].trim();
}

function getFileContent(filename: string): string {
  const init = readFileSync(filename).toString('utf-8');
  return cleanLineEndings(init);
}

function getFileLocale(file: Dirent) {
  return file.name.split('\.')[1].trim();
}