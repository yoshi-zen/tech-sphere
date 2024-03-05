import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'

import { Noto_Sans_JP } from 'next/font/google'

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechSphere',
  description: '理系大学生による技術共有サイト',
  keywords: ['技術', '大学生', '共有'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={noto_sans_jp.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
