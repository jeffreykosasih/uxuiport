'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Youtube,
} from 'lucide-react';

type ContactItem = {
  label: string;
  icon: typeof Mail;
  href?: string;
  onClick?: () => void;
  download?: boolean;
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jeffreyko98@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const workLinks: ContactItem[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeffreykosasih/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      onClick: copyEmail,
      icon: Mail,
    },
    {
      label: 'Download resume',
      href: '/Jeffrey-Ko-UXUI-Designer-Resume.pdf',
      download: true,
      icon: FileDown,
    },
  ];

  const socialLinks: ContactItem[] = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/sijefriii',
      icon: Instagram,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@sijefrii',
      icon: Music2,
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@sijefri',
      icon: Youtube,
    },
  ];

  const itemClass =
    'inline-flex p-2 text-text-primary transition-all duration-200 hover:-translate-y-1 hover:text-hover';

  const renderItem = (item: ContactItem) => {
    const Icon = item.icon;
    const iconEl = <Icon className='h-10 w-10 md:h-12 md:w-12' />;

    if (item.onClick) {
      return (
        <button
          key={item.label}
          type='button'
          onClick={item.onClick}
          aria-label={item.label}
          title={item.label}
          className={itemClass}
        >
          {iconEl}
        </button>
      );
    }

    if (item.download) {
      return (
        <a
          key={item.label}
          href={item.href}
          download
          aria-label={item.label}
          title={item.label}
          className={itemClass}
        >
          {iconEl}
        </a>
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
          <h2 className='text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'>
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
        {copied && (
          <p className='mt-6 text-lg font-semibold text-hover md:text-right'>
            Email copied
          </p>
        )}
      </motion.div>
    </section>
  );
};
