import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2' // import { createVuePlugin as vue } from 'vite-plugin-vue2'
import { join } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

const PACKAGE_ROOT = __dirname

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Vuetify
        VuetifyResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/'
    }
  },
  base: '',
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html')
    },
    emptyOutDir: true,
    reportCompressedSize: false
  },
})
