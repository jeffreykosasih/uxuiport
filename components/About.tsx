import React from 'react';
import Image from 'next/image';

export const About = () => {
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
              creativity.
            </p>
            <p>
              <span className='font-medium text-text-primary'>Fun Fact:</span>{' '}
              I’m also make music! I create my own tracks using a live-looping
              style (think building a song layer by layer).
            </p>
          </div>
        </div>

        <div className='relative h-[600px] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-sm backdrop-blur-sm'>
          <Image
            src='/profile.jpg'
            alt='Profile picture of Jeffrey Ko'
            fill
            sizes='(min-width: 768px) 40vw, 100vw'
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
};
