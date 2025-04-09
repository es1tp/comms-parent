import type { Plugin } from 'vite'
import { normalize } from 'node:path'
import { createFilePath, writeFile } from './file-utils'
import { parseFolders } from './parse-md'


let lock = false
const checkLock = () => lock
const setLock = (bool: boolean) => {
  lock = bool
}

function getConfig(init: Partial<Config>): Config {
  return {
    target: init.target ?? 'src/datasource',
    src: init.src ?? 'md-crawler-datasource'
  };
}

export interface Config {
  target: string; 
  src: string;
}
export function mdCrawlerTsVite(options: Partial<Config> = {}): Plugin {

  let ROOT: string = process.cwd()
  let userConfig = options as Config

  const generate = async () => {
    if (checkLock()) {
      return
    }
    setLock(true)
    try {
      const config = getConfig(userConfig);
      const root = process.cwd();
      const { fullPath } = createFilePath([root], config.src);
      const kbFiles = await parseFolders(fullPath);
      

      for(const newFile of kbFiles) {
        const path = createFilePath([root, config.target], newFile.fileName);
        writeFile({ fullPath: path.fullPath, content: newFile.content });
      }
      console.log(`\u{1F30D} generated new datasource, total files: ${kbFiles.length}`);
    } catch (err) {
      console.error(err)
      console.info()
    } finally {
      setLock(false)
    }
  }

  const handleFile = async (
    file: string,
    event: 'create' | 'update' | 'delete',
  ) => {
    const filePath = normalize(file)    
    const routesDirectoryPath = createFilePath([ROOT], userConfig.src).fullPath;


    if (filePath.startsWith(routesDirectoryPath)) {
      await generate()
    } 
  }

  return {
    name: 'md-ts-vite',
    async watchChange(id, { event }) {
      await handleFile(id, event)
    },
    async configResolved(config) {
      userConfig = getConfig(options)
      ROOT = config.root
      await generate()
    },
  }
}

