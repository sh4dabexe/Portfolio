import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { socialLinks } from '../data/socials';
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from './Icons';

const roles = [
  'Frontend Developer',
  'Responsive Website Designer',
  'Web Application Developer',
  'Git & GitHub User',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-10 w-[450px] h-[450px] rounded-full bg-[#ff3366]/[0.07] blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-[#c8a0e0]/[0.06] blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column: Personal Brand & Intro */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161622]/80 border border-white/10 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3366]" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#f5f5f7] uppercase font-semibold">
              Available for Work • 2026
            </span>
          </motion.div>

          {/* Large Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Shadab <span className="font-editorial font-normal italic text-white/90">Alam</span>
            </h1>
          </motion.div>

          {/* Dynamic Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-9 flex items-center justify-center lg:justify-start font-mono text-lg sm:text-2xl text-white/90"
          >
            <span className="text-[#ff3366] mr-2.5">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-medium"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="w-2 h-5 bg-[#ff3366] ml-2 animate-pulse" />
          </motion.div>

          {/* Narrative Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-[#8e8e9f] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            Passionate about building clean, responsive web experiences that look great and work
            seamlessly across all devices. Let's create something amazing together.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white text-[#08080c] hover:bg-white/90 hover:scale-105 shadow-xl flex items-center gap-2 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="https://t.me/sh4dabexe"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-medium bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 hover:border-white/20 text-white flex items-center gap-1.5 transition-all"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={14} className="text-[#ff3366]" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#8e8e9f] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Resume</span>
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          </motion.div>

          {/* Social Platform Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-3"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e8e9f]/70 mr-1">
              Follow:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${social.platform}`}
                className="w-9 h-9 rounded-full bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 flex items-center justify-center text-[#8e8e9f] hover:text-white hover:scale-110 transition-all shadow-sm"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: User Profile Photo Card with Conic Animated Glow */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Rotating Conic Gradient Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full p-[2px] overflow-hidden">
              <div
                className="w-full h-full rounded-full animate-conic-glow"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, #b04090, #ff3366, #c8a0e0, transparent)',
                }}
              />
            </div>

            {/* Inner Luxury Dark Frame */}
            <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full p-2.5 bg-[#08080c] border border-white/10 backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                <img
                  src="/pfp.jpg"
                  alt="Shadab Alam"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge 1: Location */}
            <div className="absolute -bottom-2 -left-2 sm:left-2 px-4 py-2 rounded-2xl glass-panel shadow-2xl flex items-center gap-2.5 border border-white/10">
              <MapPin size={15} className="text-[#ff3366]" />
              <div>
                <p className="text-[10px] font-mono text-[#8e8e9f] uppercase tracking-wider">Location</p>
                <p className="text-xs font-semibold text-white">India (Open to Collabs)</p>
              </div>
            </div>

            {/* Floating Badge 2: Craft */}
            <div className="absolute -top-2 -right-2 sm:right-2 px-4 py-2 rounded-2xl glass-panel shadow-2xl flex items-center gap-2 border border-white/10">
              <Sparkles size={15} className="text-[#c8a0e0]" />
              <div>
                <p className="text-[10px] font-mono text-[#8e8e9f] uppercase tracking-wider">Focus</p>
                <p className="text-xs font-semibold text-white">Interactive Web Apps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
