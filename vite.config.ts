import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/react/') || id.includes('react-dom')) return 'vendor-react'
            if (id.includes('three')) return 'vendor-three'
            if (id.includes('@react-three/fiber')) return 'vendor-r3f'
            if (id.includes('postprocessing')) return 'vendor-postprocessing'
            if (id.includes('face-api.js')) return 'vendor-face'
            if (id.includes('framer-motion')) return 'vendor-framer'
            if (id.includes('gsap')) return 'vendor-gsap'
            if (id.includes('@heroui')) return 'vendor-heroui'
            if (id.includes('lucide-react')) return 'vendor-lucide'
            if (id.includes('i18next') || id.includes('react-i18next')) return 'vendor-i18n'
            return 'vendor'
          }
        }
      }
    }
  }
})
