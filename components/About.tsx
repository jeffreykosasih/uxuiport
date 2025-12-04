import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-highlight/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-text-primary">About Me</h2>
          <div className="space-y-6 text-lg text-text-primary/90 leading-relaxed">
            <p>
              I bridge the gap between design and engineering. With a background in both disciplines, I create products that look beautiful and work flawlessly.
            </p>
            <p>
              My philosophy centers on accessibility and performance. I believe that the web should be inclusive for everyone, regardless of their device or ability.
            </p>
            <p>
              When I'm not coding, I'm likely exploring new design systems, contributing to open source, or optimizing my terminal workflow.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-xl border border-highlight/20 shadow-sm">
            <Code2 className="w-8 h-8 text-accent-dark mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Frontend Development</h3>
            <p className="text-text-primary/80">Expertise in React, Next.js, and modern CSS architectures.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-highlight/20 shadow-sm">
            <Palette className="w-8 h-8 text-accent-dark mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">UI/UX Design</h3>
            <p className="text-text-primary/80">Creating intuitive interfaces with a focus on user experience and accessibility.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-highlight/20 shadow-sm">
            <Terminal className="w-8 h-8 text-accent-dark mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">System Architecture</h3>
            <p className="text-text-primary/80">Building scalable and maintainable codebases for long-term growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

