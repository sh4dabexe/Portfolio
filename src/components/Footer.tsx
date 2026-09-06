import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socials';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 sm:px-12 md:px-16 border-t border-white/[0.08] bg-[#08080c] text-xs font-mono text-[#8e8e9f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: SHADAB ALAM + Availability */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <span className="text-white font-bold tracking-ultra uppercase text-[11px]">
            SHADAB ALAM
          </span>
          <span className="text-white/20">/</span>
          {/* Availability Indicator with pulsing dot */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white/80 font-semibold">
              Available for projects
            </span>
          </div>
        </div>

        {/* Center: Social destinations */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center gap-6">
          <div className="text-[10px] tracking-widest uppercase text-white/40">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
