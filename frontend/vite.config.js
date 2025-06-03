import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './frontend-src/main.jsx'
    }
  }
})