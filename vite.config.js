import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Carpeta donde creare el build de yarn
  build: { outDir: 'docs'},
  // Comprobaos si estamos en produccion yla case es el nombre del repositorio
  base: process.env.NODE_ENV === 'produccion' ? '/final-project' : '/'
})
