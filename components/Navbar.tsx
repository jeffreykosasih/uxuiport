'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const pathname = usePathname();
  const isManualScroll = useRef(false);

  useEffect(() => {
    // If we are on a case study page, force 'Work' to be active
    if (pathname.startsWith('/cs')) {
      setActiveTab('Work');
      return;
    }

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    // Manually set active tab immediately for responsiveness
    setActiveTab(item);
    
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
          onClick={(e) => handleLinkClick(e, 'Home')}
        >
          Jeffrey Ko
        </Link>

        <nav className='hidden md:flex items-center gap-8'>
          {['Home', 'Work', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, item)}
              className={`relative font-light transition-all text-lg ${
                activeTab === item
                  ? 'text-text-primary font-medium'
                  : 'text-text-primary/80 hover:text-text-primary hover:font-medium'
              }`}
            >
              {item}
              {activeTab === item && (
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
          {/* Mobile menu placeholder */}
          <span className='text-text-primary text-sm'>Menu</span>
        </div>
      </div>
    </header>
  );
};
