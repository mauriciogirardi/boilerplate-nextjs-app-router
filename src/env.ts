import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.string().url().default('http://localhost:3000/api'),
    SITE_NAME: z.string().default('Boilerplate'),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development')
  },

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url().default('http://localhost:3000')
  },

  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    APP_URL: process.env.APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    SITE_NAME: process.env.SITE_NAME
  }
})
