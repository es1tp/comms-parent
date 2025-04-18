import { ConfigEnv, UserConfig } from 'vite';
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { alias } from './vite.paths.config';
import { vitePluginIntl } from './vite-plugin-intl';
import { vitePluginKb } from './vite-plugin-kb';
import { vitePluginEvents } from './vite-plugin-events';
import { vitePluginMoodle } from './vite-plugin-moodle';


// https://vitejs.dev/config/
export default function defineConfig(props: ConfigEnv): UserConfig {
  console.log(`Building ${__dirname}`);

  return {
    mode: 'production',
    base: '/comms-parent',
    resolve: { alias },
    plugins: [
      react({ 
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      dts({ rollupTypes: false }),
      checker({ typescript: true }),
      svgr({ svgrOptions: {} }),
      vitePluginIntl({}),
      vitePluginKb([
        { src: 'external-kb/erau', 
          enabled: false,
          target: {
            site: 'src/api-db/datasource-1',
            questionnaire: 'src/api-db/questionnaire-1'
          } 
        },
        { src: 'external-kb/es3ky_r_z', 
          enabled: true,
          target: {
            site: 'src/api-db/datasource-2',
            questionnaire: 'src/api-db/questionnaire-2'
          } 
        }
      ]),
      vitePluginEvents({ directory: 'src/api-db/events-1', tsFilename: 'erau_events.ts', enabled: false }),
      vitePluginMoodle({
        enabled: false,
        src: 'src/api-db'
      }),
      
    ],
    
    build: {
      outDir: 'dist',
      /* lib mode
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.tsx'),
        name: '@es1tp/comms-portal',
        // the proper extensions will be added
        fileName: 'index',
        formats: ['es'] 
      }
      */
    },
  }
}