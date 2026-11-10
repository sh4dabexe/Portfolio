import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/skills';
import { Code, Layout, Film, Terminal, Zap } from 'lucide-react';

export const PipelineSection: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string>('frontend-dev');

  // Pipeline circuit refs
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const corePathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const pipeline = pipelineRef.current;
    const nodeStack = nodeStackRef.current;
    const nodeX = nodeXRef.current;
    const nodeShield = nodeShieldRef.current;
    const glowPath = glowPathRef.current;
    const corePath = corePathRef.current;
    const gradient = gradientRef.current;

    if (!pipeline || !nodeStack || !nodeX || !nodeShield || !glowPath || !corePath || !gradient) {
      return;
    }

    const computePath = () => {
      const pRect = pipeline.getBoundingClientRect();
      const sRect = nodeStack.getBoundingClientRect();
      const xRect = nodeX.getBoundingClientRect();
      const shRect = nodeShield.getBoundingClientRect();

      const startX = sRect.left + sRect.width / 2 - pRect.left;
      const startY = sRect.top + sRect.height / 2 - pRect.top;
      const midX = xRect.left + xRect.width / 2 - pRect.left;
      const midY = xRect.top + xRect.height / 2 - pRect.top;
      const endX = shRect.left + shRect.width / 2 - pRect.left;
      const endY = shRect.top + shRect.height / 2 - pRect.top;

      const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;
      glowPath.setAttribute('d', d);
      corePath.setAttribute('d', d);
    };

    computePath();
    window.addEventListener('resize', computePath);

    let frameId: number;
    let progress = 0;

    const animatePulse = () => {
      progress = (progress + 0.008) % 1;
      const center = progress * 100;
      gradient.setAttribute('x1', `${center - 10}%`);
      gradient.setAttribute('x2', `${center + 10}%`);
      frameId = requestAnimationFrame(animatePulse);
    };

    frameId = requestAnimationFrame(animatePulse);

    return () => {
      window.removeEventListener('resize', computePath);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const activeSkill = skills.find((s) => s.id === activeSkillId) || skills[0];

  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'Globe':
        return <Code size={18} />;
      case 'Layout':
        return <Layout size={18} />;
      case 'Film':
        return <Film size={18} />;
      case 'Terminal':
        return <Terminal size={18} />;
      default:
        return <Zap size={18} />;
    }
  };

  return (
    <section id="pipeline" className="py-20 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-mono text-xs font-bold tracking-widest text-[#ef4444] mb-2 uppercase">
          ENGINEERING CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Pipeline &amp; Technical Architecture
        </h2>
        <p className="text-sm sm:text-base text-[#a3a3a3] max-w-2xl">
          Continuous execution loop connecting conceptual ideation, rapid implementation, and production deployment.
        </p>
      </div>

      {/* 1. Technical Pipeline Nodes (IDEAS -> BUILD -> SHIP) */}
      <div
        ref={pipelineRef}
        className="relative glass-card p-8 sm:p-12 border border-white/10 rounded-2xl bg-[#0a0a0d]/90 overflow-hidden mb-12"
      >
        {/* Animated Circuit SVG Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="circuit-gradient" ref={gradientRef} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            ref={glowPathRef}
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="4"
            className="opacity-75 blur-[2px]"
          />
          <path
            ref={corePathRef}
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            className="opacity-90"
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center md:text-left">
          {/* Node 1: IDEAS */}
          <div
            ref={nodeStackRef}
            className="p-6 rounded-xl bg-black/60 border border-white/10 relative group hover:border-[#ef4444]/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#ef4444]">STAGE 01</span>
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">IDEATION &amp; ARCHITECTURE</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Deconstructing problem requirements, planning state machines, choosing clean primitives, and drafting wireframes.
            </p>
          </div>

          {/* Node 2: BUILD */}
          <div
            ref={nodeXRef}
            className="p-6 rounded-xl bg-black/60 border border-white/10 relative group hover:border-[#ef4444]/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#ef4444]">STAGE 02</span>
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">DETERMINISTIC BUILD</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Writing atomic components, setting up fast build pipelines in Vite, and implementing smooth micro-interactions.
            </p>
          </div>

          {/* Node 3: SHIP */}
          <div
            ref={nodeShieldRef}
            className="p-6 rounded-xl bg-black/60 border border-white/10 relative group hover:border-[#ef4444]/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#ef4444]">STAGE 03</span>
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">OPTIMIZATION &amp; DEPLOY</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Cross-browser verification, bundle pruning, sub-100ms response profiling, and zero-downtime production deployment.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Architecture Discipline Explorer */}
      <div className="glass-card p-6 sm:p-10 border border-white/10 rounded-2xl bg-[#0a0a0d]/80">
        <div className="mb-6">
          <div className="font-mono text-xs font-bold text-[#ef4444] tracking-wider mb-1">
            CONSTITUTIONAL CAPABILITIES EXPLORER
          </div>
          <div className="text-sm text-[#737373]">
            Select a discipline to inspect core proficiencies, technical stack, and architecture breakdown.
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, i) => (
            <button
              key={skill.id}
              onClick={() => setActiveSkillId(skill.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                activeSkillId === skill.id
                  ? 'bg-[#ef4444] text-black shadow-[0_2px_12px_rgba(239,68,68,0.35)]'
                  : 'bg-white/[0.04] text-[#a3a3a3] hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              <span>{getSkillIcon(skill.icon)}</span>
              <span>LAYER 0{i + 1} // {skill.name.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Inspector Pane */}
        <div className="p-6 rounded-xl bg-black/60 border border-white/10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#ef4444] tracking-wider mb-1">
                DISCIPLINE PROFILE
              </div>
              <h4 className="text-2xl font-bold text-white">
                {activeSkill.name}
              </h4>
            </div>

            {/* Proficiency Meter */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#a3a3a3]">Proficiency Index:</span>
              <span className="font-mono text-lg font-bold text-[#ef4444]">
                {activeSkill.proficiency}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              style={{ width: `${activeSkill.proficiency}%` }}
              className="bg-[#ef4444] h-full transition-all duration-700 ease-out"
            />
          </div>

          <p className="text-sm sm:text-base text-[#c4c4cb] leading-relaxed">
            {activeSkill.description}
          </p>

          <div>
            <div className="font-mono text-xs text-[#737373] uppercase tracking-wider mb-2">
              Primary Technologies &amp; Tooling
            </div>
            <div className="flex flex-wrap gap-2">
              {activeSkill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-white/[0.06] border border-white/10 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
