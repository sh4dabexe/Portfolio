import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollaborativeCursorsProps {
  active: boolean;
  elementName?: string;
}

const AGENTS = [
  { name: 'Ada', color: '#F24E1E', initialPos: { x: '15%', y: '20%' }, targetPos: { x: '82%', y: '25%' } },
  { name: 'Linus', color: '#0ACF83', initialPos: { x: '80%', y: '75%' }, targetPos: { x: '25%', y: '80%' } },
  { name: 'Grace', color: '#1ABCFE', initialPos: { x: '50%', y: '15%' }, targetPos: { x: '70%', y: '65%' } },
];

export const CollaborativeCursors: React.FC<CollaborativeCursorsProps> = ({ active, elementName }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <AnimatePresence>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {AGENTS.map((agent, i) => {
          // Dynamic positions depending on phase
          const posX = phase % 2 === 0 ? agent.initialPos.x : agent.targetPos.x;
          const posY = phase % 2 === 0 ? agent.initialPos.y : agent.targetPos.y;

          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.6, x: agent.initialPos.x, y: agent.initialPos.y }}
              animate={{
                opacity: 1,
                scale: 1,
                left: posX,
                top: posY,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.15,
              }}
              className="absolute flex items-start gap-1 select-none pointer-events-none"
            >
              {/* Figma-like cursor SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                <path
                  d="M4.6 3.9 C4.2 3.1 4.9 2.4 5.7 2.8 L20.6 9.4 C21.5 9.8 21.4 11.1 20.4 11.3 L13.9 12.9 C13.4 13 13 13.4 12.9 13.9 L11.3 20.4 C11.1 21.4 9.8 21.5 9.4 20.6 Z"
                  fill={agent.color}
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Name badge */}
              <div
                style={{ backgroundColor: agent.color }}
                className="text-[10px] font-mono text-white font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap"
              >
                {agent.name} {elementName ? `• ${elementName}` : ''}
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

