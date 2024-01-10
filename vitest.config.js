/// <reference types="vitest" />

import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  setupFiles: ['./vitest-setup.js'],
  test: {
    passWithNoTests: true,
    globals: true,
    environment: 'jsdom',
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.test.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
      exclude: ['src/@types/**', 'src/app/**']
    },
    watch: {
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.next/**',
        '**/.vscode/**',
        '**/.husky/**',
        '**/coverage/**'
      ]
    }
  }
})
