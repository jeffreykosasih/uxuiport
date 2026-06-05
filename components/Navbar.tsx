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
    className='fixed bottom-6 right-6 z-[60] inline-flex h-16 w-16 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover'
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
    className='fixed top-6 left-6 z-[60] inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-transparent shadow-lg transition-all duration-200 hover:scale-105'
    onClick={onClick}
    aria-label='Jeffrey Ko home'
  >
    <Image
      src='/jeffreyko-logo.svg'
      alt='Jeffrey Ko logo'
      width={64}
      height={64}
      priority
      className='h-16 w-16 object-cover'
    />
  </Link>
);

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <>
    <header className='fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md'>
      <div className='relative h-24 flex items-center justify-center'>
        <nav className='hidden items-center justify-center gap-8 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.label)}
              className={`relative transition-all ${
                displayedActiveTab === item.label
                  ? 'text-text-primary font-bold'
                  : 'text-text-primary/80 font-semibold hover:text-text-primary'
              } text-xl`}
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

        <div className='absolute right-0 top-0 flex items-center justify-end md:hidden'>
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
                  className={`transition-colors ${
                    displayedActiveTab === item.label
                      ? 'text-text-primary font-bold'
                      : 'text-text-primary/80 font-semibold hover:text-hover'
                  } text-lg`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    <LogoButton onClick={() => handleLinkClick('Home')} />
    <ThemeToggle
      isDarkMode={isDarkMode}
      onToggle={() => setIsDarkMode((current) => !current)}
    />
    </>
  );
};
