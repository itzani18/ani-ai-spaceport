
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 95, icon: "🔥" },
        { name: "PyTorch", level: 90, icon: "⚡" },
        { name: "Scikit-learn", level: 88, icon: "📊" },
        { name: "OpenCV", level: 85, icon: "👁️" }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 98, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "💻" },
        { name: "R", level: 80, icon: "📈" },
        { name: "SQL", level: 88, icon: "🗄️" }
      ]
    },
    {
      category: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Firebase", level: 90, icon: "🔥" },
        { name: "Docker", level: 82, icon: "🐳" },
        { name: "Git", level: 95, icon: "🌐" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build the future of AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-white font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          viewport={{ once: true }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </motion.div>
                  ))}
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
