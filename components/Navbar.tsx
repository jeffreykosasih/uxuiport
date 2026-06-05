'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => (
  <button
    type='button'
    onClick={onToggle}
    className='inline-flex h-24 w-24 items-center justify-center bg-text-primary text-primary transition-colors hover:bg-hover'
    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    aria-pressed={isDarkMode}
  >
    {isDarkMode ? <Moon className='h-7 w-7' /> : <Sun className='h-7 w-7' />}
  </button>
);

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;

    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });
  const pathname = usePathname();
  const isManualScroll = useRef(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Connect', href: '/#contact' },
  ];
  const displayedActiveTab = pathname.startsWith('/cs') ? 'Work' : activeTab;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    // Only set up scroll spy on the home page
    if (pathname !== '/') return;

    const handleScroll = () => {
      // Skip updates if scrolling was initiated by a click
      if (isManualScroll.current) return;

      const sections = ['home', 'work', 'about', 'contact'];

      // Check if at bottom of page
      if ((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight - 50) {
         setActiveTab('Connect');
         return;
      }
      
      // Default to Home if at the very top
      if (window.scrollY < 100) {
        setActiveTab('Home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in the viewport (with some offset for the navbar)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section === 'contact' ? 'Connect' : section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (item: string) => {
    // Manually set active tab immediately for responsiveness
    setActiveTab(item);
    setIsMenuOpen(false);

    // Set manual scroll flag
    isManualScroll.current = true;

    // Clear flag after scroll animation completes (approx 1s)
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md'>
      <div className='h-24 grid grid-cols-[6rem_minmax(0,1fr)_6rem] items-center'>
        <Link
          href='/'
          className='inline-flex h-24 w-24 items-center justify-center overflow-hidden bg-[#f1e2d1] transition-all duration-200 hover:bg-hover dark:bg-[#222222]'
          onClick={() => handleLinkClick('Home')}
          aria-label='Jeffrey Ko home'
        >
          <Image
            src='/jeffreyko-logo.svg'
            alt='Jeffrey Ko logo'
            width={64}
            height={64}
            priority
            className='h-20 w-20 object-cover'
          />
        </Link>

        <nav className='hidden items-center justify-center gap-8 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.label)}
              className={`relative transition-all text-lg ${
                displayedActiveTab === item.label
                  ? 'text-text-primary font-semibold'
                  : 'text-text-primary/80 hover:text-text-primary hover:font-medium'
              } ${
                item.label === 'Home' ? 'font-bold' : 'font-light'
              }`}
            >
              {item.label}
              {displayedActiveTab === item.label && (
                <motion.div
                  layoutId='navbar-underline'
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-hover'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className='flex items-center justify-end md:hidden'>
          <button
            type='button'
            className='inline-flex h-24 w-16 items-center justify-center text-text-primary hover:text-hover transition-colors'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        <div className='hidden justify-self-end md:block'>
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode((current) => !current)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className='md:hidden bg-primary/95 backdrop-blur-md'
          >
            <div className='px-6 py-4 flex flex-col gap-3'>
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  onClick={() => handleLinkClick(item.label)}
                  className={`text-base transition-colors ${
                    displayedActiveTab === item.label
                      ? 'text-text-primary font-medium'
                      : 'text-text-primary/80 hover:text-hover'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-2'>
                <ThemeToggle
                  isDarkMode={isDarkMode}
                  onToggle={() => setIsDarkMode((current) => !current)}
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
