import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/_store', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/_components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/_assets', import.meta.url)),
    },
  },
})
