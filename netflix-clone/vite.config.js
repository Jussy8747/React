import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  env: {
    API_KEY: '62ebbf5e93d522fc99a348d562cd3577'
  },
  plugins: [react()],
})
