import { ConfigEnv, UserConfig } from 'vite';
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import { alias } from './vite.paths.config';


// https://vitejs.dev/config/
export default function defineConfig(props: ConfigEnv): UserConfig {
  console.log(`Building ${__dirname}`);

  return {
    mode: 'production',
    base: process.env.PUBLIC_URL || '',
    resolve: { alias },
    plugins: [
      react({ }),
      dts({ rollupTypes: false }),
      checker({ typescript: true }),
      svgr({ svgrOptions: {} }),
      //intlTsVite({})
    ],
    
    build: {
      outDir: 'build',
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@es1tp/comms-portal',
        // the proper extensions will be added
        fileName: 'index',
        formats: ['es'] 
      }
    },
  }
}