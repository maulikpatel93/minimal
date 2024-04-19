/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, transformWithEsbuild } from 'vite';
// ----------------------------------------------------------------------

export default defineConfig({

    optimizeDeps: {
        force: true,
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
    plugins: [
        {
            name: 'treat-js-files-as-jsx',
            async transform(code, id) {
              if (!id.match(/src\/.*\.js$/))  return null

              // Use the exposed transform from vite, instead of directly
              // transforming with esbuild
              return transformWithEsbuild(code, id, {
                loader: 'jsx',
                jsx: 'automatic',
              })
            },
          },
        Inspect(),
        react(),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: /^~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules/$1'),
            },
            {
                find: /^src(.+)/,
                replacement: path.join(process.cwd(), 'src/$1'),
            },
        ],
    },
    server: {
        port: 3030,
    },
    preview: {
        port: 3030,
    },
});
