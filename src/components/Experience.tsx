
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Specialization in AI/ML",
      company: "National Institute of Technology",
      period: "2023 - 2025",
      description: "Advancing neural network architectures and deep learning algorithms. Research focus on GenAI agents and computer vision applications.",
      achievements: [
        "CGPA: 8.7/10 (Current)",
        "Research: GenAI agents & LLM applications", 
        "Published: Sign language detection paper",
        "Led: AI/ML workshop for 100+ students"
      ],
      status: "ACTIVE",
      type: "education"
    },
    {
      title: "Customer Service Support Engineer",
      subtitle: "Part-time Position",
      company: "TechSupport Solutions", 
      period: "2022 - 2023",
      description: "Developed automation scripts and provided technical support while building problem-solving expertise and client communication skills.",
      achievements: [
        "Resolved: 95% queries within SLA",
        "Automated: Python scripts (-40% response time)",
        "Trained: 5 new team members",
        "Awarded: Employee of the Month (2x)"
      ],
      status: "COMPLETED",
      type: "work"
    }
  ];

  return (
    <section id="experience" className="relative py-20 border-t-2 border-green-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block bg-black border-2 border-green-400 rounded-lg px-6 py-3">
              <div className="text-green-400 font-bold animate-pulse">
                🟢 STATUS: OPEN_TO_WORK
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            [ EXPERIENCE_LOG ]
          </h2>
          <div className="text-green-300">
            ani@localhost:~$ git log --oneline --graph
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10"></div>

                <div className="ml-20">
                  <div className="bg-black border-2 border-cyan-400 rounded-lg p-6">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-gray-600 pb-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-yellow-400">
                        {exp.status} | {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      {exp.type === 'education' && <span className="text-xl">🎓</span>}
                      {exp.type === 'work' && <span className="text-xl">💼</span>}
                    </div>
                    
                    {exp.subtitle && (
                      <p className="text-cyan-400 text-sm font-medium mb-2">{exp.subtitle}</p>
                    )}
                    <p className="text-green-400 text-lg font-semibold mb-4">{exp.company}</p>

                    <p className="text-green-300 text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-yellow-400 font-semibold">
                        $ cat {exp.type === 'education' ? 'achievements.log' : 'results.log'}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-green-300 text-sm"
                          >
                            <span className="text-green-400">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
