import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Widzę, że masz Tailwind v4 w package.json

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/beglam/', // To musi być nazwa Twojego repozytorium na GitHubie!
})