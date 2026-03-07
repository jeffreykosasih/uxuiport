'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS, STAGES, Stage } from '@/lib/data';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudyViewProps {
  projectId: string;
}

export const CaseStudyView = ({ projectId }: CaseStudyViewProps) => {
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const currentProject = PROJECTS[projectIndex !== -1 ? projectIndex : 0];
  const isOnlyAccessibleCaseStudy = currentProject.id === '01';

  const [activeStage, setActiveStage] = useState<Stage>('Overview');
  const [activeImageByStage, setActiveImageByStage] = useState<
    Partial<Record<Stage, number>>
  >({});
  const stageIds = useMemo(
    () =>
      Object.fromEntries(
        STAGES.map((stage) => [stage, `${currentProject.id}-${stage.toLowerCase()}`]),
      ) as Record<Stage, string>,
    [currentProject.id],
  );

  useEffect(() => {
    const sections = STAGES.map((stage) =>
      document.getElementById(stageIds[stage]),
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          const matchedStage = STAGES.find(
            (stage) => stageIds[stage] === visibleEntries[0].target.id,
          );
          if (matchedStage) {
            setActiveStage(matchedStage);
          }
        }
      },
      {
        root: null,
        // Bias toward whatever section is closest to the center viewport area.
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [stageIds]);

  const jumpToStage = (stage: Stage) => {
    const section = document.getElementById(stageIds[stage]);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroTitle =
    currentProject.id === '01'
      ? `${currentProject.stages.Overview.heading} - ${currentProject.title}`
      : currentProject.title;

  const goToNextImage = (stage: Stage, totalImages: number) => {
    setActiveImageByStage((prev) => {
      const currentIndex = prev[stage] ?? 0;
      return {
        ...prev,
        [stage]: (currentIndex + 1) % totalImages,
      };
    });
  };

  const goToPrevImage = (stage: Stage, totalImages: number) => {
    setActiveImageByStage((prev) => {
      const currentIndex = prev[stage] ?? 0;
      return {
        ...prev,
        [stage]: (currentIndex - 1 + totalImages) % totalImages,
      };
    });
  };

  return (
    <section className='py-32 px-6 min-h-screen flex flex-col relative overflow-hidden bg-primary'>
      <div className='max-w-7xl mx-auto w-full grow flex flex-col relative z-10'>
        <div className='mb-8 flex justify-between items-center'>
          <Link
            href='/#work'
            className='inline-flex items-center gap-2 text-text-primary/60 hover:text-hover transition-colors'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Work</span>
          </Link>

          {isOnlyAccessibleCaseStudy ? (
            <span className='inline-flex items-center gap-2 text-text-primary/40'>
              <span>More case studies are on hold</span>
            </span>
          ) : (
            <Link
              href='/#work'
              className='inline-flex items-center gap-2 text-text-primary/60 hover:text-hover transition-colors'
            >
              <span>Back to Work</span>
              <ArrowRight className='w-5 h-5' />
            </Link>
          )}
        </div>

        <div className='mb-12 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-text-primary mb-4'>
            {heroTitle}
          </h1>
          <p className='text-xl text-text-primary/60 font-light'>
            Case Study {projectId}
          </p>
        </div>

        {/* Unified top-to-bottom stage flow */}
        <div className='flex flex-col grow mb-28 max-w-5xl mx-auto w-full gap-24'>
          {STAGES.map((stage) => {
            const stageContent = currentProject.stages[stage];
            const stageImages =
              stageContent.images && stageContent.images.length > 0
                ? stageContent.images
                : stageContent.image
                  ? [stageContent.image]
                  : [];
            const hasImage = stageImages.length > 0;
            const activeImageIndex = activeImageByStage[stage] ?? 0;
            const visibleImage = stageImages[activeImageIndex] ?? stageImages[0];
            const isSlider = stageImages.length > 1;

            return (
              <article
                key={stage}
                id={stageIds[stage]}
                className='scroll-mt-32 space-y-6'
              >
                <div className='flex items-center gap-4 text-accent-dark font-mono text-sm tracking-wider uppercase'>
                  <span>{stage}</span>
                </div>

                <h2 className='text-3xl md:text-5xl font-semibold text-text-primary leading-tight'>
                  {stage}
                </h2>

                <p className='text-lg md:text-xl text-text-primary/80 leading-relaxed font-light'>
                  {stageContent.content}
                </p>

                {hasImage ? (
                  <div className='relative mt-8 h-64 md:h-[500px] w-full rounded-xl overflow-hidden border border-highlight/30 bg-black/10'>
                    <Image
                      src={visibleImage}
                      alt={`${stage} visual ${activeImageIndex + 1}`}
                      fill
                      sizes='(min-width: 768px) 80vw, 100vw'
                      className='object-contain p-4'
                      priority={stage === 'Overview'}
                    />

                    {isSlider && (
                      <>
                        <button
                          type='button'
                          onClick={() => goToPrevImage(stage, stageImages.length)}
                          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-text-primary hover:bg-primary/90 transition-colors'
                          aria-label={`Previous ${stage} image`}
                        >
                          <ChevronLeft className='h-5 w-5' />
                        </button>
                        <button
                          type='button'
                          onClick={() => goToNextImage(stage, stageImages.length)}
                          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-text-primary hover:bg-primary/90 transition-colors'
                          aria-label={`Next ${stage} image`}
                        >
                          <ChevronRight className='h-5 w-5' />
                        </button>

                        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2'>
                          {stageImages.map((_, index) => (
                            <button
                              key={`${stage}-dot-${index}`}
                              type='button'
                              onClick={() =>
                                setActiveImageByStage((prev) => ({
                                  ...prev,
                                  [stage]: index,
                                }))
                              }
                              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                activeImageIndex === index
                                  ? 'bg-text-primary'
                                  : 'bg-text-primary/40 hover:bg-text-primary/70'
                              }`}
                              aria-label={`Go to ${stage} image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className='mt-8 h-64 md:h-[500px] w-full bg-white/50 border border-highlight/30 rounded-2xl flex items-center justify-center relative overflow-hidden group'>
                    <div className='absolute inset-0 bg-linear-to-br from-highlight/10 to-accent-dark/5' />
                    <span className='text-text-primary/20 font-bold text-6xl group-hover:scale-110 transition-transform duration-700'>
                      {stage[0]}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Horizontal Navigation (Pill Shape) - Bottom */}
        <div className='flex justify-center mt-auto fixed bottom-12 left-0 right-0 z-50 pointer-events-none'>
          <div className='bg-primary/90 backdrop-blur-xl border border-text-primary/20 p-1.5 rounded-full shadow-lg flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar pointer-events-auto'>
            {STAGES.map((stage) => (
              <button
                key={stage}
                onClick={() => jumpToStage(stage)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-light transition-colors duration-200
                  ${activeStage === stage ? 'text-text-primary' : 'text-text-primary/60 hover:text-hover'}
                `}
              >
                {activeStage === stage && (
                  <motion.div
                    layoutId='activeTab'
                    className='absolute inset-0 bg-accent-dark rounded-full'
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className='relative z-10'>{stage}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Background Decor */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[100px] z-0 pointer-events-none' />
    </section>
  );
};
