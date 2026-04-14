import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jeffrey Ko',
  description: 'Jeffrey Ko Portfolio Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} antialiased bg-primary text-text-primary font-light`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className='py-8 text-center text-text-primary text-sm font-semibold bg-primary border-t border-highlight/20'>
          <p>Designed and coded by Jeffrey Ko</p>
        </footer>
      </body>
    </html>
  );
}
