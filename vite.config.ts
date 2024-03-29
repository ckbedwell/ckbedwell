import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, `src`),
    },
  },
  server: {
    open: true,
  },
  // @ts-ignore -- really?
  test: {
    environment: 'jsdom',
  },
  plugins: [react()],
})
