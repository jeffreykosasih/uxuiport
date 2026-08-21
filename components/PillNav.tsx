'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const iconControlClassName =
  'inline-flex items-center justify-center text-text-primary drop-shadow-md transition-all hover:scale-110 hover:text-hover';

type PillItem = {
  id: string;
  label: ReactNode;
  title?: string;
  href?: string;
  onClick?: () => void;
};

type PillNavProps = {
  items: PillItem[];
  activeId: string;
  layoutId: string;
  'aria-label': string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  dataProject?: string;
};

const shellClassName =
  'rounded-xl border border-text-primary/20 bg-primary/90 p-2 shadow-lg backdrop-blur-xl';

export const PillNav = ({
  items,
  activeId,
  layoutId,
  'aria-label': ariaLabel,
  orientation = 'horizontal',
  className,
  dataProject,
}: PillNavProps) => {
  const isVertical = orientation === 'vertical';

  return (
    <nav
      aria-label={ariaLabel}
      data-project={dataProject}
      className={className}
    >
      <div
        className={`${shellClassName} flex gap-1.5 ${
          isVertical
            ? 'flex-col'
            : 'max-w-full flex-wrap items-center justify-center md:flex-nowrap'
        }`}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          const itemClassName = `relative rounded-lg text-xs font-light transition-colors duration-200 ${
            isVertical
              ? 'inline-flex h-9 w-9 items-center justify-center md:h-10 md:w-10 md:text-sm'
              : 'px-3 py-2 sm:text-sm md:px-4'
          } ${
            isActive
              ? 'text-pill-text'
              : 'text-text-muted hover:bg-text-primary hover:text-primary'
          }`;

          const content = (
            <>
              {isActive ? (
                <motion.div
                  layoutId={layoutId}
                  className='absolute inset-0 rounded-lg bg-pill-bg'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              ) : null}
              <span className='relative z-10'>{item.label}</span>
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                title={item.title}
                aria-label={
                  item.title
                    ? `${item.title}${isActive ? ' (current)' : ''}`
                    : undefined
                }
                aria-current={isActive ? 'page' : undefined}
                className={itemClassName}
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              type='button'
              title={item.title}
              onClick={item.onClick}
              className={itemClassName}
            >
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
