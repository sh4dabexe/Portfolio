import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socials';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 sm:px-12 md:px-16 border-t border-white/10 bg-[#050505] text-xs font-mono text-[#737373]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: SHADAB ALAM + Availability */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <span className="brand-monogram">SA</span>
          <span className="text-white font-bold tracking-wider uppercase">
            SHADAB ALAM
          </span>
          <span className="text-white/20">/</span>
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-[#a3a3a3] font-semibold">
              Available for high-impact roles
            </span>
          </div>
        </div>

        {/* Center: Social Links */}
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

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#737373]">
            &copy; {new Date().getFullYear()} Shadab Alam. Designed with Noir &amp; Crimson Op-Art.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
