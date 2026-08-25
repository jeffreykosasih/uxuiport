'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoDocumentText, IoMail } from 'react-icons/io5';

type ContactItem = {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jefpkos@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const workLinks: ContactItem[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeffreykosasih/',
      icon: FaLinkedin,
    },
    {
      label: 'Email',
      onClick: copyEmail,
      icon: IoMail,
    },
    {
      label: 'Resume',
      href: '/Jeffrey-Ko-UXUI-Designer-Resume.pdf',
      icon: IoDocumentText,
    },
  ];

  const socialLinks: ContactItem[] = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/sijefriii',
      icon: FaInstagram,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@sijefrii',
      icon: FaTiktok,
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@sijefri',
      icon: FaYoutube,
    },
  ];

  const itemClass =
    'inline-flex p-2 text-text-primary transition-all duration-200 hover:-translate-y-1 hover:text-accent';

  const renderItem = (item: ContactItem) => {
    const Icon = item.icon;
    const iconEl = <Icon className='h-10 w-10 md:h-12 md:w-12' />;

    if (item.onClick) {
      return (
        <div key={item.label} className='relative'>
          <button
            type='button'
            onClick={item.onClick}
            aria-label={item.label}
            title={item.label}
            className={itemClass}
          >
            {iconEl}
          </button>
          <AnimatePresence>
            {item.label === 'Email' && copied && (
              <motion.span
                initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.9 }}
                animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                exit={{ opacity: 0, y: 10, x: '-50%', scale: 0.9 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className='pointer-events-none absolute bottom-full left-1/2 mb-4 whitespace-nowrap rounded-xl border-2 border-text-primary bg-primary px-4 py-1.5 text-base font-bold text-accent shadow-lg'
              >
                Email copied
                {/* Comic speech-bubble tail pointing at the mail icon */}
                <svg
                  aria-hidden='true'
                  width='18'
                  height='11'
                  viewBox='0 0 18 11'
                  className='absolute left-1/2 top-full -mt-[2px] -translate-x-1/2 overflow-visible text-text-primary'
                >
                  <path
                    d='M1 0 L9 10 L17 0'
                    fill='var(--site-primary)'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinejoin='round'
                  />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={item.label}
        title={item.label}
        className={itemClass}
      >
        {iconEl}
      </a>
    );
  };

  return (
    <section id='contact' className='py-24 px-6 flex items-center'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='max-w-7xl mx-auto w-full py-8'
      >
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-[clamp(3rem,7vw,4.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-text-primary'>
            Connect
          </h2>

          <div className='flex flex-col gap-6 md:items-end'>
            <div className='flex flex-wrap items-center gap-5 md:justify-end md:gap-7'>
              {workLinks.map(renderItem)}
            </div>
            <div className='flex flex-wrap items-center gap-5 md:justify-end md:gap-7'>
              {socialLinks.map(renderItem)}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
