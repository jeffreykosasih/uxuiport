import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-tight">
          Crafting digital experiences with <span className="text-accent-dark">purpose</span> and <span className="text-accent-dark">precision</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-text-primary/80 max-w-2xl leading-relaxed">
          I'm a Senior Frontend Engineer & UI/UX Designer specializing in building modern, accessible, and performant web applications.
        </p>
        
        <div className="pt-4">
          <Link 
            href="#work"
            className="inline-flex items-center gap-2 bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-bright transition-all transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:ring-offset-2 focus:ring-offset-primary"
          >
            View Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

