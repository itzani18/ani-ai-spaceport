
import React from 'react';
import { motion } from 'framer-motion';
import { Github, LinkedIn } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GenAI Agent Platform",
      description: "Intelligent conversational AI agents powered by advanced language models, capable of complex reasoning and task automation.",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI", "React"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🤖"
    },
    {
      title: "Sign Language Detection",
      description: "Real-time computer vision system for detecting and translating sign language gestures using deep learning models.",
      tech: ["TensorFlow", "OpenCV", "MediaPipe", "Python", "Flask"],
      gradient: "from-purple-500 to-pink-500",
      icon: "👋"
    },
    {
      title: "Company Social Media AI",
      description: "Automated content generation and social media management platform using AI for brand-consistent posting.",
      tech: ["GPT-4", "Firebase", "React", "Node.js", "MongoDB"],
      gradient: "from-green-500 to-teal-500",
      icon: "📱"
    },
    {
      title: "Wall Measurement AI",
      description: "Computer vision application for accurate wall measurements from images using depth estimation and 3D reconstruction.",
      tech: ["PyTorch", "OpenCV", "ARCore", "Unity", "C#"],
      gradient: "from-orange-500 to-red-500",
      icon: "📏"
    }
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of AI through innovative projects that push technological boundaries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300"
                   style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`text-4xl mr-4 p-3 rounded-full bg-gradient-to-r ${project.gradient}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
