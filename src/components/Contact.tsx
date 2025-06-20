
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Rocket } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Create the Future Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss AI solutions or collaboration opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            
            <form onSubmit={handleSubmit} className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-cyan-400 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Your amazing name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cyan-400 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyan-400 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Let's talk about AI, ML, or anything exciting!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Launch Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* AI Avatar */}
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-6xl shadow-2xl mb-6"
              >
                🚀
              </motion.div>
              <p className="text-gray-300 text-lg">
                Always excited to discuss new opportunities and innovative AI projects!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Github, label: "GitHub", href: "#", color: "from-gray-600 to-gray-800" },
                  { icon: Linkedin, label: "LinkedIn", href: "#", color: "from-blue-600 to-blue-800" },
                  { icon: MessageCircle, label: "WhatsApp", href: "#", color: "from-green-500 to-green-700" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-lg text-white hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-semibold text-lg">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-900/50 border border-gray-700 rounded-xl"
            >
              <p className="text-cyan-400 text-lg italic">
                "The future belongs to those who understand that AI is not just technology – it's the art of making machines think creatively."
              </p>
              <p className="text-gray-400 mt-2">- Ani</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
