import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'

export const metadata: Metadata = {
  title: 'TechSphere',
  description: '理系大学生による技術共有サイト',
  keywords: ['技術', '大学生', '共有'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
