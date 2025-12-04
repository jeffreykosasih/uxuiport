import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const ProjectCard = ({ title, description, tags, link }: Project) => {
  return (
    <article className="group bg-white border border-highlight/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="h-48 bg-highlight/20 relative overflow-hidden">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-accent-dark/20 font-bold text-4xl group-hover:scale-105 transition-transform duration-500">
          {title[0]}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-dark transition-colors">
          {title}
        </h3>
        
        <p className="text-text-primary/80 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-primary border border-highlight text-text-primary text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={link}
          className="inline-flex items-center gap-2 text-accent-dark font-semibold hover:text-accent-bright transition-colors group/link"
        >
          View Project
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </article>
  );
};

