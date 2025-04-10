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
    target: {
      site: init.target?.site ?? 'src/datasource',
      questionnaire: init.target?.questionnaire ?? 'src/questionnaire',
    },
    src: init.src ?? 'md-crawler-datasource'
  };
}

export interface Config {
  target: {
    site: string,
    questionnaire: string,
  }; 
  src: string;
}
export function mdCrawlerTsVite(options: Partial<Config>[] = []): Plugin {

  let ROOT: string = process.cwd()
  let userConfig = options as Config[]

  const generate = async () => {
    if (checkLock()) {
      return
    }
    setLock(true) 
    try {
      for(const option of userConfig) { 
        const config = getConfig(option);
        const root = process.cwd();
        const { fullPath } = createFilePath([root], config.src);
        const kbFiles = await parseFolders(fullPath);
        
        for(const newFile of kbFiles) {
          const path = createFilePath([root, config.target[newFile.type]], newFile.fileName);
          writeFile({ fullPath: path.fullPath, content: newFile.content });
        }
        console.log(`\u{1F30D} generated new datasource: ${config.src}, total files: ${kbFiles.length}`);
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLock(false)
    }
  }

  const handleFile = async (
    file: string,
    event: 'create' | 'update' | 'delete',
  ) => {
    const filePath = normalize(file);
    const isGenerationEnabled: boolean = !!userConfig
      .map(option => createFilePath([ROOT], option.src).fullPath)
      .find(routesDirectoryPath => filePath.startsWith(routesDirectoryPath))
    
    if (isGenerationEnabled) {
      await generate()
    } 
  }

  return {
    name: 'md-ts-vite',
    async watchChange(id, { event }) {
      await handleFile(id, event)
    },
    async configResolved(config) {
      userConfig = options.map(option => getConfig(option))
      ROOT = config.root
      await generate()
    },
  }
}

