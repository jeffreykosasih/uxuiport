import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Jeffrey Ko',
  description: 'Jeffrey Ko Portfolio Site',
  icons: {
    icon: '/jeffreyko-logo.svg',
    shortcut: '/jeffreyko-logo.svg',
    apple: '/jeffreyko-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${syne.variable} antialiased bg-primary text-text-primary font-light`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
