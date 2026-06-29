'use client';

import { motion } from 'framer-motion';

const videos = [
  'efNGNH3cGmE',
  'o5LIA3vhqWc',
  '03EvVLxxFfc',
];

export const YoutubeShowcase = () => {
  return (
    <section className='px-6 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-10 px-6 text-center'
      >
        <p className='font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
          SILLY VIDEO HIHI
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3'
      >
        {videos.map((videoId, index) => (
          <div
            key={videoId}
            className='aspect-video overflow-hidden rounded-2xl bg-text-primary/10 shadow-xl'
          >
            <iframe
              className='h-full w-full'
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Sijefri YouTube video ${index + 1}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
