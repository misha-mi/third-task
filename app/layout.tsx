import './app.sass';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/layout/header/header';

const inter = Inter({
  variable: "--font-inter",
  weight: ["500", "600", "700"],
  subsets: ['latin'],
  style: ["normal"],
  display: 'swap'
})

const thicccboi = localFont({
  variable: "--font-thicccboi",
  src: [
    {
      path: '../lib/fonts/THICCCBOI-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../lib/fonts/THICCCBOI-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../lib/fonts/THICCCBOI-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${thicccboi.variable} ${inter.variable}`}>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
