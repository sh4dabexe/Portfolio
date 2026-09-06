import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/socials';
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from './Icons';

export const ClosingCTA: React.FC = () => {
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
    <section id="contact" className="py-28 overflow-hidden bg-[#08080c] border-t border-white/[0.08]">
      {/* Design 1 Continuous Marquee Loop */}
      <div className="w-full border-y border-white/[0.08] py-5 overflow-hidden select-none bg-[#0c0c14]">
        <div className="animate-marquee flex gap-8 whitespace-nowrap text-xs font-mono uppercase tracking-ultra text-[#8e8e9f]">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-white/80 font-bold">BUILDING THE WEB</span>
              <span className="text-[#ff3366]">•</span>
              <span className="text-white/40">INTERACTION CRAFT</span>
              <span className="text-[#c8a0e0]">•</span>
              <span>CREATIVE CODE</span>
              <span className="text-[#b04090]">•</span>
              <span className="text-white/40">EXPERIMENTATION</span>
              <span className="text-[#ff3366]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Closing Statement */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-12 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161622] border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-white/80 font-semibold">
            INITIATE CONTACT // 2026
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.95]"
        >
          Let's make <br />
          <span className="italic text-[#fdf1e1]">something interesting.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#8e8e9f] max-w-md mx-auto leading-relaxed font-normal"
        >
          Have a project in mind, an interesting problem to solve, or just want to chat about web craft? Reach out directly.
        </motion.p>

        {/* Minimal Bright Pill CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://t.me/sh4dabexe"
            target="_blank"
            rel="noreferrer"
            className="px-9 py-4 rounded-full bg-white text-[#08080c] text-xs font-mono uppercase tracking-widest font-bold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-2"
          >
            <span>Say hi on Telegram</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://github.com/sh4dabexe"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-4 rounded-full bg-[#161622] text-white hover:bg-[#1f1f2e] border border-white/10 text-xs font-mono uppercase tracking-widest font-semibold transition-all flex items-center gap-2"
          >
            <GithubIcon size={15} />
            <span>GitHub Profile</span>
          </a>
        </motion.div>

        {/* Social Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/25 text-xs font-mono text-[#8e8e9f] hover:text-white transition-all bg-[#111118]/80 shadow-md"
            >
              {getSocialIcon(social.platform)}
              <span>{social.platform}</span>
              <span className="text-[10px] opacity-40">↗</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
