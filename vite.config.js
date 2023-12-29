import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/the-flowers-box/",
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@@", replacement: path.resolve(__dirname, "src/assets") }
    ]
  }
})
