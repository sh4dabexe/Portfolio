import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Train, Download, ShieldCheck, X } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { CollaborativeCursors } from './CollaborativeCursors';
import { GithubIcon } from './Icons';

export const SelectedWork: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeStoryProject, setActiveStoryProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Filter projects by category
  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web') {
      return ['dmrc', 'cutter', 'typeforge', 'birthday-present'].includes(project.id);
    }
    if (selectedFilter === 'native') {
      return ['vidora', 'unhooked'].includes(project.id);
    }
    if (selectedFilter === 'games') {
      return ['chess-online-3d', 'ludo-online', 'flappy-bird'].includes(project.id);
    }
    return true;
  });

  return (
    <section id="flagships" className="py-12 sm:py-20 px-4 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* ------------------------------------------------------------- */}
      {/* 1. FLAGSHIP DEPLOYMENTS SECTION                               */}
      {/* ------------------------------------------------------------- */}
      <div className="mb-8 sm:mb-12">
        <div className="font-mono text-xs font-bold tracking-widest text-[#ef4444] mb-2 uppercase">
          ARCHITECTURAL SHOWCASE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Flagship Deployments
        </h2>
        <p className="text-sm sm:text-base text-[#a3a3a3] max-w-2xl">
          Production-grade applications and systems running across web, desktop, and mobile environments.
        </p>
      </div>

      <div className="space-y-10">
        {/* Flagship 1: DMRC (MetroFlow) - Highlighted Card with Crimson Glow */}
        <article
          onMouseEnter={() => setHoveredProjectId('dmrc')}
          onMouseLeave={() => setHoveredProjectId(null)}
          className="relative glass-card p-5 sm:p-10 border border-[#ef4444]/40 bg-gradient-to-b from-[#141416]/90 to-[#0a0a0d]/95 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle Crimson Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(239,68,68,0.18)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Collaborative Mini-Cursors */}
          <CollaborativeCursors active={hoveredProjectId === 'dmrc'} elementName="DMRC" />

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ef4444]/15 border border-[#ef4444]/35 text-[#ef4444] font-mono text-xs font-bold rounded">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
              <span>CORE SYSTEM // TRANSIT ROUTING</span>
            </div>
            <div className="font-mono text-xs text-[#a3a3a3]">
              Stack: Next.js 14 • TypeScript • Graph Algorithms • Interactive SVG
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                DMRC (MetroFlow) — Transit Route Engine
              </h3>
              
              <p className="text-sm sm:text-base text-[#c4c4cb] leading-relaxed">
                An intelligent journey planner and alternative-route discovery engine for the Delhi-NCR Metro network featuring an interactive SVG vector map, fare calculators, and station timings. Calculates minimum-station routes across 261 stations and 12 lines with deterministic graph search.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-black/60 border border-white/10 p-3 rounded-lg text-center">
                  <div className="font-mono text-lg font-bold text-[#ef4444]">261</div>
                  <div className="text-[11px] font-mono text-[#a3a3a3]">Stations</div>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 rounded-lg text-center">
                  <div className="font-mono text-lg font-bold text-[#ef4444]">12</div>
                  <div className="text-[11px] font-mono text-[#a3a3a3]">Metro Lines</div>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 rounded-lg text-center">
                  <div className="font-mono text-lg font-bold text-white">₹43</div>
                  <div className="text-[11px] font-mono text-[#a3a3a3]">Avg Fare</div>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 rounded-lg text-center">
                  <div className="font-mono text-lg font-bold text-white">0-Lag</div>
                  <div className="text-[11px] font-mono text-[#a3a3a3]">Graph Search</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://metro-tool.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-crimson"
                >
                  <span>LAUNCH APP DEMO</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/sh4dabexe/DMRC"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                >
                  <GithubIcon size={14} />
                  <span>VIEW REPOSITORY</span>
                </a>
                <button
                  onClick={() => setActiveStoryProject(projects[0])}
                  className="btn btn-glass !border-white/20 text-[#a3a3a3] hover:text-white"
                >
                  <span>INSPECT STORY</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Transit Route Simulator Console */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#08080c] border border-white/15 p-3.5 sm:p-5 shadow-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#f1c40f]/20 border border-[#f1c40f]/40 flex items-center justify-center text-[#f1c40f] shrink-0">
                      <Train size={15} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono font-bold text-white tracking-wide block">METROFLOW CORE</span>
                      <span className="text-[10px] font-mono text-[#8e8e9f] block truncate">DMRC MULTI-LINE ROUTE ENGINE</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2ecc71]/15 border border-[#2ecc71]/30 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
                    <span className="text-[10px] font-mono text-[#2ecc71] font-semibold">ROUTE ACTIVE</span>
                  </div>
                </div>

                {/* Route strip */}
                <div className="p-3 sm:p-3.5 rounded-lg bg-[#0e0e14] border border-white/5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#f1c40f] ring-4 ring-[#f1c40f]/20 shrink-0" />
                    <div className="flex-1 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="text-xs font-mono font-bold text-white">Kashmere Gate</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#f1c40f]/20 text-[#f1c40f] border border-[#f1c40f]/40 shrink-0">YELLOW LINE</span>
                    </div>
                  </div>

                  <div className="ml-1.5 pl-3 border-l-2 border-dashed border-white/20 py-1.5 flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#c4c4cb]">
                      <span className="text-[#ef4444]">⇄</span>
                      <span>Interchange at Rajiv Chowk</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40">14 min</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0070f3] ring-4 ring-[#0070f3]/20 shrink-0" />
                    <div className="flex-1 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="text-xs font-mono font-bold text-white">Noida City Centre</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#0070f3]/20 text-[#0070f3] border border-[#0070f3]/40 shrink-0">BLUE LINE</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
                  <div className="bg-[#12121c] p-2 rounded border border-white/5">
                    <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Stations</span>
                    <span className="text-xs font-bold font-mono text-white">14</span>
                  </div>
                  <div className="bg-[#12121c] p-2 rounded border border-white/5">
                    <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Fare</span>
                    <span className="text-xs font-bold font-mono text-[#2ecc71]">₹43</span>
                  </div>
                  <div className="bg-[#12121c] p-2 rounded border border-white/5">
                    <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Est. Time</span>
                    <span className="text-xs font-bold font-mono text-white">28m</span>
                  </div>
                  <div className="bg-[#12121c] p-2 rounded border border-white/5">
                    <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Line Switch</span>
                    <span className="text-xs font-bold font-mono text-[#ef4444]">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary Flagship Grid: Vidora & Unhooked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flagship 2: Vidora */}
          <article
            onMouseEnter={() => setHoveredProjectId('vidora')}
            onMouseLeave={() => setHoveredProjectId(null)}
            className="relative glass-card p-6 sm:p-8 border border-white/10 bg-[#0a0a0d]/80 rounded-2xl flex flex-col justify-between overflow-hidden"
          >
            <CollaborativeCursors active={hoveredProjectId === 'vidora'} elementName="Vidora" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#ef4444]/15 border border-[#ef4444]/35 text-[#ef4444]">
                  DESKTOP APP // MEDIA PROCESSING
                </span>
                <span className="font-mono text-xs text-[#737373]">02</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Vidora — Desktop Media Engine
              </h3>
              
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-5">
                A high-performance desktop application for downloading YouTube videos and playlists up to 4K 60fps or extracting pristine 320kbps MP3 audio with concurrent queue workers.
              </p>

              {/* Console preview */}
              <div className="bg-black/60 border border-white/10 rounded-xl p-3.5 sm:p-4 font-mono text-xs space-y-2 mb-5">
                <div className="flex flex-wrap items-center justify-between gap-1 text-[#a3a3a3]">
                  <span className="flex items-center gap-1.5">
                    <Download size={13} className="text-[#ef4444] shrink-0" />
                    <span>Concurrent Workers (4 active)</span>
                  </span>
                  <span className="text-[#2ecc71]">32.4 MB/s</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ef4444] h-full w-[78%]" />
                </div>
                <div className="flex flex-wrap justify-between gap-1 text-[10px] text-[#737373]">
                  <span>yt-dlp stream + FFmpeg pipeline</span>
                  <span>78% complete • ETA 14s</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['Electron', 'React', 'TypeScript', 'FFmpeg', 'yt-dlp'].map((tag) => (
                  <span key={tag} className="tech-tag text-[10px]">{tag}</span>
                ))}
              </div>
              <a
                href="https://github.com/sh4dabexe/Vidora"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#ef4444] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </article>

          {/* Flagship 3: Unhooked */}
          <article
            onMouseEnter={() => setHoveredProjectId('unhooked')}
            onMouseLeave={() => setHoveredProjectId(null)}
            className="relative glass-card p-6 sm:p-8 border border-white/10 bg-[#0a0a0d]/80 rounded-2xl flex flex-col justify-between overflow-hidden"
          >
            <CollaborativeCursors active={hoveredProjectId === 'unhooked'} elementName="Unhooked" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#ef4444]/15 border border-[#ef4444]/35 text-[#ef4444]">
                  ANDROID // DIGITAL WELLBEING
                </span>
                <span className="font-mono text-xs text-[#737373]">03</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Unhooked — Mindful Focus &amp; Blocker
              </h3>
              
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-5">
                Modern, local-first Android digital wellbeing tool built with Kotlin and Jetpack Compose. Drift-resistant focus timers, zero-conflict accessibility blocking, and mindful telemetry charts.
              </p>

              {/* Console preview */}
              <div className="bg-black/60 border border-white/10 rounded-xl p-3.5 sm:p-4 font-mono text-xs space-y-2 mb-5">
                <div className="flex flex-wrap items-center justify-between gap-1 text-[#a3a3a3]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#2ecc71] shrink-0" />
                    <span>Focus Shield Active</span>
                  </span>
                  <span className="text-[#ef4444]">Locked (25m)</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-white">
                  <span>Distraction Apps Blocked</span>
                  <span className="font-bold text-[#ef4444]">14 detected</span>
                </div>
                <div className="text-[10px] text-[#737373]">
                  Local Room DB • Zero cloud telemetry • 100% private
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['Kotlin', 'Jetpack Compose', 'Room DB', 'Android SDK'].map((tag) => (
                  <span key={tag} className="tech-tag text-[10px]">{tag}</span>
                ))}
              </div>
              <a
                href="https://github.com/sh4dabexe/Unhooked"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#ef4444] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. CODEBASE MATRIX (BENTO GRID - ALL 9 PROJECTS)              */}
      {/* ------------------------------------------------------------- */}
      <div id="matrix" className="pt-16 sm:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs font-bold tracking-widest text-[#ef4444] mb-2 uppercase">
              CODEBASE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              All Projects &amp; Experiments
            </h2>
            <p className="text-sm text-[#a3a3a3]">
              Browse the complete repository matrix across web SaaS, desktop tools, and games.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All [9]' },
              { id: 'web', label: 'Web Apps [4]' },
              { id: 'native', label: 'Desktop & Native [2]' },
              { id: 'games', label: 'Games & 3D [3]' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`font-mono text-xs font-bold px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#ef4444] text-black shadow-[0_2px_12px_rgba(239,68,68,0.35)]'
                    : 'bg-white/[0.04] text-[#a3a3a3] hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="relative glass-card p-6 border border-white/10 bg-[#0a0a0d]/80 rounded-xl flex flex-col justify-between hover:border-white/25 transition-all group overflow-hidden"
            >
              {/* Collaborative Cursors on Hover */}
              <CollaborativeCursors active={hoveredProjectId === project.id} elementName={project.title} />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#ef4444]/12 text-[#ef4444] border border-[#ef4444]/30">
                    {project.subCategory || project.category}
                  </span>
                  <span className="font-mono text-xs text-[#737373]">
                    {project.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ef4444] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tech-tag text-[10px]">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tech-tag text-[10px] text-white/40">+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* Footer Links & Inspect Story */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStoryProject(project)}
                    className="text-[11px] font-mono text-[#a3a3a3] hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Inspect Story →
                  </button>

                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#a3a3a3] hover:text-[#ef4444] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3a3a3] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. INTERACTIVE PROJECT STORY MODAL / DRAWER                   */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeStoryProject && (
          <div
            onClick={() => setActiveStoryProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto bg-[#0d0d12] border border-white/20 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6"
            >
              <button
                onClick={() => setActiveStoryProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#ef4444] px-2 py-0.5 rounded bg-[#ef4444]/10 border border-[#ef4444]/30">
                    {activeStoryProject.number} // {activeStoryProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeStoryProject.title}
                </h3>
              </div>

              {activeStoryProject.storyHeading && (
                <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#ef4444]">
                  <h4 className="text-base font-bold text-white mb-1">
                    {activeStoryProject.storyHeading}
                  </h4>
                  <p className="text-sm text-[#c4c4cb] leading-relaxed">
                    {activeStoryProject.storyText}
                  </p>
                </div>
              )}

              <div>
                <h5 className="font-mono text-xs text-[#a3a3a3] uppercase tracking-wider mb-2">
                  Summary &amp; Architecture
                </h5>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {activeStoryProject.description}
                </p>
              </div>

              <div>
                <h5 className="font-mono text-xs text-[#a3a3a3] uppercase tracking-wider mb-2">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeStoryProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {activeStoryProject.demoUrl && (
                  <a
                    href={activeStoryProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-crimson"
                  >
                    <span>LAUNCH DEMO</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={activeStoryProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                >
                  <GithubIcon size={14} />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
