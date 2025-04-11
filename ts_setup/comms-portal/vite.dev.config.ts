import { ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

import { vitePluginIntl } from './vite-plugin-intl';
import { alias } from './vite.paths.config';
import { vitePluginKb } from './vite-plugin-kb';


// https://vitejs.dev/config/
export default function defineConfig(props: ConfigEnv): UserConfig {
  return {
    base: process.env.PUBLIC_URL || '',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: { plugins: ['@emotion/babel-plugin'] }
      }),
      checker({ typescript: true }),
      svgr({ svgrOptions: {} }), 
      vitePluginIntl({}),
      vitePluginKb([
        { src: 'external-kb/erau', 
          target: {
            site: 'src/api-db/datasource-1',
            questionnaire: 'src/api-db/questionnaire-1'
          } 
        },
        { src: 'external-kb/es3ky_r_z', 
          target: {
            site: 'src/api-db/datasource-2',
            questionnaire: 'src/api-db/questionnaire-2'
          } 
        }
      ]),
      
    ],
    build: {
      chunkSizeWarningLimit: 5000,
      outDir: './build',
      assetsDir: 'static'
    },
    resolve: { alias },
    server: { open: true, port: 3000 },
    optimizeDeps: {
      //https://github.com/vitejs/vite/issues/12423
      //https://github.com/mui/material-ui/issues/32727
      include: [
        '@mui/material/CssBaseline',
        '@mui/material/Box',

      ],
      force: true
    }
  }
}