
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'HOME', id: 'hero', key: '[H]' },
    { name: 'ABOUT', id: 'about', key: '[A]' },
    { name: 'PROJECTS', id: 'projects', key: '[P]' },
    { name: 'SKILLS', id: 'skills', key: '[S]' },
    { name: 'EXP', id: 'experience', key: '[E]' },
    { name: 'CONTACT', id: 'contact', key: '[C]' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-green-400 font-mono"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-green-400">
            <span className="text-red-400">root@</span>
            <span className="text-yellow-400">ani-system</span>
            <span className="text-white">:~$ </span>
            <span className="animate-pulse">▊</span>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-green-400 hover:text-white transition-colors duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-cyan-400 text-xs">{item.key}</span> {item.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.button>
            ))}
          </div>

          <div className="text-green-400 text-sm">
            <div>{currentTime.toLocaleDateString()}</div>
            <div>{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
