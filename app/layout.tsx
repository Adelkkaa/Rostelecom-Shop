import type { Metadata } from 'next'
import { PagesLayout } from '@/components/layouts/PagesLayout'

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
  return <PagesLayout>{children}</PagesLayout>
}
