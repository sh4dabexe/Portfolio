import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, GitBranch, Cpu } from 'lucide-react';

const capabilities = [
  {
    title: 'Fast Learner',
    description: 'Rapidly adapting to new libraries, browser canvas APIs, and interface paradigms with curiosity.',
    icon: Zap,
    color: '#ff3366',
  },
  {
    title: 'Team Collaboration',
    description: 'Empathetic communication, clear PR reviews, and building maintainable codebases together.',
    icon: Users,
    color: '#c8a0e0',
  },
  {
    title: 'Git & GitHub User',
    description: 'Disciplined branching, atomic commit history, clean repository structure, and CI deployment.',
    icon: GitBranch,
    color: '#b04090',
  },
  {
    title: 'AI-Augmented Dev',
    description: 'Leveraging cutting-edge AI workflows for accelerated prototyping, edge-case analysis, and testing.',
    icon: Cpu,
    color: '#3d8fa0',
  },
];

const stats = [
  { value: '06', label: 'Featured Projects Built' },
  { value: '100%', label: 'Responsive Cross-Device Focus' },
  { value: '∞', label: 'Continuous Learning Mode' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start mb-16 text-center md:text-left">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
          <span className="text-[11px] font-mono tracking-ultra text-[#8e8e9f] uppercase font-semibold">
            ABOUT // DISCIPLINE
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
          Crafting web apps with <span className="font-editorial italic text-white/90">intent.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-4 text-base sm:text-lg text-[#8e8e9f] leading-relaxed font-normal">
            <p>
              Hey, I'm <strong className="text-white font-medium">Shadab Alam</strong> — a developer
              dedicated to building clean, modern, and fully responsive web experiences that stand out.
            </p>
            <p>
              I love turning ideas into interactive, well-designed web applications that are both
              functional and visually compelling. I believe great code and great design go hand in hand
              — every animation, interaction, and layout choice should serve the user experience.
            </p>
          </div>

          {/* Factual Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                  {stat.value}
                </div>
                <p className="text-xs font-mono text-[#8e8e9f] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 4 Capability Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                whileHover={{ y: -4 }}
                className="card-luxury p-5 sm:p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cap.color}15`, color: cap.color }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#8e8e9f] leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
