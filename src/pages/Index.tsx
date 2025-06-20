
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white mx-2">Code. Learn. Repeat.</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>
          <p className="text-gray-400">© 2024 Ani - AI/ML Innovator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
