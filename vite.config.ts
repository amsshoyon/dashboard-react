/// <reference types="vitest" />
/// <reference types="vite" />

import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

const config: UserConfigExport = {
  plugins: [
    react(),
    checker({
      typescript: true,

      /* eslint: {
        lintCommand: 'eslint ./src --ext .jsx,.js,.ts,.tsx --ignore-path ./.gitignore',
      }, */
    }),
  ],
  build: {
    chunkSizeWarningLimit: 3500,
    sourcemap: false,
    /* rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@mui')) {
              return 'vendor_mui'
            }

            return 'vendor' // all other package goes here
          }
        },
      },
    }, */
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
}
export default defineConfig(config)
