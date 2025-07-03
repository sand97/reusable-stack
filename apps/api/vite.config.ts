import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8787,
  },
  plugins: [cloudflare()]
})
