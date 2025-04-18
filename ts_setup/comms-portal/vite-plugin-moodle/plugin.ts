import type { Plugin } from 'vite'
import { normalize } from 'node:path'
import { createFilePath } from './utils'
import { visitAssets } from './visitors'
import { datasource } from '../src/api-db'


let lock = false
const checkLock = () => lock
const setLock = (bool: boolean) => {
  lock = bool
}

function getConfig(init: Partial<Config>): Config {
  return {
    target: {
      a: 'moodle/a',
      b: 'moodle/b',
      d: 'moodle/d',
    },
    src: 'src/api-db',
    enabled: init.enabled === undefined ? true : init.enabled
  };
}

export interface Config {
  target: {
    a: string,
    b: string,
    d: string
  }; 
  src: string,
  enabled: boolean;
}

export function vitePluginMoodle(options: Partial<Config>): Plugin {

  let ROOT: string = process.cwd()
  let userConfig = options as Config

  const generate = async () => {
    if (checkLock()) {
      return
    }

    setLock(true) 
    try {
      const config = getConfig(userConfig);
      visitAssets(datasource, config)
      
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
    const routesDirectoryPath = createFilePath([ROOT], userConfig.src).fullPath;
    const isChangeOnPath: boolean = filePath.startsWith(routesDirectoryPath)
    
    if (isChangeOnPath) {
      await generate()
    } 
  }

  return {
    name: 'vite-plugin-moodle',
    enforce: 'post',
    apply: 'build',

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

