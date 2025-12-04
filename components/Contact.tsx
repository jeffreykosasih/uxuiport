import React from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Get in Touch</h2>
          <p className="text-xl text-text-primary/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss the latest in frontend tech? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-highlight/20 rounded-lg text-accent-dark">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="text-text-primary/80 hover:text-accent-dark transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-highlight/20 rounded-lg text-accent-dark">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">Location</h3>
                <p className="text-text-primary/80">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form className="md:col-span-2 space-y-6 bg-white p-8 rounded-2xl border border-highlight/30 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-semibold text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-accent-dark focus:ring-2 focus:ring-accent-dark/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-semibold text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-accent-dark focus:ring-2 focus:ring-accent-dark/20 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block font-semibold text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-accent-dark focus:ring-2 focus:ring-accent-dark/20 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-accent-dark text-white font-bold rounded-lg hover:bg-accent-bright transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:ring-offset-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

