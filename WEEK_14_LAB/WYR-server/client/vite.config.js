import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite configuration
export default defineConfig({
  plugins: [vue()], // Use Vue plugin

  server: {
    proxy: {
      // Forward /wyr requests to the Express server
      '/wyr': 'http://localhost:3000/'
    }
  }
})