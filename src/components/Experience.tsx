
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI/ML Engineer",
      company: "TechVision AI",
      period: "2023 - Present",
      description: "Leading development of advanced AI solutions, including GenAI agents and computer vision systems. Architected scalable ML pipelines processing millions of data points daily.",
      achievements: [
        "Improved model accuracy by 35% through innovative neural architecture design",
        "Led team of 5 engineers in developing production AI systems",
        "Reduced inference time by 60% through optimization techniques"
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Machine Learning Engineer",
      company: "InnovateLabs",
      period: "2021 - 2023",
      description: "Developed and deployed machine learning models for various domains including NLP, computer vision, and predictive analytics. Collaborated with cross-functional teams to integrate AI solutions.",
      achievements: [
        "Built real-time recommendation system serving 100k+ users",
        "Implemented MLOps pipeline reducing deployment time by 70%",
        "Published 3 research papers in top-tier conferences"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI Research Intern",
      company: "FutureTech Research",
      period: "2020 - 2021",
      description: "Conducted research on deep learning architectures and their applications in computer vision. Contributed to open-source ML frameworks and published research findings.",
      achievements: [
        "Developed novel CNN architecture for image classification",
        "Contributed to TensorFlow community with 10k+ downloads",
        "Presented research at international AI conference"
      ],
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of AI through innovative solutions and groundbreaking research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

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
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-black z-10`}></div>

                <div className="ml-20">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300"
                         style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                    
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-cyan-400 text-lg font-semibold">{exp.company}</p>
                        </div>
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white font-semibold text-sm mt-2 md:mt-0`}>
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-cyan-400 font-semibold text-lg">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <span className="text-cyan-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
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
