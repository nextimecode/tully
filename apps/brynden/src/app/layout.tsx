import { ReactNode } from 'react'

import '@radix-ui/themes/styles.css'
import type { Viewport } from 'next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { PrelineScript } from '@/components/PrelineScript'

import { Theme } from '@radix-ui/themes'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false
}

export const metadata: Metadata = {
  title: {
    template: '%s | NeXTverso',
    default: 'NeXTverso'
  },
  description: ''
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <Theme>
          <div className="relative min-h-screen">{children}</div>
        </Theme>
        <PrelineScript />
      </body>
    </html>
  )
}
