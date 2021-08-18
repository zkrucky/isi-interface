import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  build: {
    outDir: 'build'
  },
  plugins: [reactRefresh()],
  esbuild: {
      // jsxInject: `import React from 'react';`
  }
})
