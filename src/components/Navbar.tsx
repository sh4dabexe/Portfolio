import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useSwarm } from '../hooks/useSwarm';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Flagships', href: '#flagships' },
  { label: 'Matrix', href: '#matrix' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { triggerRebuild } = useSwarm();

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="dock-container">
      <nav className="nav-dock" aria-label="Main Navigation">
        {/* Brand Monogram & Label */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-2.5 text-decoration-none group"
          aria-label="Shadab Alam Home"
        >
          <span className="brand-monogram">SA</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#a3a3a3] group-hover:text-white transition-colors">
            SHADAB<span className="text-[#ef4444]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="text-[#a3a3a3] hover:text-white hover:bg-white/[0.08] text-xs font-mono font-medium px-3 py-1.5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Stack */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Swarm Rebuild Trigger Button (available on all viewports) */}
          <button
            onClick={() => triggerRebuild()}
            title="Trigger multi-cursor building animation"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-[#ef4444]/10 hover:bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/30 hover:border-[#ef4444]/60 transition-all cursor-pointer"
          >
            <Sparkles size={11} />
            <span>REBUILD ⚡</span>
          </button>

          {/* Availability Status Indicator */}
          <div
            className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#a3a3a3] pl-2 border-l border-white/10"
            title="Available for developer roles & high-impact projects"
          >
            <span className="status-dot" />
            <span>Available</span>
          </div>

          {/* Dispatch CTA */}
          <a
            href="https://t.me/sh4dabexe"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#ef4444] hover:bg-[#ff3333] text-black font-mono text-xs font-bold rounded-full shadow-[0_2px_12px_rgba(239,68,68,0.35)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>DISPATCH</span>
            <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            className="lg:hidden p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-3 top-16 sm:top-20 p-5 sm:p-6 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl bg-[#0a0a0d]/95 border border-white/10 backdrop-blur-2xl flex flex-col gap-4 lg:hidden shadow-2xl z-50 pointer-events-auto">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="brand-monogram">SA</span>
              <span className="font-mono text-xs font-bold text-white">SHADAB ALAM</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#ef4444]">
              <span className="status-dot" />
              <span>Available for Work</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="px-4 py-2 rounded-xl text-sm font-mono text-[#a3a3a3] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                triggerRebuild();
              }}
              className="w-full py-2.5 rounded-xl font-mono text-xs font-bold text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              <span>TRIGGER CURSOR REBUILD ⚡</span>
            </button>

            <a
              href="https://t.me/sh4dabexe"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-[#ef4444] flex items-center justify-center gap-1.5 shadow-lg"
            >
              <span>INITIATE DISPATCH</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
