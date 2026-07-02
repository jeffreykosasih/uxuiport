'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

const workDescriptions: Record<string, string> = {
  '01': 'Redesign a fitness app that strengthen brand identity and style consistency along with clearer navigation.',
  '02': 'Redesign a delivery app for faster tasks flows and easier map navigation.',
  '03': "3D model with island theme that showcase Jeffrey's IT project.",
  '04': 'Japanese restaurant website concept shaped around a minimal, useful, and polished dining experience.',
  '05': 'A habit app that helps users grow the habits worth keeping and uproot the ones worth breaking, framed through a calm plant metaphor.',
  '06': 'A streamlined website for learning about fruits and vegetables — their benefits, risks, and how to turn them into dishes.',
};

export const WorkGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex] ?? PROJECTS[0];
  const activeImage =
    activeProject.workImage ?? activeProject.stages.Overview.image;
  const activeDescription =
    workDescriptions[activeProject.id] ?? activeProject.stages.Overview.content;

  return (
    <section id='work' className='py-20 md:py-28'>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='pb-10 pt-10 text-center text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:pb-24 md:pt-20 md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'
      >
        Work
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:px-16'
      >
        {/* Interactive project index */}
        <ul className='flex flex-col'>
          {PROJECTS.map((project, index) => {
            const isActive = index === activeIndex;
            const image = project.workImage ?? project.stages.Overview.image;
            const description =
              workDescriptions[project.id] ?? project.stages.Overview.content;

            return (
              <li
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                className='group border-b border-highlight/40 first:border-t'
              >
                <div className='flex items-center gap-4 py-5 md:py-6'>
                  <Link
                    href={`/cs${project.id}`}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={`${project.title} case study`}
                    className='flex flex-1 items-baseline gap-4 md:gap-6'
                  >
                    <span
                      className={`font-mono text-sm transition-colors duration-300 ${
                        isActive ? 'text-accent-bright' : 'text-text-primary/35'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-text-primary md:translate-x-2'
                          : 'text-text-primary/35'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </Link>

                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Visit live site'
                      aria-label={`${project.title} — visit live site`}
                      className={`shrink-0 transition-colors duration-300 hover:text-hover ${
                        isActive ? 'text-text-primary' : 'text-text-primary/35'
                      }`}
                    >
                      <ArrowUpRight className='h-6 w-6 md:h-7 md:w-7' />
                    </a>
                  )}
                </div>

                {/* Inline preview on mobile (no hover available) */}
                <Link
                  href={`/cs${project.id}`}
                  aria-hidden='true'
                  tabIndex={-1}
                  className='mt-4 block md:hidden'
                >
                  <div className='relative aspect-video w-full overflow-hidden rounded-xl border border-accent-dark/30 bg-black/10 shadow-xl'>
                    {image ? (
                      <Image
                        src={image}
                        alt={`${project.title} preview`}
                        fill
                        sizes='100vw'
                        className='object-cover'
                      />
                    ) : null}
                  </div>
                </Link>
                <p className='mb-6 mt-4 border-l-2 border-accent-bright pl-5 text-lg text-accent-bright font-light leading-relaxed md:hidden'>
                  {description}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Shared preview screen (desktop) */}
        <div className='hidden md:block'>
          <Link
            href={`/cs${activeProject.id}`}
            aria-label={`${activeProject.title} case study`}
            className='block'
          >
            <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-accent-dark/30 bg-black/10 shadow-2xl'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className='absolute inset-0'
                >
                  {activeImage ? (
                    <Image
                      src={activeImage}
                      alt={`${activeProject.title} preview`}
                      fill
                      sizes='(min-width: 768px) 45vw, 100vw'
                      className='object-cover'
                      priority
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </Link>
          <AnimatePresence mode='wait'>
            <motion.p
              key={activeProject.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='mt-8 max-w-xl border-l-2 border-accent-bright pl-5 md:pl-6 text-xl md:text-2xl text-accent-bright font-light leading-relaxed'
            >
              {activeDescription}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
