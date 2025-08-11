import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external connections
    allowedHosts: [
      '.ngrok-free.app', // Allow all ngrok free domains
      '.ngrok.io',       // Allow all ngrok domains
      'localhost',       // Allow localhost
    ],
  },
})
