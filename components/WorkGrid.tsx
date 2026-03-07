'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export const WorkGrid = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = PROJECTS[activeProjectIndex] ?? PROJECTS[0];
  const activeStageLabel = 'Overview';

  // Always show 'Overview' stage for the main work grid preview
  const overviewContent = currentProject.stages.Overview;

  return (
    <section
      id='work'
      className='py-24 px-6 bg-primary min-h-[80vh] flex flex-col relative overflow-hidden'
    >
      <div className='max-w-[1600px] mx-auto w-full flex-grow flex flex-col relative z-10'>
        {/* Main Content Layout */}
        <div className='flex flex-col flex-grow mb-12 min-h-[400px]'>
          {/* Content Area - Full Width Dark Background */}
          <div className='flex-grow relative rounded-3xl overflow-hidden bg-primary min-h-[800px] flex flex-col border border-accent-dark/30'>
            {/* Background "Image" / Color */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary to-accent-dark/20 z-0' />

            {/* Visual Decor (Placeholder for Image) */}
            <div className='absolute inset-0 opacity-20 z-0 flex items-center justify-center overflow-hidden pointer-events-none'>
              <span className='text-[400px] font-bold text-accent-dark leading-none select-none blur-sm transform translate-x-1/4 translate-y-1/4'>
                {currentProject.id}
              </span>
            </div>

            {/* Horizontal Case Study Selector - Absolute Center Top */}
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-20'>
              <div className='inline-flex bg-primary/90 backdrop-blur-xl border border-text-primary/20 p-1.5 rounded-full shadow-lg items-center gap-4 px-6 py-3'>
                <span className='font-bold text-text-primary text-sm'>
                  Case Study
                </span>

                <div className='flex items-center gap-2'>
                  {PROJECTS.map((caseStudy, index) => {
                    const isAvailable = caseStudy.id === '01';

                    return (
                    <button
                      key={caseStudy.id}
                      onClick={() => isAvailable && setActiveProjectIndex(index)}
                      disabled={!isAvailable}
                      className={`
                            w-4 h-4 rounded-full transition-all duration-300
                            ${
                              activeProjectIndex === index
                                ? 'bg-text-primary scale-125 ring-2 ring-text-primary/40'
                                : isAvailable
                                  ? 'bg-text-primary/45 hover:bg-hover hover:scale-110'
                                  : 'bg-text-primary/20 opacity-60 cursor-not-allowed'
                            }
                          `}
                      aria-label={
                        isAvailable
                          ? `Select Case Study ${index + 1}`
                          : `Case Study ${index + 1} is on hold`
                      }
                    />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 py-12 flex-grow flex items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center mt-16 lg:mt-0'>
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
                        <span>/</span>
                        <span>{overviewContent.heading}</span>
                      </div>

                      <h2 className='text-5xl md:text-7xl font-bold text-text-primary leading-tight tracking-tight'>
                        {activeStageLabel}
                      </h2>

                      <p className='text-xl md:text-2xl text-accent-bright leading-relaxed font-light border-l-2 border-accent-bright pl-6 max-w-xl'>
                        {overviewContent.content}
                      </p>

                      <div className='pt-6'>
                        <Link
                          href={`/cs${currentProject.id}`}
                          className='inline-flex items-center gap-3 bg-text-primary text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-hover hover:text-primary transition-all transform hover:scale-105 group'
                        >
                          View Case Study
                          <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </Link>
                        <p className='mt-8 text-sm md:text-base text-text-primary/70 font-medium'>
                          More case on the way.
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Column: Image Space */}
                <div className='hidden lg:flex justify-center items-center h-full min-h-[400px] relative'>
                  {overviewContent.image ? (
                    <div className='relative rounded-xl w-full h-full min-h-[400px] overflow-hidden border border-accent-dark/30'>
                      <Image
                        src={overviewContent.image}
                        alt={`${overviewContent.heading} preview`}
                        fill
                        sizes='(min-width: 1024px) 40vw, 100vw'
                        className='object-contain p-4'
                        priority={currentProject.id === '01'}
                      />
                    </div>
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
