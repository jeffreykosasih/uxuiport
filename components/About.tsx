import React from 'react';

export const About = () => {
  return (
    <section id='about' className='py-24 px-6 bg-accent-dark/10'>
      <div className='max-w-7xl mx-auto grid gap-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center'>
        <div className='space-y-8'>
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

        <h2 className='text-right text-[22vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[10rem] lg:text-[13rem] xl:text-[16rem]'>
          About
        </h2>
      </div>
    </section>
  );
};
