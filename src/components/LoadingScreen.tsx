import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ['Design', 'Build', 'Explore'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 200);
      }, 300);
      return () => clearTimeout(timer);
    }

    const duration = 2700; // ~2.7s
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    // Rotate through Design -> Build -> Explore
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 850);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressInterval);
          clearInterval(wordInterval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, [onComplete, reducedMotion]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 sm:p-14 md:p-16 bg-[#0a0a0f] text-[#f0f0f5] select-none"
        >
          {/* Top-left: Small editorial label */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-ultra font-mono text-[#8888a8]">
              PORTFOLIO
            </span>
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#8888a8]">
              SHADAB ALAM
            </span>
          </div>

          {/* Center: Serif rotating words */}
          <div className="flex items-center justify-center my-auto">
            <div className="relative h-24 sm:h-32 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="font-editorial text-5xl sm:text-7xl md:text-8xl italic text-white tracking-tight"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row: Counter & Progress Line */}
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-[10px] uppercase font-mono tracking-ultra text-[#8888a8]">
                COLLECTION // 2026
              </span>
              <span className="font-editorial text-5xl sm:text-7xl text-white tracking-tighter">
                {String(Math.floor(progress)).padStart(3, '0')}
              </span>
            </div>

            {/* Thin progress line */}
            <div className="w-full h-[1px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
