import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs(), tailwindcss()],
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
})
