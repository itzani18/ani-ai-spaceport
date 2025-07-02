import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time ISL Detection",
      description:
        "Built a deep learning model to detect 60+ ISL gestures in real time using CNN and OpenCV. Achieved 94% accuracy and optimized latency for live video prediction.",
      tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      status: "DEPLOYED",
      github: "https://github.com/itzani18/isl-detector",
      demo: "",
      ascii: `
 ┌────────────┐
 │ 🧠 ISL AI  │
 │  Detector  │
 └────────────┘`,
      color: "border-yellow-400"
    },
    {
      title: "AI Resume Screening System",
      description:
        "Automates resume parsing and screening using NLP + ML (SVM, TF-IDF). Achieved 90% accuracy across 24+ job roles with PDF/DOCX/TXT parsing.",
      tech: ["Python", "Streamlit", "Scikit-learn", "SpaCy"],
      status: "DEPLOYED",
      github: "https://github.com/itzani18/resume-screening-system",
      demo: "",
      ascii: `
 ┌────────────┐
 │ 📄 Resume  │
 │  Scanner   │
 └────────────┘`,
      color: "border-cyan-400"
    },
    {
      title: "AI Career Planner Agent",
      description:
        "Voice-based GenAI assistant that plans career goals and sends WhatsApp reminders. Used Gemini API, ElevenLabs, LangChain, and RAG.",
      tech: ["Python", "Gemini", "Firebase", "LangChain", "Twilio"],
      status: "ACTIVE",
      github: "https://github.com/itzani18/career-planner-agent",
      demo: "",
      ascii: `
 ┌────────────┐
 │ 🗓️ Career  │
 │  Planner   │
 └────────────┘`,
      color: "border-green-400"
    },
    {
      title: "Aurevia – Smart Workspace App",
      description:
        "Gemini-powered task collaboration app with user login, real-time sync, and AI-generated content. Uses Firebase for backend and session handling.",
      tech: ["Python", "Streamlit", "Firebase", "Gemini API"],
      status: "BETA",
      github: "",
      demo: "https://aurevia-a-ai-agent-gjkmxexgikuznbsa4utnky.streamlit.app/",
      ascii: `
 ┌────────────┐
 │ 📋 Aurevia │
 │  App       │
 └────────────┘`,
      color: "border-purple-400"
    },
    {
      title: "Speech Emotion Recognition",
      description:
        "Trained models on 2000+ audio samples using MFCCs to classify emotion with 89% F1-score. Used in emotion-aware apps and mental health monitoring.",
      tech: ["Python", "Librosa", "Scikit-learn", "XGBoost"],
      status: "STABLE",
      github: "https://github.com/itzani18/speech-emotion-recognition",
      demo: "",
      ascii: `
 ┌────────────┐
 │ 🎤 Emotion │
 │  Detect    │
 └────────────┘`,
      color: "border-pink-400"
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

                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 border border-cyan-400 text-cyan-400 rounded text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 border border-green-400 text-green-400 rounded text-sm hover:bg-green-400 hover:text-black transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </motion.a>
                  )}
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
