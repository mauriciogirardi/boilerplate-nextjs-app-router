import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { env } from '@/env'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const baseUrl = env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${env.SITE_NAME}`,
    default: env.SITE_NAME
  },
  description: 'Start new applications with a boilerplate'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}
