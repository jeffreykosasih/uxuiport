import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Caveat, Syne } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Jeffrey Ko',
  description: 'Jeffrey Ko Portfolio Site',
  icons: {
    icon: [
      {
        url: '/favicon.ico?v=4',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png?v=4',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon.ico?v=4',
    apple: '/icon.png?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${syne.variable} ${caveat.variable} antialiased text-text-primary font-light`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className='px-6 py-8 text-center text-sm font-semibold text-text-primary/70'>
          Designed and coded by Jeffrey Ko
        </footer>
      </body>
    </html>
  );
}
