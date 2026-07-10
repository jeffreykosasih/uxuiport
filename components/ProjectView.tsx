'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS, STAGES, Stage } from '@/lib/data';
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface ProjectViewProps {
  projectId: string;
}

// Autoplays (muted, looping) 3 seconds after the video scrolls into view.
const StageVideo = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = window.setTimeout(() => {
              void video.play().catch(() => {});
            }, 3000);
          } else {
            if (timer) window.clearTimeout(timer);
            video.pause();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(video);

    return () => {
      if (timer) window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload='metadata'
      className='absolute inset-0 h-full w-full object-cover'
    />
  );
};

export const ProjectView = ({ projectId }: ProjectViewProps) => {
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const currentProject = PROJECTS[projectIndex !== -1 ? projectIndex : 0];
  const isOverviewOnlyProject =
    projectId === '03' || projectId === '04' || projectId === '06';
  const visibleStages = useMemo(
    () => (isOverviewOnlyProject ? (['Overview'] as Stage[]) : STAGES),
    [isOverviewOnlyProject],
  );
  const publishedProjects = PROJECTS;
  const currentPublishedIndex = publishedProjects.findIndex(
    (project) => project.id === currentProject.id,
  );
  const previousProject =
    currentPublishedIndex > 0 ? publishedProjects[currentPublishedIndex - 1] : null;
  const nextProject =
    currentPublishedIndex >= 0 &&
    currentPublishedIndex < publishedProjects.length - 1
      ? publishedProjects[currentPublishedIndex + 1]
      : null;

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
    const sections = visibleStages.map((stage) =>
      document.getElementById(stageIds[stage]),
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          const matchedStage = visibleStages.find(
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
  }, [stageIds, visibleStages]);

  const jumpToStage = (stage: Stage) => {
    const section = document.getElementById(stageIds[stage]);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroTitle = currentProject.title;
  const heroTitleWords = heroTitle.split(' ');
  const heroTitleLead = heroTitleWords.slice(0, -1).join(' ');
  const heroTitleLast = heroTitleWords[heroTitleWords.length - 1];

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
    <section className='py-28 px-5 min-h-screen flex flex-col relative overflow-hidden sm:px-6 md:py-32'>
      <div className='max-w-7xl mx-auto w-full grow flex flex-col relative z-10'>
        <div className='mb-8 w-full max-w-5xl mx-auto'>
          <Link
            href='/#work'
            className='inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.2em] text-text-primary/70 transition-colors hover:text-hover'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to Work
          </Link>
        </div>
        <div className='mb-16 w-full max-w-5xl mx-auto md:mb-24'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={`project-hero-${currentProject.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className='text-center'
            >
              <p className='mb-6 font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
                Project {projectId}
              </p>

              <div className='flex items-center justify-between gap-3 sm:gap-5'>
                {previousProject ? (
                  <Link
                    href={`/pj${previousProject.id}`}
                    aria-label={`Previous project: ${previousProject.title}`}
                    title='Previous project'
                    className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:h-16 md:w-16'
                  >
                    <ChevronLeft className='h-6 w-6 md:h-9 md:w-9' />
                  </Link>
                ) : (
                  <span
                    aria-label='This is the first project'
                    title='First project'
                    className='inline-flex h-12 w-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-text-primary/20 bg-text-primary/10 text-text-primary/40 md:h-16 md:w-16'
                  >
                    <ChevronLeft className='h-6 w-6 md:h-9 md:w-9' />
                  </span>
                )}

                {currentProject.externalUrl ? (
                  <a
                    href={currentProject.externalUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Visit live site'
                    aria-label={`${heroTitle} — visit live site`}
                    className='group min-w-0 flex-1'
                  >
                    <h1 className='text-center text-[13vw] font-bold uppercase leading-[0.82] tracking-[-0.08em] text-text-primary transition-colors group-hover:text-hover md:text-[5rem] lg:text-[7rem]'>
                      {heroTitleLead ? `${heroTitleLead} ` : ''}
                      <span className='relative inline-block whitespace-nowrap pr-[0.55em]'>
                        {heroTitleLast}
                        <ArrowUpRight
                          className='absolute right-0 top-0 h-[0.38em] w-[0.38em] -translate-y-[0.04em] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                          strokeWidth={2.5}
                        />
                      </span>
                    </h1>
                  </a>
                ) : (
                  <h1 className='min-w-0 flex-1 text-center text-[13vw] font-bold uppercase leading-[0.82] tracking-[-0.08em] text-text-primary md:text-[5rem] lg:text-[7rem]'>
                    {heroTitle}
                  </h1>
                )}

                {nextProject ? (
                  <Link
                    href={`/pj${nextProject.id}`}
                    aria-label={`Next project: ${nextProject.title}`}
                    title='Next project'
                    className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:h-16 md:w-16'
                  >
                    <ChevronRight className='h-6 w-6 md:h-9 md:w-9' />
                  </Link>
                ) : (
                  <span
                    aria-label='More projects on the way'
                    title='More projects on the way!'
                    className='inline-flex h-12 w-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-text-primary/20 bg-text-primary/10 text-text-primary/40 md:h-16 md:w-16'
                  >
                    <ChevronRight className='h-6 w-6 md:h-9 md:w-9' />
                  </span>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Unified top-to-bottom stage flow */}
        <div className='flex flex-col grow mb-28 max-w-5xl mx-auto w-full gap-24'>
          {visibleStages.map((stage) => {
            const stageNumber = String(STAGES.indexOf(stage) + 1).padStart(
              2,
              '0',
            );
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
            const stageVideo = stageContent.video;

            return (
              <article
                key={stage}
                id={stageIds[stage]}
                className='scroll-mt-32 space-y-6'
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className='flex items-center gap-4'
                >
                  <span className='font-mono text-sm uppercase tracking-[0.35em] text-accent-dark'>
                    {stageNumber}
                  </span>
                  <span className='h-px flex-1 bg-highlight/50' />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className='text-4xl md:text-7xl font-bold uppercase tracking-[-0.05em] text-text-primary leading-[0.85]'
                >
                  {stage}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className='max-w-3xl border-l-2 border-accent-bright pl-5 text-lg md:text-xl text-text-primary/80 leading-relaxed font-light md:pl-6'
                >
                  {stageContent.content}
                </motion.p>

                {stageVideo ? (
                  <div className='relative mt-8 h-64 md:h-[500px] w-full rounded-xl overflow-hidden border border-accent-dark/30 bg-black/10 shadow-2xl'>
                    <StageVideo src={stageVideo} poster={stageContent.image} />
                  </div>
                ) : hasImage ? (
                  <div className='relative mt-8 h-64 md:h-[500px] w-full rounded-xl overflow-hidden border border-accent-dark/30 bg-black/10 shadow-2xl'>
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={`${stage}-${visibleImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className='absolute inset-0'
                      >
                        <Image
                          src={visibleImage}
                          alt={`${stage} visual ${activeImageIndex + 1}`}
                          fill
                          sizes='(min-width: 768px) 80vw, 100vw'
                          className='object-cover'
                          priority={stage === 'Overview'}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {isSlider && (
                      <>
                        <button
                          type='button'
                          onClick={() => goToPrevImage(stage, stageImages.length)}
                          className='absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:left-8 md:h-20 md:w-20'
                          aria-label={`Previous ${stage} image`}
                        >
                          <ChevronLeft className='h-6 w-6 md:h-10 md:w-10' />
                        </button>
                        <button
                          type='button'
                          onClick={() => goToNextImage(stage, stageImages.length)}
                          className='absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary text-primary shadow-lg transition-all hover:scale-105 hover:bg-hover md:right-8 md:h-20 md:w-20'
                          aria-label={`Next ${stage} image`}
                        >
                          <ChevronRight className='h-6 w-6 md:h-10 md:w-10' />
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
                ) : null}
              </article>
            );
          })}
        </div>

        {/* Horizontal Navigation (Pill Shape) - Bottom */}
        {!isOverviewOnlyProject && (
          <div className='fixed bottom-5 left-4 right-24 z-50 flex justify-center pointer-events-none md:bottom-12 md:left-0 md:right-0'>
            <div className='bg-primary/90 backdrop-blur-xl border border-text-primary/20 p-2 rounded-xl shadow-lg flex max-w-full flex-wrap items-center justify-center gap-1.5 pointer-events-auto md:flex-nowrap'>
              {STAGES.map((stage) => (
                <button
                  key={stage}
                  onClick={() => jumpToStage(stage)}
                  className={`
                    relative px-3 py-2 rounded-lg text-xs font-light transition-colors duration-200 sm:text-sm md:px-4
                    ${activeStage === stage ? 'text-primary' : 'text-text-primary/60 hover:bg-text-primary hover:text-primary'}
                  `}
                >
                  {activeStage === stage && (
                    <motion.div
                      layoutId='activeTab'
                      className='absolute inset-0 bg-text-primary rounded-lg'
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className='relative z-10'>{stage}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-28 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-text-primary/30 bg-primary/85 text-text-primary hover:text-hover hover:border-hover/60 transition-colors'
          aria-label='Back to top'
        >
          <ArrowUp className='h-5 w-5' />
        </button>
      </div>
      {/* Background Decor */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[100px] z-0 pointer-events-none' />
    </section>
  );
};
