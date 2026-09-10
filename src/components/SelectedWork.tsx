import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Link2, Copy } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { GithubIcon } from './Icons';

export const SelectedWork: React.FC = () => {

  // Render high-fidelity visual preview for each project
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'chess-online-3d':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* 3D Perspective Grid Background */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '44px 44px',
                transform: 'perspective(500px) rotateX(45deg) translateY(40px)',
                transformOrigin: 'bottom center',
              }}
            />

            {/* Glowing Chess Board Visual */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-[#141420] border border-white/10 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
                {/* Board Checkered Grid */}
                <div className="grid grid-cols-4 gap-1.5 w-full h-full opacity-60">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-md transition-colors duration-500 ${
                        (Math.floor(i / 4) + (i % 4)) % 2 === 0
                          ? 'bg-white/15'
                          : 'bg-transparent border border-white/5'
                      }`}
                    />
                  ))}
                </div>

                {/* Floating 3D Knight Piece */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-7xl sm:text-8xl text-white drop-shadow-[0_20px_25px_rgba(255,51,102,0.3)] filter">
                    ♞
                  </span>
                </motion.div>

                {/* Coordinate Markers */}
                <div className="absolute top-2 left-3 text-[9px] font-mono text-white/40 tracking-wider">
                  RANK: 4 • FILE: D
                </div>
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-[#ff3366] tracking-wider font-semibold">
                  3D ENGINE ACTIVE
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-4 px-3 py-1 rounded-full bg-[#161624] border border-white/10 text-[10px] font-mono text-white/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-ping" />
                <span>THREE.JS / WEBGL INTERACTION</span>
              </div>
            </div>
          </div>
        );

      case 'cutter':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-5 sm:p-8 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Subtle radial glow */}
            <div className="absolute w-64 h-64 rounded-full bg-[#ff3366]/10 blur-3xl pointer-events-none" />

            {/* URL Shortener & Analytics Dashboard Preview */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#141420] border border-white/10 p-4 sm:p-5 shadow-2xl space-y-3.5">
              {/* Console / App Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f1c40f]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]/80" />
                  </div>
                  <span className="text-[11px] font-mono text-white/70 font-medium ml-1">cutter.black/app</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2ecc71]/15 border border-[#2ecc71]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#2ecc71] font-semibold tracking-wider">LIVE ENGINE</span>
                </div>
              </div>

              {/* Long URL Input Simulation */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8e9f]">
                  <span>ORIGINAL URL</span>
                  <span className="text-white/40">78 chars</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#08080c] border border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50 overflow-hidden">
                  <span className="truncate pr-2">https://github.com/sh4dabexe/portfolio/analytics/v2/stream...</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/60 shrink-0">LONG</span>
                </div>
              </div>

              {/* Cut & Shorten Action Divider */}
              <div className="flex items-center justify-center gap-2 py-0.5">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/15" />
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff3366]/20 border border-[#ff3366]/40 text-[#ff3366] text-[10px] font-mono font-bold">
                  <Link2 size={11} />
                  <span>CUT & SHORTEN</span>
                  <span className="text-white/60 font-normal">(-73%)</span>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/15" />
              </div>

              {/* Shortened URL Output Box */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#ff3366]/15 via-[#b04090]/10 to-transparent border border-[#ff3366]/40 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#ff3366]/20 border border-[#ff3366]/40 flex items-center justify-center text-[#ff3366] shrink-0">
                    <Link2 size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono font-bold text-white tracking-wide truncate">
                      cutter.black/<span className="text-[#ff3366]">sh4dab</span>
                    </p>
                    <p className="text-[9px] font-mono text-[#8e8e9f]">Redirect speed: 18ms</p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-md bg-white text-[#08080c] text-[10px] font-mono font-bold shrink-0 flex items-center gap-1 shadow-md">
                  <Copy size={10} />
                  <span>COPY</span>
                </span>
              </div>

              {/* Analytics Telemetry Strip */}
              <div className="pt-1 grid grid-cols-3 gap-2 text-center border-t border-white/10">
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Total Clicks</span>
                  <span className="text-xs font-bold font-mono text-white">2,847</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">CTR Rate</span>
                  <span className="text-xs font-bold font-mono text-[#2ecc71]">+38.4%</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Uptime</span>
                  <span className="text-xs font-bold font-mono text-[#c8a0e0]">99.98%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'typeforge':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Modern Typing Test Terminal */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#141420] border border-white/10 p-5 shadow-2xl space-y-4">
              {/* Telemetry Header */}
              <div className="grid grid-cols-3 gap-2 text-center border-b border-white/10 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-[#8e8e9f] uppercase">Speed</span>
                  <p className="text-xl font-bold font-mono text-white">114 <span className="text-[10px] text-[#ff3366]">WPM</span></p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-[#8e8e9f] uppercase">Accuracy</span>
                  <p className="text-xl font-bold font-mono text-white">99.4%</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-[#8e8e9f] uppercase">Errors</span>
                  <p className="text-xl font-bold font-mono text-[#c8a0e0]">0</p>
                </div>
              </div>

              {/* Typing Stream Words */}
              <div className="p-3.5 rounded-xl bg-[#08080c] border border-white/5 font-mono text-xs leading-relaxed space-y-1.5">
                <p className="text-white/40">
                  <span className="text-white font-bold bg-white/10 px-1 rounded">the rhythm</span> of continuous input tracking and immediate tactile feedback.
                </p>
                <div className="flex items-center gap-1.5 text-[#ff3366]">
                  <span className="w-2 h-4 bg-[#ff3366] animate-pulse inline-block" />
                  <span className="text-[11px] tracking-wide">type to test speed...</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8e9f]">
                <span>FEEDBACK LOOP: &lt;16MS</span>
                <span className="text-[#c8a0e0]">KEYBOARD OPTIMIZED</span>
              </div>
            </div>
          </div>
        );

      case 'ludo-online':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Ludo Quad Board Representation */}
            <div className="relative flex flex-col items-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl bg-[#141420] border border-white/10 p-4 shadow-2xl grid grid-cols-2 gap-3 relative">
                {/* Red Yard */}
                <div className="rounded-xl bg-[#ff3366]/20 border border-[#ff3366]/40 p-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-[#ff3366] font-bold">P1 // RED</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]" />
                  </div>
                </div>

                {/* Green Yard */}
                <div className="rounded-xl bg-[#2ecc71]/20 border border-[#2ecc71]/40 p-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-[#2ecc71] font-bold">P2 // GREEN</span>
                  <div className="flex gap-1 justify-end">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" />
                  </div>
                </div>

                {/* Yellow Yard */}
                <div className="rounded-xl bg-[#f1c40f]/20 border border-[#f1c40f]/40 p-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-[#f1c40f] font-bold">P3 // YELLOW</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f1c40f]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f1c40f]" />
                  </div>
                </div>

                {/* Blue Yard */}
                <div className="rounded-xl bg-[#3498db]/20 border border-[#3498db]/40 p-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-[#3498db] font-bold">P4 // BLUE</span>
                  <div className="flex gap-1 justify-end">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3498db]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3498db]" />
                  </div>
                </div>

                {/* Center Dice Roll Area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 rounded-xl bg-white text-[#08080c] font-mono text-xl font-bold flex items-center justify-center shadow-2xl border border-white"
                  >
                    🎲
                  </motion.div>
                </div>
              </div>

              <span className="mt-4 text-[10px] font-mono text-white/70 uppercase tracking-widest">
                MULTIPLAYER TURN ENGINE
              </span>
            </div>
          </div>
        );

      case 'birthday-present':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Celebratory Gift Box Visual */}
            <div className="relative text-center space-y-4">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative inline-block"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-[#b04090]/40 to-[#ff3366]/30 border border-[#ff3366]/40 flex items-center justify-center text-5xl sm:text-6xl shadow-2xl shadow-[#ff3366]/20">
                  🎁
                </div>
                {/* Floating Confetti Badges */}
                <span className="absolute -top-2 -right-2 text-xl animate-bounce">✨</span>
                <span className="absolute -bottom-1 -left-2 text-lg animate-pulse">🎉</span>
              </motion.div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-ultra text-[#c8a0e0] font-semibold block">
                  CELEBRATORY EXPERIENCE
                </span>
                <p className="text-xs text-[#8e8e9f] font-mono max-w-xs mx-auto">
                  Interactive surprise sequences, confetti particles & tailored animations.
                </p>
              </div>
            </div>
          </div>
        );

      case 'flappy-bird':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Retro Pixel Arcade Canvas Visual */}
            <div className="relative w-full max-w-xs rounded-2xl bg-[#08080c] border border-white/10 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[10px] font-mono text-[#8e8e9f] uppercase">PYGAME ENGINE</span>
                <span className="text-xs font-mono text-[#2ecc71] font-bold">SCORE: 42</span>
              </div>

              {/* Arcade Screen Simulation */}
              <div className="relative h-36 rounded-xl bg-[#11111a] border border-white/5 flex items-center justify-between px-6 overflow-hidden">
                {/* Obstacle Pipes */}
                <div className="w-8 h-16 bg-[#2ecc71] rounded-t-md self-end border border-white/20" />
                
                {/* Animated Bird Avatar */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-3xl"
                >
                  🐤
                </motion.div>

                <div className="w-8 h-16 bg-[#2ecc71] rounded-b-md self-start border border-white/20" />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8e9f]">
                <span>FRAME-RATE: 60 FPS</span>
                <span className="text-white">PYTHON ARCADE</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full min-h-[300px] bg-[#111118] flex items-center justify-center">
            <span className="font-mono text-xs text-[#8e8e9f]">PROJECT SHOWCASE</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-28 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
            <span className="text-[11px] font-mono uppercase tracking-ultra text-[#8e8e9f] font-semibold">
              SELECTED WORK // ROSTER
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Things I've <span className="font-editorial italic text-white/90">built.</span>
          </h2>
        </div>
        <p className="text-sm text-[#8e8e9f] max-w-xs font-normal leading-relaxed">
          Crafted web apps, 3D interactive spaces, game logic, and browser utilities designed with precision.
        </p>
      </div>

      {/* 6 Featured Projects Editorial Alternating Grid */}
      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center group"
            >
              {/* Visual Showcase Surface */}
              <div
                className={`rounded-[28px] overflow-hidden border border-white/[0.08] relative group transition-all duration-500 shadow-2xl ${
                  isEven ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'
                }`}
              >
                {renderProjectVisual(project)}

                {/* Interactive Hover Backdrop & Direct Action Overlay */}
                <div className="absolute inset-0 bg-[#08080c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center p-6">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3.5 rounded-full bg-white text-[#08080c] text-xs font-mono uppercase tracking-wider font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
                    >
                      <span>Launch — </span>
                      <span className="font-editorial italic capitalize font-bold text-sm">
                        {project.title}
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3.5 rounded-full bg-white text-[#08080c] text-xs font-mono uppercase tracking-wider font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
                    >
                      <span>Inspect Code — </span>
                      <span className="font-editorial italic capitalize font-bold text-sm">
                        {project.title}
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Narrative Editorial Column */}
              <div
                className={`space-y-5 ${
                  isEven ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'
                }`}
              >
                {/* Category & Index */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8e8e9f]">
                  <span className="tracking-ultra uppercase font-semibold text-white/70">
                    {project.category}
                  </span>
                  <span className="text-white/40 font-bold">{project.number}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Story Statement / Description */}
                <p className="text-sm sm:text-base text-[#8e8e9f] leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-white/70 bg-[#161622] px-3 py-1 rounded-full border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Actions Bar */}
                <div className="flex items-center gap-4 pt-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161622] border border-white/10 hover:border-white/20 text-xs font-mono text-white transition-all hover:scale-105"
                  >
                    <GithubIcon size={14} />
                    <span>View Repository</span>
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#ff3366] transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#8e8e9f]/60 italic">
                      [Engine in R&D]
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
