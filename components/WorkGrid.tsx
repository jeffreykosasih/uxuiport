'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export const WorkGrid = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = PROJECTS[activeProjectIndex] ?? PROJECTS[0];
  const availableProjectIndices = PROJECTS.map((_, index) => index);

  // Always show 'Overview' stage for the main work grid preview
  const overviewContent = currentProject.stages.Overview;

  const goToPreviousCaseStudy = () => {
    const activeAvailableIndex = availableProjectIndices.indexOf(activeProjectIndex);
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
    const activeAvailableIndex = availableProjectIndices.indexOf(activeProjectIndex);
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
      className='pt-24 bg-gradient-to-b from-primary via-primary to-[#050505] min-h-[80vh] flex flex-col relative overflow-hidden dark:to-[#8b7c6d]'
    >
      <div className='w-full flex-grow flex flex-col relative z-10'>
        {/* Main Content Layout */}
        <div className='flex flex-col flex-grow min-h-[400px]'>
          {/* Content Area - Full Width Dark Background */}
          <div className='flex-grow relative overflow-hidden min-h-[800px] flex flex-col'>
            {/* Background "Image" / Color */}
            <div className='absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#050505] z-0 dark:to-[#8b7c6d]' />

            <h2 className='relative z-10 pt-14 text-center text-[20vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-text-primary md:text-[9rem] lg:text-[12rem] xl:text-[14rem]'>
              Work
            </h2>

            {/* Case Study Controls */}
            <button
              type='button'
              onClick={goToPreviousCaseStudy}
              className='absolute left-4 top-1/2 z-20 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:left-8 md:h-20 md:w-20'
              aria-label='Previous case study'
            >
              <ChevronLeft className='h-8 w-8 md:h-10 md:w-10' />
            </button>

            <button
              type='button'
              onClick={goToNextCaseStudy}
              className='absolute right-4 top-1/2 z-20 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:right-8 md:h-20 md:w-20'
              aria-label='Next case study'
            >
              <ChevronRight className='h-8 w-8 md:h-10 md:w-10' />
            </button>

            <div className='absolute bottom-8 left-1/2 z-20 -translate-x-1/2'>
              <div className='inline-flex items-center justify-center gap-3 rounded-2xl bg-primary/90 px-5 py-4 shadow-lg backdrop-blur-xl'>
                {PROJECTS.map((caseStudy, index) => (
                  <button
                    key={caseStudy.id}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`h-4 w-8 rounded-full transition-all duration-300 ${
                      activeProjectIndex === index
                        ? 'bg-text-primary scale-110'
                        : 'bg-text-primary/45 hover:bg-hover hover:scale-105'
                    }`}
                    aria-label={`Select Case Study ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className='relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 pb-24 pt-12 flex-grow flex items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center'>
                {/* Left Column: Text Content */}
                <div className='lg:pr-12'>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className='space-y-8'
                    >
                      <div className='flex items-center gap-4 text-accent-bright font-mono text-sm tracking-wider uppercase'>
                        <span>Case Study {currentProject.id}</span>
                      </div>

                      <h2 className='text-5xl md:text-7xl font-bold text-text-primary leading-tight tracking-tight'>
                        {currentProject.title}
                      </h2>

                      <p className='text-2xl md:text-3xl text-accent-bright leading-relaxed font-light border-l-2 border-accent-bright pl-6 max-w-2xl'>
                        {overviewContent.content}
                      </p>

                      <div className='pt-6'>
                        <Link
                          href={`/cs${currentProject.id}`}
                          className='inline-flex items-center gap-3 bg-text-primary text-primary px-9 py-4 rounded-2xl font-semibold text-xl hover:bg-hover hover:text-primary transition-all transform hover:scale-105 group'
                        >
                          View Case Study
                          <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Column: Image Space */}
                <div className='hidden lg:flex justify-center items-center h-full min-h-[400px] relative'>
                  {overviewContent.image ? (
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className='relative rounded-xl w-full h-full min-h-[400px] overflow-hidden border border-accent-dark/30'
                      >
                        <Image
                          src={overviewContent.image}
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
