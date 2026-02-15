import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import content from "../data/about.json";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-accent/40 text-sm tracking-widest">
          © {new Date().getFullYear()} DAVID MUTRUX
        </div>
        
        <div className="flex space-x-6">
          <a href={`https://www.instagram.com/${content.socials.instagram}`} className="text-accent/60 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href={`https://linkedin.com/in/${content.socials.linkedin}`} className="text-accent/60 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${content.socials.email}`} className="text-accent/60 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;