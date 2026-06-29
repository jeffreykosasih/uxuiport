'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => (
  <button
    type='button'
    onClick={onToggle}
    className='fixed bottom-6 right-6 z-[60] inline-flex h-16 w-16 items-center justify-center rounded-full bg-text-primary text-primary shadow-[0_8px_45px_-4px_var(--site-tab-glow)] transition-all hover:scale-105 hover:bg-hover'
    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    aria-pressed={isDarkMode}
  >
    {isDarkMode ? <Moon className='h-7 w-7' /> : <Sun className='h-7 w-7' />}
  </button>
);

type LogoButtonProps = {
  onClick: () => void;
};

const LogoButton = ({ onClick }: LogoButtonProps) => (
  <Link
    href='/'
    className='fixed top-6 left-6 z-[60] inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-transparent shadow-2xl drop-shadow-2xl transition-all duration-200 hover:scale-105 md:h-28 md:w-28'
    onClick={onClick}
    aria-label='Jeffrey Ko home'
  >
    <Image
      src='/jeffreyko-logo.svg'
      alt='Jeffrey Ko logo'
      width={64}
      height={64}
      priority
      className='h-24 w-24 object-cover md:h-28 md:w-28'
    />
  </Link>
);

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <LogoButton onClick={() => undefined} />
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((current) => !current)}
      />
    </>
  );
};
