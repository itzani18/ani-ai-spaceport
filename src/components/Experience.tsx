
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Specialization in AI/ML",
      company: "National Institute of Technology",
      period: "2023 - 2025",
      description: "Pursuing advanced studies in Artificial Intelligence and Machine Learning with focus on deep learning, neural networks, and computer vision. Working on cutting-edge research projects and building practical AI solutions.",
      achievements: [
        "CGPA: 8.7/10 (Current)",
        "Research project on GenAI agents and LLM applications",
        "Published paper on sign language detection using computer vision",
        "Led AI/ML workshop for 100+ students"
      ],
      color: "from-emerald-400 to-cyan-500",
      type: "education"
    },
    {
      title: "Customer Service Support Engineer",
      subtitle: "Part-time Position",
      company: "TechSupport Solutions",
      period: "2022 - 2023",
      description: "Provided technical support and customer service while developing automation tools to improve efficiency. Gained valuable experience in problem-solving and client communication.",
      achievements: [
        "Resolved 95% of customer queries within SLA",
        "Developed Python automation scripts reducing response time by 40%",
        "Trained 5 new team members on technical processes",
        "Received 'Employee of the Month' award twice"
      ],
      color: "from-blue-400 to-purple-500",
      type: "work"
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
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <Badge className="relative bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold text-lg px-6 py-2 border-0 shadow-lg">
                🚀 Open to Work
              </Badge>
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building expertise in AI/ML through academic excellence and practical experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500"></div>

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
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-black z-10 shadow-lg`}></div>

                <div className="ml-20">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300"
                         style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                    
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                            {exp.type === 'education' && (
                              <span className="text-xl">🎓</span>
                            )}
                            {exp.type === 'work' && (
                              <span className="text-xl">💼</span>
                            )}
                          </div>
                          {exp.subtitle && (
                            <p className="text-cyan-300 text-md font-medium mb-1">{exp.subtitle}</p>
                          )}
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
                        <h4 className="text-cyan-400 font-semibold text-lg">
                          {exp.type === 'education' ? 'Academic Highlights:' : 'Key Achievements:'}
                        </h4>
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
