import type { Metadata } from 'next'

import { Layout } from '@/components/layouts/Layout'

import './globalStyles/globals.css'

export const metadata: Metadata = {
  title: 'Ростелеком',
  description: 'Сайт ростелекома',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
