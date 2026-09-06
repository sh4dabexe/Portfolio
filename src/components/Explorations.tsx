import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2 } from 'lucide-react';

interface PlaygroundItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  color: string;
  icon: string;
  details: string;
  tech: string[];
}

const playgroundItems: PlaygroundItem[] = [
  {
    id: 'exp-1',
    title: 'Kinetic Canvas',
    tagline: 'Velocity & collision physics curves in HTML5 Canvas',
    category: 'Physics',
    color: '#ff3366',
    icon: '⚡',
    details:
      'An interactive particle system experimenting with spring forces, mass attenuation, velocity vectors, and pointer attraction on a 2D canvas.',
    tech: ['HTML5 Canvas', 'Vector Math', 'Verlet Integration'],
  },
  {
    id: 'exp-2',
    title: '3D Raycaster',
    tagline: 'Retro pseudo-3D engine built without WebGL',
    category: 'Graphics',
    color: '#b04090',
    icon: '📐',
    details:
      'Classic Wolfenstein-style DDA (Digital Differential Analyzer) raycasting algorithm implemented from scratch to cast 2D grid maps into 3D camera views.',
    tech: ['Pure JavaScript', 'DDA Algorithm', 'Trigonometry'],
  },
  {
    id: 'exp-3',
    title: 'Typographic Soundboard',
    tagline: 'Polyphonic synth tones mapped to keypresses',
    category: 'Audio',
    color: '#c8a0e0',
    icon: '🎵',
    details:
      'Synthesizing polyphonic sine/triangle wave harmonics using the browser Web Audio API, triggered dynamically by user keyboard scancodes.',
    tech: ['Web Audio API', 'Oscillator Nodes', 'Harmonics'],
  },
  {
    id: 'exp-4',
    title: 'CSS Spatial Shaders',
    tagline: 'Perspective depth tricks and ambient specular sweeps',
    category: 'Motion',
    color: '#3d8fa0',
    icon: '✨',
    details:
      'Exploring pure CSS 3D transforms, backface culling, dynamic mouse-following specular gradients, and perspective vanishing point geometry.',
    tech: ['CSS 3D Transforms', 'Perspective Matrix', 'Specular Shaders'],
  },
  {
    id: 'exp-5',
    title: 'Algorithmic Mazes',
    tagline: 'Recursive backtracking generator & A* pathfinding',
    category: 'Algorithms',
    color: '#2ecc71',
    icon: '🧩',
    details:
      'Visualizing depth-first search graph traversal and heuristic A* shortest-path solving step by step in real time with adjustable tick rates.',
    tech: ['Graph Theory', 'A* Algorithm', 'Recursion'],
  },
  {
    id: 'exp-6',
    title: 'Tactile Controls',
    tagline: 'Micro-interactions & satisfying haptic states',
    category: 'Interface',
    color: '#f1c40f',
    icon: '🎛️',
    details:
      'Crafting satisfying physical button feedback states, spring damping, elastic switches, and fluid drawer transitions that delight users on touch.',
    tech: ['Framer Motion', 'Spring Physics', 'Micro-Interactions'],
  },
];

export const Explorations: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PlaygroundItem | null>(null);

  // Quick Web Audio synthesizer demo
  const playSoundNote = (frequency: number) => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      // AudioContext policy
    }
  };

  return (
    <section id="playground" className="py-28 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Centered Editorial Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161622] border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a0e0]" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-[#8e8e9f] font-semibold">
            R&D LAB // PLAYGROUND
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
          Visual <span className="font-editorial italic text-white/90">playground.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#8e8e9f] leading-relaxed font-normal">
          Experiments, canvas physics, audio engines, and interactive ideas built to test the boundaries of browser craft.
        </p>
      </div>

      {/* Two Parallax-Rhythm Columns Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Column 1 */}
        <div className="space-y-8 lg:space-y-12">
          {playgroundItems.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => {
                setActiveItem(item);
                if (item.id === 'exp-3') playSoundNote(440 + i * 110);
              }}
              className="rounded-[26px] bg-[#111118] border border-white/[0.08] hover:border-white/25 p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all shadow-xl group relative overflow-hidden"
            >
              {/* Subtle ambient gradient badge */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-25"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex items-center justify-between text-xs font-mono text-[#8e8e9f] mb-6">
                <span className="uppercase tracking-widest text-white/60 font-semibold">{item.category}</span>
                <span className="text-3xl filter drop-shadow group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8e8e9f] leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-4 border-t border-white/[0.06] group-hover:text-white transition-colors">
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  Inspect Experiment
                </span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 2 (Slightly offset for visual rhythm) */}
        <div className="space-y-8 lg:space-y-12 md:pt-14">
          {playgroundItems.slice(3, 6).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => {
                setActiveItem(item);
                if (item.id === 'exp-3') playSoundNote(523);
              }}
              className="rounded-[26px] bg-[#111118] border border-white/[0.08] hover:border-white/25 p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all shadow-xl group relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-25"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex items-center justify-between text-xs font-mono text-[#8e8e9f] mb-6">
                <span className="uppercase tracking-widest text-white/60 font-semibold">{item.category}</span>
                <span className="text-3xl filter drop-shadow group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8e8e9f] leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-4 border-t border-white/[0.06] group-hover:text-white transition-colors">
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  Inspect Experiment
                </span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for In-Depth Experiment Inspection */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-[#08080c]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full rounded-[28px] bg-[#111118] border border-white/10 p-7 sm:p-9 space-y-6 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#8e8e9f] hover:text-white transition-all"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: `${activeItem.color}20`, color: activeItem.color }}
                >
                  {activeItem.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-ultra text-[#8e8e9f]">
                    {activeItem.category} // LAB EXPERIMENT
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              {/* Description Details */}
              <p className="text-sm text-[#8e8e9f] leading-relaxed">
                {activeItem.details}
              </p>

              {/* Technology Stack Tags */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  TECHNOLOGY & PARADIGMS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeItem.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#161622] text-white/80 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Audio Trigger if Soundboard */}
              {activeItem.id === 'exp-3' && (
                <div className="p-4 rounded-2xl bg-[#161622] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Volume2 size={18} className="text-[#c8a0e0]" />
                    <span className="text-xs font-mono text-white">Test Audio Synthesizer</span>
                  </div>
                  <button
                    onClick={() => playSoundNote(520 + Math.random() * 300)}
                    className="px-3.5 py-1.5 rounded-full bg-[#c8a0e0] text-[#08080c] font-mono text-xs font-bold hover:opacity-90"
                  >
                    Play Tone ♫
                  </button>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">
                  SHADAB ALAM LABS
                </span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-2 rounded-full bg-white text-[#08080c] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 active:scale-95 transition-all"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
