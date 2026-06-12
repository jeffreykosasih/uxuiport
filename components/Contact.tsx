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
  const contactLinks = [...topLinks, ...bottomLinks];

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
      className='py-24 px-6 bg-primary flex items-center'
    >
      <div className='max-w-7xl mx-auto w-full py-8'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'>
            Connect
          </h2>

          <div className='flex flex-wrap items-center gap-5 md:justify-end md:gap-7'>
            {contactLinks.map((link) => {
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
        </div>
        {copied && (
          <p className='mt-6 text-lg font-semibold text-hover'>
            Email copied
          </p>
        )}
      </div>
    </section>
  );
};
