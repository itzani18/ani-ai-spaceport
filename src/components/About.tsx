
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 border-t-2 border-green-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            [ SYSTEM_INFO ]
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-black border-2 border-cyan-400 rounded-lg p-6">
              <div className="text-cyan-400 mb-4">
                <span className="text-yellow-400">ani@localhost</span>:~$ cat about.txt
              </div>
              
              <div className="space-y-4 text-green-300">
                <p>
                  <span className="text-red-400">&gt;</span> Status: Neural networks optimized ✓
                </p>
                <p>
                  <span className="text-red-400">&gt;</span> Passion: Building AI solutions that actually work
                </p>
                <p>
                  <span className="text-red-400">&gt;</span> Mission: Transforming data into intelligent decisions
                </p>
                <p>
                  <span className="text-red-400">&gt;</span> Current: MCA in AI/ML @ NIT (2023-2025)
                </p>
                <p>
                  <span className="text-red-400">&gt;</span> Expertise: GenAI, Computer Vision, Deep Learning
                </p>
              </div>

              <div className="mt-6 text-yellow-400">
                <div>$ ps aux | grep interests</div>
                <div className="text-green-300 ml-4">
                  ├── Research in AI/ML<br/>
                  ├── Open Source Contributions<br/>
                  ├── Tech Innovation<br/>
                  └── Problem Solving
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-black border-2 border-green-400 rounded-lg p-8 text-center">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-6xl mb-6"
              >
                <pre className="text-cyan-400">
{`   ____
  |    |
  | AI |
  |____|
     |
   __|__`}
                </pre>
              </motion.div>
              
              <div className="text-green-400 text-sm">
                <div>🧠 Neural Processing Unit: ACTIVE</div>
                <div>⚡ Learning Rate: OPTIMAL</div>
                <div>🔥 Innovation Mode: ENABLED</div>
                <div>🚀 Deployment Status: READY</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
