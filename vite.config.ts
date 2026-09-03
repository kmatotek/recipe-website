import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    // proxy so requests look like they are on same port, this avoics cors issues

    port: 5173, // FE port
    proxy: {
      // Intercept any request starting with /api
      '/api': {
        target: 'https://localhost:5001', // BE
        changeOrigin: true,
        secure: false, // Allows self-signed certificates
      }
    }
  }
})
