'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen overflow-hidden'
    >
      <div className='grid min-h-screen md:grid-cols-[minmax(0,1fr)_minmax(360px,45vw)]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='flex flex-col justify-between px-6 pb-12 pt-32 md:px-12 md:pt-40 lg:px-20'
        >
          <div className='py-10'>
            <p className='mb-6 font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
              UX/UI Designer
            </p>
            <h1 className='max-w-4xl text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'>
              Jeffrey Ko
            </h1>
          </div>

          <div className='mt-12 flex flex-col gap-8 md:max-w-5xl'>
            <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
              <p className='max-w-2xl text-xl font-light leading-relaxed text-text-primary md:text-2xl'>
                I design digital products that are easy to use and a pleasure
                to come back to.
              </p>

              <nav
                aria-label='Section navigation'
                className='flex flex-nowrap items-center gap-3 text-base font-bold md:text-lg'
              >
                {[
                  { label: 'Work', href: '#work' },
                  { label: 'About', href: '#about' },
                  { label: 'Connect', href: '#contact' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='rounded-2xl bg-text-primary px-4 py-2.5 text-primary transition-all hover:-translate-y-1 hover:bg-hover md:px-5 md:py-3'
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className='relative min-h-[70vh] md:min-h-screen'
        >
          <Image
            src='/profile-portrait.jpg'
            alt='Profile picture of Jeffrey Ko'
            fill
            sizes='(min-width: 768px) 45vw, 100vw'
            priority
            className='object-cover object-center'
          />
        </motion.div>
      </div>
    </section>
  );
};
