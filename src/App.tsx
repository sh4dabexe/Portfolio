import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PipelineSection } from './components/PipelineSection';
import { SelectedWork } from './components/SelectedWork';
import { Explorations } from './components/Explorations';
import { AboutSection } from './components/AboutSection';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080c] text-[#f5f5f7] font-sans selection:bg-[#ff3366]/30 selection:text-white relative">
      {/* Design 1 Loading Screen (000 -> 100 counter over 2.7s) */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Floating Navbar */}
      <Navbar />

      {/* Natural Vertical Scrolling Experience with Rich Animations */}
      <main className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-80'}`}>
        {/* Editorial Hero with Shadab's Portrait and Glowing Conic Halo */}
        <Hero />

        {/* Technical Pipeline Centerpiece (IDEAS -> BUILD -> SHIP) */}
        <PipelineSection />

        {/* 6 Featured Projects Editorial Bento Grid */}
        <SelectedWork />

        {/* Visual Playground & Interactive Experiments */}
        <Explorations />

        {/* Discipline & Capabilities */}
        <AboutSection />

        {/* Closing Marquee & Direct Contact */}
        <ClosingCTA />

        {/* Minimal Editorial Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
