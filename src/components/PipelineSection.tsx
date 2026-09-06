import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'React', badge: '19.x' },
  { name: 'TypeScript', badge: 'ESNext' },
  { name: 'Vite', badge: 'Engine' },
  { name: 'Python', badge: 'Logic' },
  { name: 'Tailwind CSS', badge: 'Styling' },
  { name: 'GSAP', badge: 'Motion' },
];

export const PipelineSection: React.FC = () => {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const corePathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pipeline = pipelineRef.current;
    const nodeStack = nodeStackRef.current;
    const nodeX = nodeXRef.current;
    const nodeShield = nodeShieldRef.current;
    const glowPath = glowPathRef.current;
    const corePath = corePathRef.current;
    const gradient = gradientRef.current;
    const splash = splashRef.current;

    if (!pipeline || !nodeStack || !nodeX || !nodeShield || !glowPath || !corePath || !gradient || !splash) {
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

    let loopId: number;
    let state: 'p1' | 'splash' | 'p2' | 'idle' = 'p1';
    let lastStateChange = performance.now();

    const loop = (now: number) => {
      const elapsed = now - lastStateChange;

      if (state === 'p1') {
        const duration = 800;
        const p = Math.min(1, elapsed / duration) * 0.5;
        const center = p * 100;
        gradient.setAttribute('x1', `${center - 8}%`);
        gradient.setAttribute('x2', `${center + 8}%`);
        glowPath.style.opacity = '0.7';
        corePath.style.opacity = '1';

        if (p < 0.4) {
          nodeStack.classList.add('active');
        } else {
          nodeStack.classList.remove('active');
        }

        if (elapsed >= duration) {
          state = 'splash';
          lastStateChange = now;
          glowPath.style.opacity = '0';
          corePath.style.opacity = '0';
          splash.classList.add('animate');
        }
      } else if (state === 'splash') {
        const duration = 800;
        if (elapsed >= duration) {
          state = 'p2';
          lastStateChange = now;
          splash.classList.remove('animate');
          glowPath.style.opacity = '0.7';
          corePath.style.opacity = '1';
        }
      } else if (state === 'p2') {
        const duration = 800;
        const p = 0.5 + Math.min(1, elapsed / duration) * 0.5;
        const center = p * 100;
        gradient.setAttribute('x1', `${center - 8}%`);
        gradient.setAttribute('x2', `${center + 8}%`);

        if (p > 0.6) {
          nodeShield.classList.add('active');
        }

        if (elapsed >= duration) {
          nodeShield.classList.remove('active');
          state = 'idle';
          lastStateChange = now;
          glowPath.style.opacity = '0';
          corePath.style.opacity = '0';
        }
      } else if (state === 'idle') {
        const duration = 1000;
        if (elapsed >= duration) {
          state = 'p1';
          lastStateChange = now;
        }
      }

      loopId = requestAnimationFrame(loop);
    };

    loopId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', computePath);
      cancelAnimationFrame(loopId);
    };
  }, []);

  return (
    <section id="pipeline" className="py-24 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Design 2 Technical Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="hero-card mx-auto"
      >
        <div className="hero-grid" />

        {/* 3-Node Animated Icon Pipeline */}
        <div ref={pipelineRef} className="icon-pipeline">
          <svg className="beam-svg">
            <defs>
              <filter id="glow-pipeline" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="beam-gradient-main" gradientUnits="userSpaceOnUse" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#b04090" stopOpacity="0" />
                <stop offset="20%" stopColor="#b04090" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#c8a0e0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c8a0e0" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              ref={glowPathRef}
              stroke="url(#beam-gradient-main)"
              strokeWidth="3.5"
              filter="url(#glow-pipeline)"
              fill="none"
              strokeLinecap="round"
            />
            <path
              ref={corePathRef}
              stroke="url(#beam-gradient-main)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Node 1: IDEAS */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div ref={nodeStackRef} className="icon-node node-light-right" id="node-stack">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span className="text-[10px] font-mono tracking-ultra uppercase text-white/80">
              IDEAS
            </span>
          </div>

          <div className="pipeline-line -mt-6" />

          {/* Node 2: BUILD */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="relative">
              <div ref={splashRef} className="splash" />
              <div ref={nodeXRef} className="icon-node-center" id="node-x">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="10" y1="19" x2="14" y2="5" />
                </svg>
              </div>
            </div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-white font-bold">
              BUILD
            </span>
          </div>

          <div className="pipeline-line right -mt-6" />

          {/* Node 3: SHIP */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div ref={nodeShieldRef} className="icon-node node-light-left" id="node-shield">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <span className="text-[10px] font-mono tracking-ultra uppercase text-white/80">
              SHIP
            </span>
          </div>
        </div>

        {/* Narrative Heading */}
        <div className="relative z-10 max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-ultra text-[#8e8e9f]">
            WORKFLOW ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            I turn ideas{' '}
            <strong className="block font-normal mt-1 bg-gradient-to-r from-white via-[#e8c0e8] to-[#a98597] bg-clip-text text-transparent">
              into things that work.
            </strong>
          </h2>
          <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
            From initial logic and 3D scenes to clean responsive deployments built for speed, delight, and real human use.
          </p>
        </div>

        {/* Tech Brands Badges Row */}
        <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-12 flex-wrap mt-14 pt-8 border-t border-white/[0.06] text-white/40 text-xs font-mono">
          {brands.map((b) => (
            <div key={b.name} className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b04090]" />
              <span>{b.name}</span>
              <span className="text-[10px] opacity-40">({b.badge})</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
