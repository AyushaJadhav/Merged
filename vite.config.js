import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@fluentui/react-v9': '@fluentui/react-components' 
    }
  },
  plugins: [react()],
})
