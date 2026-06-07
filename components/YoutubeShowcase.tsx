import React from 'react';

const videos = [
  'efNGNH3cGmE',
  'o5LIA3vhqWc',
  '03EvVLxxFfc',
  'coK8kSPl0ls',
  'IKeugXum-gs',
  '98ZvTSCLLDA',
];

export const YoutubeShowcase = () => {
  return (
    <section className='bg-primary px-6 py-20'>
      <div className='mb-10 px-6 text-center'>
        <p className='font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
          SILLY VIDEO HIHI
        </p>
      </div>

      <div className='mx-auto grid max-w-[100rem] grid-cols-1 gap-6 md:grid-cols-2'>
        {videos.map((videoId, index) => (
          <div
            key={videoId}
            className='aspect-video overflow-hidden rounded-3xl bg-text-primary/10 shadow-xl'
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
      </div>
    </section>
  );
};
