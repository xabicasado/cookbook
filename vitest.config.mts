import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    include: ['**/__tests__/**/*.test.[jt]s?(x)'],
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})
