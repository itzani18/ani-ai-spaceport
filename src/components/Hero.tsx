
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const terminalLines = [
    "$ whoami",
    "> Aniket Choudhary - AI/ML Engineer",
    "$ cat skills.txt",
    "> Python | TensorFlow | PyTorch | GenAI",
    "$ ./initialize_portfolio.sh",
    "> Loading neural networks...",
    "> Calibrating algorithms...",
    "> System ready for deployment! 🤖"
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      let index = 0;
      const currentText = terminalLines[currentLine];
      const timer = setInterval(() => {
        if (index <= currentText.length) {
          setDisplayText(currentText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setDisplayText('');
          }, 1000);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [currentLine]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-black border-2 border-green-400 rounded-lg p-8 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6 border-b border-green-400 pb-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">Terminal v2.4.1</div>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2 mb-8">
            {terminalLines.slice(0, currentLine).map((line, index) => (
              <div key={index} className="text-green-400">
                {line}
              </div>
            ))}
            <div className="text-green-400">
              {displayText}
              <span className="animate-pulse">▊</span>
            </div>
          </div>

          {/* ASCII Art */}
          <div className="text-center mb-8">
            <pre className="text-cyan-400 text-xs md:text-sm">
{`    ___    _   _ _____ 
   / _ \\  | \\ | |_   _|
  / /_\\ \\ |  \\| | | |  
  |  _  | | |\\   | | |  
  | | | | | | \\  |_| |_ 
  \\_| |_/ \\_| \\_/\\___/ 
                       
  [AI/ML ENGINEER v3.0]`}
            </pre>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 8 }}
          >
            <motion.button
              className="px-6 py-3 bg-green-400 text-black font-bold rounded border-2 border-green-400 hover:bg-transparent hover:text-green-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              $ ./explore_projects.sh
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/11yLmNEsYtp0GVSwKOujmcXwUEOWMMODq/view?usp=sharing"
              download
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              $ wget resume.pdf
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating ASCII Robot */}
        <motion.div
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block text-green-400"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <pre className="text-sm">
{`    [o_o]
     |_|
    /| |\\
   / | | \\
     | |
    _|_|_`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
