import React from 'react';
import Image from 'next/image';
import { Instagram, Youtube, Music2 } from 'lucide-react';

export const About = () => {
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/sijefriii',
      icon: Instagram,
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@sijefriii',
      icon: Youtube,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@sijefriii',
      icon: Music2,
    },
  ];

  return (
    <section id='about' className='py-24 px-6 bg-accent-dark/10'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
        <div className='space-y-8'>
          <h2 className='text-5xl font-semibold text-text-primary'>
            More personality
          </h2>
          <div className='space-y-6 text-xl text-accent-bright leading-relaxed font-light'>
            <p className='font-medium text-2xl text-text-primary'>
              Jeffrey Ko.
            </p>
            <p>
              Originally from Indonesia and now currently in Australia, I am a
              designer that has a unique edge: I speak the language of
              developers and product managers.
            </p>
            <p>
              My background in programming and product strategy allows me to
              design solutions that are not only user-friendly but technically
              feasible. For me, UX/UI is the perfect blend of logic and
              creativity. For IT portfolio work, visit{' '}
              <a
                href='https://jefri.dev'
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-text-primary underline decoration-text-primary/60 underline-offset-4 hover:text-hover transition-colors'
              >
                jefri.dev
              </a>
              .
            </p>
            <p>
              <span className='font-medium text-text-primary'>Fun Fact:</span> I
              also make music live on the spot using loop station!
            </p>
          </div>
        </div>

        <div className='relative h-[600px] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-sm backdrop-blur-sm'>
          <Image
            src='/profile-portrait.jpg'
            alt='Profile picture of Jeffrey Ko'
            fill
            sizes='(min-width: 768px) 40vw, 100vw'
            quality={95}
            className='object-cover object-center'
          />
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4'>
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='inline-flex h-14 w-14 items-center justify-center rounded-full border border-text-primary/30 bg-primary/85 text-text-primary transition-all duration-200 hover:scale-110 hover:border-hover/60 hover:text-hover'
                >
                  <Icon className='h-6 w-6' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
