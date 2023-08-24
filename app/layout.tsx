import './app.sass';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

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
      path: '../lib/fonts/THICCCBOI-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
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
  title: 'GScore',
  description: 'Generated by create next app',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${thicccboi.variable} ${inter.variable}`}>
        <div className="wrapper">
          <Header />
          <span className='icon'></span>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
