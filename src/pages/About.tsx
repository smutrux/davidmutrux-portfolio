import React from 'react';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';

const About: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        {/* Bio Section */}
        <div>
          <h1 className="text-6xl font-bold mb-12">About</h1>
          <div className="space-y-6 text-accent/70 text-lg leading-relaxed">
            <p>
              I am David Mutrux, a multi-disciplinary creative based in Montreal, specializing in sound design, production management, and cinematography.
            </p>
            <p>
              With over a decade of experience in the film and commercial industry, I bring a holistic approach to every project. Whether I'm capturing the subtle nuances of a location's soundscape or framing a high-stakes commercial shoot, my focus is always on the narrative.
            </p>
            <p>
              I believe that the best work comes from a deep understanding of all technical facets of production. This versatility allows me to bridge the gap between creative vision and technical execution.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="relative aspect-[4/5] bg-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
            alt="David Mutrux"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 cinematic-gradient opacity-40" />
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/5 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-accent/40 mb-12 max-w-md">
              Available for freelance projects and collaborations worldwide. Let's discuss your next vision.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@davidmutrux.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-accent/60 group-hover:text-white transition-colors">hello@davidmutrux.com</span>
              </a>
              <a href="#" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
                  <Instagram size={18} />
                </div>
                <span className="text-accent/60 group-hover:text-white transition-colors">@davidmutrux</span>
              </a>
              <a href="#" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
                  <Linkedin size={18} />
                </div>
                <span className="text-accent/60 group-hover:text-white transition-colors">linkedin.com/in/davidmutrux</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent/40">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent/40">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent/40">Message</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>
            <button 
              type="submit"
              className="inline-flex items-center space-x-3 border border-white/20 px-10 py-4 hover:bg-white hover:text-dark transition-all duration-500 uppercase tracking-widest text-xs"
            >
              <span>Send Message</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;