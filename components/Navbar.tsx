'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isManualScroll = useRef(false);
  const navItems = ['Home', 'Work', 'About', 'Contact'];
  const displayedActiveTab = pathname.startsWith('/cs') ? 'Work' : activeTab;

  useEffect(() => {
    // Only set up scroll spy on the home page
    if (pathname !== '/') return;

    const handleScroll = () => {
      // Skip updates if scrolling was initiated by a click
      if (isManualScroll.current) return;

      const sections = ['home', 'work', 'about', 'contact'];

      // Check if at bottom of page
      if ((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight - 50) {
         setActiveTab('Contact');
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
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
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
    <header className='fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-highlight/20'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        <Link
          href='/'
          className='text-2xl font-semibold text-text-primary hover:text-hover transition-colors'
          onClick={() => handleLinkClick('Home')}
        >
          Jeffrey Ko
        </Link>

        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`relative font-light transition-all text-lg ${
                displayedActiveTab === item
                  ? 'text-text-primary font-medium'
                  : 'text-text-primary/80 hover:text-text-primary hover:font-medium'
              }`}
            >
              {item}
              {displayedActiveTab === item && (
                <motion.div
                  layoutId='navbar-underline'
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-hover'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className='md:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-lg p-2 text-text-primary hover:text-hover transition-colors'
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
            className='md:hidden border-t border-highlight/20 bg-primary/95 backdrop-blur-md'
          >
            <div className='px-6 py-4 flex flex-col gap-3'>
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item}`}
                  href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                  onClick={() => handleLinkClick(item)}
                  className={`text-base transition-colors ${
                    displayedActiveTab === item
                      ? 'text-text-primary font-medium'
                      : 'text-text-primary/80 hover:text-hover'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
