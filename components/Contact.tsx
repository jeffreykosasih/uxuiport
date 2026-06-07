'use client';

import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Music2, Youtube } from 'lucide-react';

type ExternalContactLink = {
  label: string;
  href: string;
  icon: typeof Mail;
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jeffreyko98@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const topLinks: Array<
    | ExternalContactLink
    | {
        label: string;
        onClick: () => Promise<void>;
        icon: typeof Mail;
      }
  > = [
    {
      label: 'Email',
      onClick: copyEmail,
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeffreykosasih/',
      icon: Linkedin,
    },
  ];

  const bottomLinks: ExternalContactLink[] = [
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

  const renderExternalLink = (link: ExternalContactLink) => {
    const Icon = link.icon;

    return (
      <a
        key={link.label}
        href={link.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={link.label}
        title={link.label}
        className='inline-flex p-2 text-text-primary transition-all duration-200 hover:-translate-y-1 hover:text-hover'
      >
        <Icon className='h-10 w-10 md:h-12 md:w-12' />
      </a>
    );
  };

  return (
    <section
      id='contact'
      className='py-14 px-6 bg-primary flex items-center'
    >
      <div className='max-w-5xl mx-auto w-full py-8'>
        <div className='mb-7 text-center'>
          <h2 className='font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
            Connect
          </h2>
          {copied && (
            <p className='mt-3 text-sm font-semibold text-hover'>
              Email copied
            </p>
          )}
        </div>

        <div className='flex flex-col items-center gap-6 md:gap-8'>
          <div className='flex flex-wrap items-center justify-center gap-6 md:gap-9'>
            {topLinks.map((link) => {
              const Icon = link.icon;

              if ('onClick' in link) {
                return (
                  <button
                    key={link.label}
                    type='button'
                    onClick={link.onClick}
                    aria-label={link.label}
                    title={link.label}
                    className='inline-flex p-2 text-text-primary transition-all duration-200 hover:-translate-y-1 hover:text-hover'
                  >
                    <Icon className='h-10 w-10 md:h-12 md:w-12' />
                  </button>
                );
              }

              return renderExternalLink(link);
            })}
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6 md:gap-9'>
            {bottomLinks.map(renderExternalLink)}
          </div>
        </div>
      </div>
    </section>
  );
};
