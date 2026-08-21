import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  Anton,
  Archivo,
  Baloo_2,
  Barlow_Condensed,
  Caveat,
  Fraunces,
  JetBrains_Mono,
  Outfit,
  Shippori_Mincho,
  Syne,
} from 'next/font/google';
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

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

/**
 * Display faces that give each project page its own voice.
 *
 * Each loader has to be its own module-scope const — next/font resolves these at
 * build time by static analysis, so it cannot see calls made inside an array
 * literal, an object, or a function.
 *
 * `preload: false` on purpose: only one of these is ever used per route, so
 * preloading all seven would add seven font preloads to every page — including
 * the home page, which uses none of them. They load on demand when a project
 * page's --project-font resolves to one.
 */
const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
  preload: false,
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['600', '700'],
  preload: false,
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  preload: false,
});

const shipporiMincho = Shippori_Mincho({
  variable: '--font-mincho',
  subsets: ['latin'],
  weight: ['700', '800'],
  preload: false,
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  preload: false,
});

const baloo2 = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  preload: false,
});

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['700', '800'],
  preload: false,
});

const projectFontVariables = [
  anton,
  barlowCondensed,
  outfit,
  shipporiMincho,
  fraunces,
  baloo2,
  archivo,
]
  .map((font) => font.variable)
  .join(' ');

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jeffreyko.com'),
  title: {
    default: 'Jeffrey Ko — UX/UI Designer',
    template: '%s — Jeffrey Ko',
  },
  description:
    'Portfolio of Jeffrey Ko, a UX/UI designer crafting digital products that are easy to use and a pleasure to come back to.',
  openGraph: {
    title: 'Jeffrey Ko — UX/UI Designer',
    description:
      'UX/UI designer crafting digital products that are easy to use and a pleasure to come back to.',
    url: 'https://www.jeffreyko.com',
    siteName: 'Jeffrey Ko',
    type: 'website',
    images: [{ url: '/profile-portrait.jpg', alt: 'Jeffrey Ko — UX/UI Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeffrey Ko — UX/UI Designer',
    description:
      'UX/UI designer crafting digital products that are easy to use and a pleasure to come back to.',
    images: ['/profile-portrait.jpg'],
  },
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
    <html lang='en' data-scroll-behavior='smooth'>
      <body
        className={`${syne.variable} ${caveat.variable} ${jetbrainsMono.variable} ${projectFontVariables} antialiased text-text-primary font-light`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className='px-6 py-8 text-center text-sm font-semibold text-text-muted'>
          Designed and coded by Jeffrey Ko
        </footer>
      </body>
    </html>
  );
}
