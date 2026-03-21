import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex flex-col justify-center px-6 pt-20'
    >
      <div className='max-w-4xl mx-auto w-full space-y-8 md:pl-10 lg:pl-14'>
        <h1 className='text-5xl md:text-7xl font-semibold text-text-primary tracking-tight leading-tight'>
          Hi friends, my name is{' '}
          <span className='inline-block text-6xl md:text-8xl font-bold text-text-primary border-b-4 border-hover/90 pb-1'>
            Jeffrey Ko
          </span>
        </h1>

        <div className='text-xl text-accent-bright/90 max-w-3xl leading-relaxed space-y-6 font-light'>
          <p>
            Pivoted from engineering role and now focused on solving complex
            problems through intuitive User Experience (UX) and User Interface
            (UI) design. Feel free to explore my work below and lets connect.
          </p>
        </div>

        <div className='pt-8'>
          <Link
            href='#work'
            className='inline-flex items-center gap-3 bg-text-primary text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-hover hover:text-primary transition-all transform hover:scale-105 group'
          >
            View Work
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </section>
  );
};
