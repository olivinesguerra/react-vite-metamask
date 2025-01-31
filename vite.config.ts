import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env);
  return ({
    define: {
      'process.env.REACT_APP_INFURA_API_KEY': JSON.stringify(env.REACT_APP_INFURA_API_KEY)
    },
    plugins: [react(), commonjs(), tailwindcss()],
    build: {
      commonjsOptions: { transformMixedEsModules: true } // Change
    }
  });
})
