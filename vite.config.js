import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/task-app/' : '/',
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: `assets/file_[name].[hash].js`,
                chunkFileNames: `assets/file_[name].[hash].js`,
                assetFileNames: `assets/file_[name].[hash].[ext]`,
            },
        }
    },
    server: {
        base: process.env.NODE_ENV === 'production' ? '/task-app/' : '/',
    }
})