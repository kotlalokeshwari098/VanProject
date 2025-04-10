import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // This ensures client-side routing works on refresh
    historyApiFallback: true,
  }
})
