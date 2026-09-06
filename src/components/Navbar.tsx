import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-6 md:gap-10 px-6 py-2.5 rounded-full transition-all duration-300 max-w-5xl w-full ${
          scrolled
            ? 'glass-panel shadow-2xl shadow-black/80 py-3'
            : 'bg-surface/50 border border-white/[0.06] backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-2.5 text-xs uppercase font-mono tracking-ultra text-white font-bold hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" />
          <span>SHADAB ALAM</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase font-mono tracking-widest text-[#8e8e9f]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/sh4dabexe"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white text-[#08080c] font-semibold hover:bg-white/90 hover:scale-105 transition-all flex items-center gap-1 shadow-lg"
          >
            <span>Say hi</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          className="md:hidden p-1.5 text-white/80 hover:text-white"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 p-6 rounded-3xl bg-[#0f0f16]/95 border border-white/10 backdrop-blur-2xl flex flex-col gap-5 md:hidden shadow-2xl z-50">
          <div className="flex flex-col gap-4 font-mono uppercase text-sm tracking-widest text-[#8e8e9f]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="text-white hover:text-white/70 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              href="https://t.me/sh4dabexe"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-full text-center block text-xs font-mono uppercase tracking-widest bg-white text-[#08080c] font-semibold"
            >
              Say hi on Telegram ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
