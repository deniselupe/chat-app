import React from 'react';
import './globals.css'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({ weight: ['300', '400', '700'], subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={robotoCondensed.className}>
      <body>{children}</body>
    </html>
  )
}