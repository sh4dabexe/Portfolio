import React from 'react';
import { AuroraCanvas } from './components/AuroraCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { AboutSection } from './components/AboutSection';
import { SelectedWork } from './components/SelectedWork';
import { PipelineSection } from './components/PipelineSection';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans selection:bg-[#ef4444] selection:text-black relative">
      {/* Atmospheric Ambient Noir & Crimson Op-Art Canvas */}
      <AuroraCanvas />

      {/* Floating Glass Navigation Dock */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        {/* Stage Grid Hero with Background Wordmark & Cutout */}
        <Hero />

        {/* Section 01: About & Philosophy */}
        <SectionDivider coord="// 01.00 SEC_ABOUT" index="INDEX [01 / 05]" />
        <AboutSection />

        {/* Section 02: Flagship Deployments & Matrix */}
        <SectionDivider coord="// 02.00 SEC_FLAGSHIPS" index="INDEX [02 / 05]" />
        <SelectedWork />

        {/* Section 03: Technical Pipeline & Architecture */}
        <SectionDivider coord="// 03.00 SEC_PIPELINE" index="INDEX [03 / 05]" />
        <PipelineSection />

        {/* Section 04: Direct Dispatch & Contact */}
        <SectionDivider coord="// 04.00 SEC_DISPATCH" index="INDEX [04 / 05]" />
        <ClosingCTA />

        {/* Section 05: Minimal Editorial Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
