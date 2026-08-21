'use client';

import { motion } from 'framer-motion';

const videos = [
  { id: '42I_fxcanxo', title: 'In The Summer' },
  { id: 'o5LIA3vhqWc', title: 'Lala' },
  { id: '03EvVLxxFfc', title: 'Aqua' },
];

export const YoutubeShowcase = () => {
  return (
    <section className='px-6 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='mb-10 px-6 text-center'
      >
        <p className='font-mono text-base uppercase tracking-[0.35em] text-accent-dark md:text-lg'>
          Beyond design
        </p>
        <p className='mt-3 text-xl font-light text-text-muted md:text-2xl'>
          Live looping music I make on the spot.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3'
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className='aspect-video overflow-hidden rounded-2xl bg-text-primary/10 shadow-xl'
          >
            <iframe
              className='h-full w-full'
              src={`https://www.youtube.com/embed/${video.id}`}
              title={`${video.title} — live loop by Jefri`}
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
