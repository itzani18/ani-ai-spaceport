
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GenAI Agent Platform",
      description: "Advanced conversational AI with reasoning capabilities",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
      status: "DEPLOYED",
      ascii: `
 ┌─────────┐
 │ 🤖 GenAI │
 │  Agent  │
 └─────────┘`,
      color: "border-cyan-400"
    },
    {
      title: "Sign Language Detection",
      description: "Real-time computer vision for sign language translation",
      tech: ["TensorFlow", "OpenCV", "MediaPipe", "Python"],
      status: "ACTIVE",
      ascii: `
 ┌─────────┐
 │ 👋 Sign │
 │ Detect  │
 └─────────┘`,
      color: "border-yellow-400"
    },
    {
      title: "Social Media AI",
      description: "Automated content generation for brand consistency",
      tech: ["GPT-4", "Firebase", "React", "Node.js"],
      status: "BETA",
      ascii: `
 ┌─────────┐
 │ 📱 Social│
 │   AI    │
 └─────────┘`,
      color: "border-pink-400"
    },
    {
      title: "Wall Measurement AI",
      description: "3D measurement using computer vision technology",
      tech: ["PyTorch", "OpenCV", "ARCore", "Unity"],
      status: "DEV",
      ascii: `
 ┌─────────┐
 │ 📏 Measure│
 │   AI     │
 └─────────┘`,
      color: "border-purple-400"
    }
  ];

  return (
    <section id="projects" className="relative py-20 border-t-2 border-green-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            [ PROJECT_DIRECTORY ]
          </h2>
          <div className="text-green-300">
            ani@localhost:~/projects$ ls -la
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-black border-2 ${project.color} rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className={`text-xs px-2 py-1 border rounded ${project.color.replace('border-', 'text-')}`}>
                    {project.status}
                  </div>
                </div>

                {/* ASCII Art */}
                <div className="text-center mb-4">
                  <pre className={`${project.color.replace('border-', 'text-')} text-sm`}>
                    {project.ascii}
                  </pre>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-green-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-yellow-400 text-xs mb-2">$ cat tech_stack.json</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-400 bg-opacity-10 border border-green-400 rounded text-green-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 border border-cyan-400 text-cyan-400 rounded text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 border border-green-400 text-green-400 rounded text-sm hover:bg-green-400 hover:text-black transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
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
