
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "AI/ML FRAMEWORKS",
      skills: [
        { name: "TensorFlow", level: 95, ascii: "▓▓▓▓▓▓▓▓▓░" },
        { name: "PyTorch", level: 90, ascii: "▓▓▓▓▓▓▓▓▓░" },
        { name: "Scikit-learn", level: 88, ascii: "▓▓▓▓▓▓▓▓▓░" },
        { name: "OpenCV", level: 85, ascii: "▓▓▓▓▓▓▓▓░░" }
      ]
    },
    {
      category: "PROGRAMMING",
      skills: [
        { name: "Python", level: 98, ascii: "▓▓▓▓▓▓▓▓▓▓" },
        { name: "JavaScript", level: 85, ascii: "▓▓▓▓▓▓▓▓░░" },
        { name: "R", level: 80, ascii: "▓▓▓▓▓▓▓▓░░" },
        { name: "SQL", level: 88, ascii: "▓▓▓▓▓▓▓▓▓░" }
      ]
    },
    {
      category: "CLOUD & TOOLS",
      skills: [
        { name: "AWS", level: 85, ascii: "▓▓▓▓▓▓▓▓░░" },
        { name: "Firebase", level: 90, ascii: "▓▓▓▓▓▓▓▓▓░" },
        { name: "Docker", level: 82, ascii: "▓▓▓▓▓▓▓▓░░" },
        { name: "Git", level: 95, ascii: "▓▓▓▓▓▓▓▓▓░" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 border-t-2 border-green-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            [ SKILL_MATRIX ]
          </h2>
          <div className="text-green-300">
            ani@localhost:~$ ./analyze_skills.sh --verbose
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-black border-2 border-cyan-400 rounded-lg p-6 hover:border-green-400 transition-all duration-300">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-600 pb-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-cyan-400">{category.category}</div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">{skill.name}</span>
                        <span className="text-yellow-400 text-xs">{skill.level}%</span>
                      </div>
                      
                      <div className="font-mono text-xs">
                        <span className="text-green-400">{skill.ascii}</span>
                        <span className="text-gray-600 ml-1">[{skill.level}/100]</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* System Status */}
                <div className="mt-6 pt-4 border-t border-gray-600">
                  <div className="text-xs text-green-300">
                    <div>Status: <span className="text-green-400">OPTIMAL</span></div>
                    <div>Load: <span className="text-yellow-400">87%</span></div>
                    <div>Mode: <span className="text-cyan-400">LEARNING</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
