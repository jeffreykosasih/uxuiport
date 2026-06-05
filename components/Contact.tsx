import React from 'react';
import { Instagram, Mail, MapPin, Music2, Youtube } from 'lucide-react';

export const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:jeffreyko98@gmail.com',
      icon: Mail,
    },
    {
      label: 'Location',
      href: 'https://www.google.com/maps/search/?api=1&query=Melbourne%2C%20Australia',
      icon: MapPin,
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@sijefri',
      icon: Youtube,
    },
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
  ];

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
        </div>

        <div className='flex flex-wrap items-center justify-center gap-6 md:gap-9'>
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith('http');

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
                className='inline-flex p-2 text-text-primary transition-all duration-200 hover:-translate-y-1 hover:text-hover'
              >
                <Icon className='h-10 w-10 md:h-12 md:w-12' />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
