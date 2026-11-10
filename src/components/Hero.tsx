import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useSwarm } from '../hooks/useSwarm';

export const Hero: React.FC = () => {
  const { triggerRebuild } = useSwarm();

  return (
    <section id="hero" className="hero-section">
      {/* Background Vertical 3-Grid Lines */}
      <div className="hero-bg-grid" aria-hidden="true">
        <div className="grid-line line-1" />
        <div className="grid-line line-2" />
        <div className="grid-line line-3" />
      </div>

      {/* Standalone SVG Wordmark Header */}
      <div className="hero-wordmark-svg select-none" aria-hidden="true">
        <svg viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid meet">
          <text x="0" y="165" fontSize="230" textLength="1000" lengthAdjust="spacingAndGlyphs">
            PORTFOLIO
          </text>
        </svg>
      </div>

      {/* 3-Column Balanced Stage Grid */}
      <div className="hero-stage-grid">
        {/* Left Flank: Brand Identity & Actions */}
        <div className="hero-flank left-flank">
          <div className="hero-script">Hello, I'm</div>
          
          <h1 className="hero-name">
            SHADAB<span className="accent-red-dot">.</span>
          </h1>

          {/* Role Pill & Rebuild Trigger */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="hero-role-pill !mb-0">
              <span className="pill-dot text-[#ef4444] animate-pulse">●</span>
              <span>FRONTEND &amp; WEB SYSTEMS DEVELOPER</span>
            </div>
            <button
              onClick={() => triggerRebuild()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono font-bold text-[#ef4444] bg-[#ef4444]/10 hover:bg-[#ef4444]/20 border border-[#ef4444]/35 hover:border-[#ef4444] transition-all cursor-pointer"
              title="Watch the swarm of cursors build this page"
            >
              <Sparkles size={11} />
              <span>REBUILD ⚡</span>
            </button>
          </div>

          <p className="hero-desc">
            Crafting <strong>high-performance web applications</strong>, modern interactive interfaces, and <strong>desktop/native software</strong> from first principles — clean architecture, zero bloat.
          </p>

          {/* Actions: Side-by-Side Symmetrical Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-crimson">
              <span>INITIATE DISPATCH</span>
              <ArrowUpRight size={14} />
            </a>
            <a href="#flagships" className="btn btn-glass">
              <span>EXPLORE WORK</span>
            </a>
          </div>

          {/* Metrics Row */}
          <div className="hero-stats-row">
            <div className="hero-stat-box">
              <span className="stat-val block">09+</span>
              <span className="stat-lbl block">Projects Built</span>
            </div>
            <div className="hero-stat-box">
              <span className="stat-val block text-white">4</span>
              <span className="stat-lbl block">Core Disciplines</span>
            </div>
            <div className="hero-stat-box">
              <span className="stat-val block text-white">100%</span>
              <span className="stat-lbl block">Modern Stack</span>
            </div>
          </div>
        </div>

        {/* Center Column: Cutout Portrait Frame */}
        <div className="hero-center-col">
          <div className="hero-cutout-wrap group">
            {/* Portrait Image */}
            <img
              src="/pfp.jpg"
              alt="Shadab Alam"
              className="hero-cutout-img"
              width={480}
              height={600}
              loading="eager"
            />

            {/* Sovereign Status Badge Docked Cleanly Inside */}
            <div className="cutout-status-badge">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
              <span>TERMINAL ACTIVE // NEW DELHI</span>
            </div>
          </div>
        </div>

        {/* Right Flank: HUD Stack */}
        <div className="hero-flank right-flank">
          <div className="hud-stack">
            <div className="hud-card">
              <div className="hud-card-header">
                <span className="hud-idx">01.</span>
                <span className="text-xs font-mono font-bold text-white tracking-wider">UI ARCHITECTURE</span>
                <span className="hud-tag">CORE</span>
              </div>
              <div className="hud-card-title">Frontend &amp; Web Apps</div>
              <div className="hud-card-desc">
                High-fidelity React 19, TypeScript, and Tailwind web applications with smooth micro-interactions.
              </div>
            </div>

            <div className="hud-card">
              <div className="hud-card-header">
                <span className="hud-idx">02.</span>
                <span className="text-xs font-mono font-bold text-white tracking-wider">SYSTEMS</span>
                <span className="hud-tag">NATIVE</span>
              </div>
              <div className="hud-card-title">Desktop &amp; Android</div>
              <div className="hud-card-desc">
                High-throughput desktop media processing in Electron, and local-first Kotlin Jetpack Compose apps.
              </div>
            </div>

            <div className="hud-card">
              <div className="hud-card-header">
                <span className="hud-idx">03.</span>
                <span className="text-xs font-mono font-bold text-white tracking-wider">EXECUTION</span>
                <span className="hud-tag">PERF</span>
              </div>
              <div className="hud-card-title">Sub-100ms Interactions</div>
              <div className="hud-card-desc">
                Spatial 3D browser games, deterministic graph routing, and rapid algorithmic execution.
              </div>
            </div>

            {/* HUD Tech Pills (Properly Styled) */}
            <div className="hud-tech-tags">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">Electron</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
