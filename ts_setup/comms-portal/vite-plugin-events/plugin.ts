import type { Plugin } from 'vite'
import { createFilePath } from './file-utils'
import { parseErauEvents } from './event-visitor'


let lock = false
const checkLock = () => lock
const setLock = (bool: boolean) => {
  lock = bool
}

function getConfig(init: Partial<Config>): Config {
  return {
    tsFilename: init.tsFilename,
    jsonFilename: init.jsonFilename,
    directory: init.directory ?? "src",
    enabled: init.enabled === undefined ? true : init.enabled
  };
}

export interface Config {
  tsFilename: string | undefined;
  jsonFilename: string | undefined;
  directory: string;
  enabled: boolean;
}

export function vitePluginEvents(options: Partial<Config> = {}): Plugin {

  let ROOT: string = process.cwd()
  let userConfig = options as Config

  const generate = async () => {

    if (checkLock()) {
      return
    }
    setLock(true)
    try {
      if(!userConfig.enabled) {
        return;
      }
      
      const root = process.cwd();
      console.log('Generating erau calendar events');
      
      const tsfilename = userConfig.tsFilename ? createFilePath([root, userConfig.directory], userConfig.tsFilename) : undefined;
      const jsonfilename = userConfig.jsonFilename ? createFilePath([root, 'public'], userConfig.jsonFilename) : undefined;

      await parseErauEvents({ target: { jsonfilename, tsfilename }});

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

    if (!(
      (userConfig.tsFilename && file.includes(userConfig.tsFilename)) || 
      (userConfig.jsonFilename &&  file.includes(userConfig.jsonFilename))
    )) {
      await generate()
    }
  }
  return {
    name: 'vite-plugin-events',
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


