
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-green-400 overflow-x-hidden font-mono">
      <MatrixBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Terminal Footer */}
      <footer className="relative z-10 border-t-2 border-green-400 bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-green-400 mb-4 font-bold text-xl">
              <pre>{`
███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗     ██████╗ ██╗   ██╗
██╔════╝╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║    ██╔═══██╗██║   ██║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║    ██║   ██║██║   ██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║    ██║   ██║██║   ██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║    ╚██████╔╝╚██████╔╝
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝     ╚═════╝  ╚═════╝ 
              `}</pre>
            </div>
            <p className="text-green-300">~/portfolio$ Connection established • Status: ONLINE • © 2024 Ani</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
