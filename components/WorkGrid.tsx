import React from 'react';
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management systems.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
    link: '#'
  },
  {
    title: 'Health & Wellness App',
    description: 'Mobile-first progressive web app designed to help users track their fitness goals and nutrition with personalized AI recommendations.',
    tags: ['React', 'PWA', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Financial Portfolio',
    description: 'Secure investment tracking platform with encryption and seamless banking integrations for modern investors.',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'Security'],
    link: '#'
  }
];

export const WorkGrid = () => {
  return (
    <section id="work" className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Selected Work</h2>
          <p className="text-xl text-text-primary/80">
            A collection of projects that demonstrate my passion for building robust and user-centric applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

