import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@@', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
});
