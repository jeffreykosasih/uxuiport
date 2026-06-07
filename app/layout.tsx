import type { Metadata } from 'next';
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
        url: '/jeffreyko-logo.png?v=2',
        type: 'image/png',
      },
    ],
    shortcut: '/jeffreyko-logo.png?v=2',
    apple: '/jeffreyko-logo.png?v=2',
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
        className={`${syne.variable} ${caveat.variable} antialiased bg-primary text-text-primary font-light`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
