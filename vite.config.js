import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fcc-code-challenges/tree/master/front-end-development-libraries/random-quote-machine/',
  plugins: [react()],
})
