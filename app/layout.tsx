import type { Metadata } from 'next'

import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import { Layout } from '@/components/layouts/Layout'

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
