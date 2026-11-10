import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-mono text-xs font-bold tracking-widest text-[#ef4444] mb-2 uppercase">
          ENGINEER PROFILE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Background &amp; Philosophy
        </h2>
        <p className="text-sm sm:text-base text-[#a3a3a3] max-w-2xl">
          Building responsive web applications, desktop media tools, and interactive browser experiences with deliberate intent.
        </p>
      </div>

      <div className="glass-card p-6 sm:p-10 border border-white/10 rounded-2xl bg-[#0a0a0d]/80 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base text-[#c4c4cb] leading-relaxed">
              I am <strong className="text-white font-semibold">Shadab Alam</strong> — a creative developer and software engineer based in New Delhi. My development journey began with a passion for turning complex problems into clean, fast, and visually compelling digital interfaces.
            </p>
            <p className="text-base text-[#c4c4cb] leading-relaxed">
              Over the years, I've designed and engineered everything from transit route engines (handling graph algorithms across Delhi Metro's 261 stations) to high-performance desktop media processing applications in Electron and local-first Android wellbeing tools in Kotlin Jetpack Compose.
            </p>
            <p className="text-base text-[#c4c4cb] leading-relaxed">
              I believe that great software is forged where engineering rigor meets interaction craft. Every layout, transition, and micro-interaction must serve clarity, usability, and speed.
            </p>

            {/* Red Accent Quote Box */}
            <div className="border-l-2 border-[#ef4444] pl-5 py-2 my-6 bg-white/[0.02] rounded-r-lg">
              <p className="text-sm sm:text-base italic text-white/95 font-medium">
                "I craft digital experiences and software where clean code, responsive interaction, and visual storytelling meet — built from first principles, not bloat."
              </p>
            </div>
          </div>

          {/* Right Column: 3 Core Principles */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-10">
            <div className="font-mono text-xs font-bold tracking-widest text-white/80 uppercase mb-4">
              OPERATIONAL PRINCIPLES
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/30 px-2 py-1 rounded">
                  01
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Craft &amp; Interaction
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                    Every pixel, transition, and micro-interaction is deliberately tuned for tactile delight, fluidity, and zero layout shift.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/30 px-2 py-1 rounded">
                  02
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    First-Principles Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                    Selecting the right primitives for each domain — whether graph search in TypeScript, worker threads in Electron, or coroutines in Kotlin.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/30 px-2 py-1 rounded">
                  03
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Deterministic Polish
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                    Building software that works offline-first, loads under 100ms, and respects user attention with minimal visual noise.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
