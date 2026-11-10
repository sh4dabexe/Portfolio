import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { socialLinks } from '../data/socials';
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from './Icons';

export const ClosingCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://t.me/sh4dabexe');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <InstagramIcon size={16} />;
      case 'Telegram':
        return <TelegramIcon size={16} />;
      case 'GitHub':
        return <GithubIcon size={16} />;
      case 'LinkedIn':
        return <LinkedinIcon size={16} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-24 overflow-hidden bg-[#050505] border-t border-white/10">
      {/* 1. Continuous Technical Marquee Strip */}
      <div className="w-full border-y border-white/10 py-4 overflow-hidden select-none bg-[#09090c]">
        <div className="flex gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#737373] animate-marquee">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-white font-bold">SHADAB ALAM</span>
              <span className="text-[#ef4444]">•</span>
              <span className="text-[#a3a3a3]">INTERACTION CRAFT</span>
              <span className="text-[#ef4444]">•</span>
              <span className="text-white font-bold">SYSTEMS ARCHITECTURE</span>
              <span className="text-[#ef4444]">•</span>
              <span className="text-[#a3a3a3]">AVAILABLE 2026</span>
              <span className="text-[#ef4444]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. Direct Dispatch Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-12 pt-14 sm:pt-20 pb-8 sm:pb-12 text-center space-y-8">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-[#ef4444] mb-2 uppercase">
            DIRECT CONNECT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-4">
            Initiate Dispatch<span className="text-[#ef4444]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] max-w-lg mx-auto leading-relaxed">
            Have a project in mind, an interesting engineering challenge, or want to discuss full-stack &amp; frontend systems? Reach out directly.
          </p>
        </div>

        {/* Dispatch Action Box */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#0a0a0d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 text-left w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444]">
              <Send size={18} />
            </div>
            <div>
              <span className="text-xs font-mono text-[#737373] block uppercase tracking-wider">
                Direct Telegram Channel
              </span>
              <span className="text-sm font-mono font-bold text-white">
                t.me/sh4dabexe
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-initial btn btn-glass text-xs font-mono py-2.5 px-4"
              title="Copy handle to clipboard"
            >
              {copied ? <Check size={14} className="text-[#2ecc71]" /> : <Copy size={14} />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>

            <a
              href="https://t.me/sh4dabexe"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial btn btn-crimson text-xs font-mono py-2.5 px-4"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Social Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 text-xs font-mono text-[#c4c4cb] hover:text-white transition-all hover:-translate-y-0.5"
            >
              {getSocialIcon(social.platform)}
              <span>{social.platform}</span>
              {social.badge && (
                <span className="text-[10px] text-[#ef4444] font-bold">
                  [{social.badge}]
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
