import React from 'react';
import { Mail, MapPin, Instagram, Youtube } from 'lucide-react';

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

        <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24'>
          {/* Contact Info */}
          <div className='space-y-8 w-full md:w-auto'>
            <div className='flex items-center gap-6'>
              <div className='p-4 bg-white/5 rounded-lg text-text-primary shrink-0'>
                <Mail className='w-8 h-8' />
              </div>
              <div>
                <h3 className='font-semibold text-text-primary mb-1 text-xl'>
                  Email
                </h3>
                <a
                  href='mailto:jeffreyko98@gmail.com'
                  className='text-accent-bright hover:text-hover transition-colors font-light block text-lg'
                >
                  jeffreyko98@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <div className='p-4 bg-white/5 rounded-lg text-text-primary shrink-0'>
                <MapPin className='w-8 h-8' />
              </div>
              <div>
                <h3 className='font-semibold text-text-primary mb-1 text-xl'>
                  Location
                </h3>
                <p className='text-accent-bright font-light text-lg'>
                  Melbourne, Australia
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className='hidden md:block w-px h-64 bg-accent-dark/30'></div>

          {/* Social Links */}
          <div className='space-y-8 w-full md:w-auto'>
            <div className='flex items-center gap-6'>
              <div className='p-4 bg-white/5 rounded-full text-text-primary shrink-0'>
                <Instagram className='w-8 h-8' />
              </div>
              <div>
                <h4 className='font-medium text-text-primary mb-1 text-xl'>
                  Instagram
                </h4>
                <a
                  href='#'
                  className='text-accent-bright hover:text-hover transition-colors font-light block text-lg'
                >
                  sijefriii
                </a>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <div className='p-4 bg-white/5 rounded-full text-text-primary shrink-0'>
                <Youtube className='w-8 h-8' />
              </div>
              <div>
                <h4 className='font-medium text-text-primary mb-1 text-xl'>
                  YouTube
                </h4>
                <a
                  href='#'
                  className='text-accent-bright hover:text-hover transition-colors font-light block text-lg'
                >
                  sijefriii
                </a>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <div className='p-4 bg-white/5 rounded-full text-text-primary shrink-0 flex items-center justify-center'>
                <span className='w-8 h-8 font-bold flex items-center justify-center text-sm'>
                  TT
                </span>
              </div>
              <div>
                <h4 className='font-medium text-text-primary mb-1 text-xl'>
                  TikTok
                </h4>
                <a
                  href='#'
                  className='text-accent-bright hover:text-hover transition-colors font-light block text-lg'
                >
                  sijefriii
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
