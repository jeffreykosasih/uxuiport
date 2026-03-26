import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='py-24 px-6 bg-primary min-h-[60vh] flex items-center'
    >
      <div className='max-w-4xl mx-auto w-full'>
        <div className='text-center mb-16'>
          <h2 className='text-6xl font-semibold text-text-primary mb-6 tracking-tight'>
            CONTACT
          </h2>
        </div>

        <div className='grid grid-cols-2 gap-8 md:gap-14 max-w-3xl mx-auto place-items-center'>
          <div className='flex items-center justify-center gap-4 md:gap-6'>
            <div className='p-3 md:p-4 bg-white/5 rounded-lg text-text-primary shrink-0'>
              <Mail className='w-6 h-6 md:w-8 md:h-8' />
            </div>
            <div className='text-left'>
              <h3 className='font-semibold text-text-primary mb-1 text-lg md:text-xl leading-none'>
                Email
              </h3>
              <a
                href='mailto:jeffreyko98@gmail.com'
                className='text-accent-bright hover:text-hover transition-colors font-light block text-sm md:text-lg break-all'
              >
                jeffreyko98@gmail.com
              </a>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 md:gap-6'>
            <div className='p-3 md:p-4 bg-white/5 rounded-lg text-text-primary shrink-0'>
              <MapPin className='w-6 h-6 md:w-8 md:h-8' />
            </div>
            <div className='text-left'>
              <h3 className='font-semibold text-text-primary mb-1 text-lg md:text-xl leading-none'>
                Location
              </h3>
              <p className='text-accent-bright font-light text-sm md:text-lg'>
                Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
