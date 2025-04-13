import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5172,
    host: 'localhost', // Optional: change to '0.0.0.0' if you want LAN access
    allowedHosts: ['reservations.tasteofindia-grossenhain.de']
  }
})