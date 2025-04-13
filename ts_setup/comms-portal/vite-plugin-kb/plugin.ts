import type { Plugin } from 'vite'
import { normalize } from 'node:path'
import { createFilePath } from './utils'
import { visitAssets } from './visitors'


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
    src: init.src ?? 'md-crawler-datasource',
    enabled: init.enabled === undefined ? true : init.enabled
  };
}

export interface Config {
  target: {
    site: string,
    questionnaire: string,
  }; 
  src: string;
  enabled: boolean;
}

export function vitePluginKb(options: Partial<Config>[] = []): Plugin {

  let ROOT: string = process.cwd()
  let userConfig = options as Config[]

  const generate = async () => {
    if (checkLock()) {
      return
    }

    setLock(true) 
    try {
      for(const option of userConfig) { 
        if(!option.enabled) {
          console.error(`Skipping to process config: ${option.src} because it is disabled`);
          continue;
        }

        try {
          const config = getConfig(option);
          visitAssets(config)
        } catch (err) {
          console.error(`failed to process config: ${option.src} because of error: ${err}`);
        }
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
    const isChangeOnPath: boolean = !!userConfig
      .map(option => createFilePath([ROOT], option.src).fullPath)
      .find(routesDirectoryPath => filePath.startsWith(routesDirectoryPath))
    
    if (isChangeOnPath) {
      await generate()
    } 
  }

  return {
    name: 'vite-plugin-kb',
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

