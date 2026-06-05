import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen overflow-hidden bg-primary pt-24'
    >
      <div className='grid min-h-[calc(100vh-6rem)] md:grid-cols-[minmax(0,1fr)_minmax(360px,45vw)]'>
        <div className='flex flex-col justify-between px-6 py-12 md:px-12 lg:px-20'>
          <div className='py-10'>
            <p className='mb-6 font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
              UX/UI Designer
            </p>
            <h1 className='max-w-4xl text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'>
              Jeffrey Ko
            </h1>
          </div>

          <div className='mt-12 flex flex-col gap-8 md:max-w-2xl'>
            <p className='text-2xl font-light leading-relaxed text-text-primary md:text-3xl'>
              Explore selected UX/UI projects shaped around clear flows, useful
              interactions, and polished interface details.
            </p>
          </div>
        </div>

        <div className='relative min-h-[70vh] md:min-h-[calc(100vh-6rem)]'>
          <Image
            src='/profile-portrait.jpg'
            alt='Profile picture of Jeffrey Ko'
            fill
            sizes='(min-width: 768px) 45vw, 100vw'
            priority
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
};
