'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export const WorkGrid = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = PROJECTS[activeProjectIndex] ?? PROJECTS[0];
  const availableProjectIndices = PROJECTS.map((_, index) => index);

  // Always show 'Overview' stage for the main work grid preview
  const overviewContent = currentProject.stages.Overview;
  const workDescriptions: Record<string, string> = {
    '01': 'Redesign a fitness app that strengthen brand identity and style consistency along with clearer navigation.',
    '02': 'Redesign a delivery app for faster tasks flows and easier map navigation.',
    '03': "3D model with island theme that showcase Jeffrey's IT project.",
    '04': 'Japanese restaurant website concept shaped around a minimal, useful, and polished dining experience.',
    '05': 'A habit app that helps users grow the habits worth keeping and uproot the ones worth breaking, framed through a calm plant metaphor.',
  };
  const workDescription =
    workDescriptions[currentProject.id] ?? overviewContent.content;
  const workImage = currentProject.workImage ?? overviewContent.image;

  const goToPreviousCaseStudy = () => {
    const activeAvailableIndex =
      availableProjectIndices.indexOf(activeProjectIndex);
    if (activeAvailableIndex === -1) {
      setActiveProjectIndex(availableProjectIndices[0] ?? 0);
      return;
    }

    const previousIndex =
      activeAvailableIndex === 0
        ? availableProjectIndices[availableProjectIndices.length - 1]
        : availableProjectIndices[activeAvailableIndex - 1];
    if (previousIndex !== undefined) {
      setActiveProjectIndex(previousIndex);
    }
  };

  const goToNextCaseStudy = () => {
    const activeAvailableIndex =
      availableProjectIndices.indexOf(activeProjectIndex);
    if (activeAvailableIndex === -1) {
      setActiveProjectIndex(availableProjectIndices[0] ?? 0);
      return;
    }

    const nextIndex =
      activeAvailableIndex === availableProjectIndices.length - 1
        ? availableProjectIndices[0]
        : availableProjectIndices[activeAvailableIndex + 1];
    if (nextIndex !== undefined) {
      setActiveProjectIndex(nextIndex);
    }
  };

  return (
    <section
      id='work'
      className='py-20 min-h-[80vh] flex flex-col relative overflow-hidden md:py-28'
    >
      <div className='w-full flex-grow flex flex-col relative z-10'>
        {/* Main Content Layout */}
        <div className='flex flex-col flex-grow min-h-[400px]'>
          {/* Content Area - Full Width Dark Background */}
          <div className='flex-grow relative overflow-hidden min-h-[760px] flex flex-col md:min-h-[800px]'>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='relative z-10 pb-10 pt-10 text-center text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:pb-28 md:pt-20 md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'
            >
              Work
            </motion.h2>

            {/* Case Study Controls */}
            <button
              type='button'
              onClick={goToPreviousCaseStudy}
              className='absolute left-3 top-[35%] z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover sm:h-12 sm:w-12 md:left-8 md:top-[60%] md:h-20 md:w-20'
              aria-label='Previous case study'
            >
              <ChevronLeft className='h-6 w-6 md:h-10 md:w-10' />
            </button>

            <button
              type='button'
              onClick={goToNextCaseStudy}
              className='absolute right-3 top-[35%] z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover sm:h-12 sm:w-12 md:right-8 md:top-[60%] md:h-20 md:w-20'
              aria-label='Next case study'
            >
              <ChevronRight className='h-6 w-6 md:h-10 md:w-10' />
            </button>

            <div className='absolute bottom-10 left-1/2 z-20 -translate-x-1/2 md:bottom-20'>
              <div className='inline-flex items-center justify-center gap-3 rounded-2xl bg-text-primary border border-primary/10 px-5 py-4 shadow-lg'>
                {PROJECTS.map((caseStudy, index) => (
                  <button
                    key={caseStudy.id}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`h-4 w-8 rounded-full transition-all duration-300 ${
                      activeProjectIndex === index
                        ? 'bg-primary scale-110'
                        : 'bg-primary/45 hover:bg-hover hover:scale-105'
                    }`}
                    aria-label={`Select Case Study ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className='relative z-10 w-full max-w-[1400px] mx-auto px-6 pb-32 pt-0 flex-grow flex items-center sm:px-8 md:px-16 md:pb-44 md:pt-4'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center min-h-[520px] md:gap-12'>
                {/* Left Column: Text Content */}
                <div className='lg:pr-12'>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentProject.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className='space-y-6 md:min-h-[420px] md:space-y-8'
                    >
                      <div className='flex items-center gap-4 text-accent-bright font-mono text-sm tracking-wider uppercase'>
                        <span>Case Study {currentProject.id}</span>
                      </div>

                      <h2 className='text-4xl md:text-7xl font-bold uppercase text-text-primary leading-tight tracking-tight'>
                        {currentProject.title}
                      </h2>

                      <p className='text-xl md:text-3xl text-accent-bright leading-relaxed font-light border-l-2 border-accent-bright pl-5 max-w-2xl md:pl-6'>
                        {workDescription}
                      </p>

                      <div className='flex flex-wrap items-center gap-4 pt-6'>
                        <Link
                          href={`/cs${currentProject.id}`}
                          className='inline-flex items-center gap-3 bg-text-primary text-primary px-7 py-3.5 rounded-2xl font-semibold text-lg hover:bg-hover hover:text-primary transition-all transform hover:scale-105 group md:px-9 md:py-4 md:text-xl'
                        >
                          View Case Study
                          <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </Link>
                        {currentProject.externalUrl && (
                          <a
                            href={currentProject.externalUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 text-xl font-semibold text-text-primary transition-colors hover:text-hover'
                          >
                            Visit Site
                            <ArrowUpRight className='h-6 w-6' />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Column: Image Space */}
                <div className='flex justify-center items-center h-full relative order-first lg:order-none'>
                  {workImage ? (
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className='relative aspect-video w-full max-w-[640px] overflow-hidden rounded-xl border border-accent-dark/30 shadow-2xl lg:max-w-none'
                      >
                        <Image
                          src={workImage}
                          alt={`${currentProject.title} preview`}
                          fill
                          sizes='(min-width: 1024px) 40vw, 100vw'
                          className='object-cover'
                          priority={currentProject.id === '01'}
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className='border-2 border-dashed border-accent-dark/30 rounded-2xl w-full h-full min-h-[400px] flex items-center justify-center text-accent-bright/40 font-mono text-sm'>
                      Image Placement Area
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
