import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Link2, Copy, Train, Download, ShieldCheck } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { GithubIcon } from './Icons';

export const SelectedWork: React.FC = () => {

  // Render high-fidelity visual preview for each project
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'dmrc':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-5 sm:p-8 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Subtle radial metro line glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#f1c40f]/10 blur-3xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#0070f3]/10 blur-3xl pointer-events-none" />

            {/* Metro Journey Planner Console */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#141420] border border-white/10 p-4 sm:p-5 shadow-2xl space-y-3.5">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#f1c40f]/20 border border-[#f1c40f]/40 flex items-center justify-center text-[#f1c40f]">
                    <Train size={13} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white tracking-wide block">METROFLOW</span>
                    <span className="text-[9px] font-mono text-[#8e8e9f]">DMRC ROUTE ENGINE</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2ecc71]/15 border border-[#2ecc71]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#2ecc71] font-semibold tracking-wider">LIVE ROUTE</span>
                </div>
              </div>

              {/* Transit Route Visualization Strip */}
              <div className="p-3 rounded-xl bg-[#08080c] border border-white/5 space-y-2.5">
                {/* Station 1: Origin */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#f1c40f] ring-4 ring-[#f1c40f]/20 shrink-0" />
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <span className="text-xs font-mono font-semibold text-white truncate">Kashmere Gate</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#f1c40f]/20 text-[#f1c40f] border border-[#f1c40f]/40 shrink-0">YELLOW LINE</span>
                  </div>
                </div>

                {/* Route Connecting Track with Interchange Badge */}
                <div className="ml-1.5 pl-3 border-l-2 border-dashed border-white/20 py-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8e8e9f]">
                    <span className="text-[#c8a0e0]">⇄</span>
                    <span>Interchange at Rajiv Chowk</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/40">14 min</span>
                </div>

                {/* Station 2: Destination */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#0070f3] ring-4 ring-[#0070f3]/20 shrink-0" />
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <span className="text-xs font-mono font-semibold text-white truncate">Noida City Centre</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#0070f3]/20 text-[#0070f3] border border-[#0070f3]/40 shrink-0">BLUE LINE</span>
                  </div>
                </div>
              </div>

              {/* Transit Telemetry Strip */}
              <div className="grid grid-cols-4 gap-1.5 text-center pt-0.5">
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[7.5px] font-mono uppercase text-[#8e8e9f] block">Stations</span>
                  <span className="text-xs font-bold font-mono text-white">14</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[7.5px] font-mono uppercase text-[#8e8e9f] block">Fare</span>
                  <span className="text-xs font-bold font-mono text-[#2ecc71]">₹43</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[7.5px] font-mono uppercase text-[#8e8e9f] block">Time</span>
                  <span className="text-xs font-bold font-mono text-white">28 min</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[7.5px] font-mono uppercase text-[#8e8e9f] block">Switch</span>
                  <span className="text-xs font-bold font-mono text-[#c8a0e0]">1 Line</span>
                </div>
              </div>

              {/* Engine Status Tag */}
              <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[9.5px] font-mono text-[#8e8e9f]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f1c40f] animate-ping" />
                  <span>DETERMINISTIC GRAPH SLAB</span>
                </span>
                <span className="text-white/50">261 STATIONS</span>
              </div>
            </div>
          </div>
        );

      case 'vidora':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-5 sm:p-8 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Ambient Red/Violet Backlight */}
            <div className="absolute w-72 h-72 rounded-full bg-[#ff3366]/15 blur-3xl pointer-events-none" />

            {/* Electron Desktop App Shell */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#141420] border border-white/10 p-4 sm:p-5 shadow-2xl space-y-3.5">
              {/* App Window Controls & Title */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f1c40f]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]/80" />
                  </div>
                  <span className="text-[11px] font-mono text-white/70 font-medium ml-1">vidora // desktop</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ff3366]/15 border border-[#ff3366]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#ff3366] font-semibold tracking-wider">ELECTRON 19</span>
                </div>
              </div>

              {/* Video URL & Resolved Stream Box */}
              <div className="p-3 rounded-xl bg-[#08080c] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white/40 truncate pr-2">yt-dlp://dQw4w9WgXcQ</span>
                  <span className="text-[#2ecc71] font-semibold shrink-0">4K STREAM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 rounded-lg bg-[#ff3366]/20 border border-[#ff3366]/40 flex items-center justify-center text-[#ff3366] shrink-0 font-bold text-xs">
                    4K
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono font-bold text-white truncate">Cyberpunk 2077 Night City 60FPS</p>
                    <p className="text-[9px] font-mono text-[#8e8e9f]">2160p UHD • 320kbps Audio</p>
                  </div>
                </div>
              </div>

              {/* Download Progress & Workers */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8e9f]">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Download size={11} className="text-[#ff3366]" />
                    <span>DOWNLOADING (WORKER 1/2)</span>
                  </span>
                  <span className="text-white font-bold font-mono">76%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#08080c] overflow-hidden border border-white/5">
                  <motion.div
                    animate={{ width: ['40%', '82%', '76%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#ff3366] to-[#c8a0e0]"
                  />
                </div>
              </div>

              {/* Real-time Telemetry Stats */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Speed</span>
                  <span className="text-xs font-bold font-mono text-[#2ecc71]">28.4 MB/s</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">ETA</span>
                  <span className="text-xs font-bold font-mono text-white">00:14</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Engine</span>
                  <span className="text-xs font-bold font-mono text-[#c8a0e0]">yt-dlp</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'unhooked':
        return (
          <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-[#0c0c14] relative overflow-hidden flex items-center justify-center p-5 sm:p-8 select-none group-hover:scale-[1.02] transition-transform duration-700">
            {/* Ambient Lilac & Pastel Radial Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#c8a0e0]/15 blur-3xl pointer-events-none" />

            {/* Android Device Wellbeing Card */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#141420] border border-white/10 p-4 sm:p-5 shadow-2xl space-y-3.5">
              {/* Device Status Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#c8a0e0]/20 border border-[#c8a0e0]/40 flex items-center justify-center text-[#c8a0e0]">
                    <ShieldCheck size={13} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white tracking-wide block">UNHOOKED</span>
                    <span className="text-[9px] font-mono text-[#8e8e9f]">DIGITAL WELLBEING</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c8a0e0]/15 border border-[#c8a0e0]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8a0e0] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#c8a0e0] font-semibold tracking-wider">JETPACK COMPOSE</span>
                </div>
              </div>

              {/* Drift-Resistant Focus Session Timer Display */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#c8a0e0]/10 via-[#08080c] to-[#08080c] border border-[#c8a0e0]/30 text-center space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#c8a0e0] font-semibold block">
                  POMODORO FOCUS // STRICT MODE
                </span>
                <div className="text-3xl font-bold font-mono text-white tracking-wider">
                  24:<span className="text-[#c8a0e0]">58</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[9px] font-mono text-[#8e8e9f]">
                  <span>Zero Tapjacking</span>
                  <span>•</span>
                  <span className="text-[#2ecc71]">Safe Service Active</span>
                </div>
              </div>

              {/* Intercepted Distractions & Rules */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8e9f]">
                  <span>INTERCEPTED APPS</span>
                  <span className="text-[#2ecc71] font-bold">-54% Screen Time</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="p-2 rounded-lg bg-[#08080c] border border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/70">Instagram</span>
                    <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-[#ff3366]/20 text-[#ff3366]">BLOCKED</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#08080c] border border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/70">Shorts</span>
                    <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-[#f1c40f]/20 text-[#f1c40f]">15M LIMIT</span>
                  </div>
                </div>
              </div>

              {/* Footer Telemetry */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Focus Time</span>
                  <span className="text-xs font-bold font-mono text-white">4h 15m</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Intercepts</span>
                  <span className="text-xs font-bold font-mono text-[#2ecc71]">37</span>
                </div>
                <div className="bg-[#08080c]/60 p-1.5 rounded-lg border border-white/5">
                  <span className="text-[8px] font-mono uppercase text-[#8e8e9f] block">Streak</span>
                  <span className="text-xs font-bold font-mono text-[#c8a0e0]">7 Days</span>
                </div>
              </div>
            </div>
          </div>
        );

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
          Crafted web apps, mobile solutions, desktop software, 3D spaces, and algorithmic systems designed with precision.
        </p>
      </div>

      {/* Featured Projects Editorial Alternating Grid */}
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
                      {project.id === 'vidora'
                        ? '[Desktop Application]'
                        : project.id === 'unhooked'
                        ? '[Android Native App]'
                        : '[Engine in R&D]'}
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
