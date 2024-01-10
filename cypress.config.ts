import { defineConfig } from 'cypress'

import { env } from '@/env'

export default defineConfig({
  e2e: {
    baseUrl: env.NEXT_PUBLIC_BASE_URL
  }
})
