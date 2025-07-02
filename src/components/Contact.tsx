
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
const SERVICE_ID = 'service_jmft816';       // <-- put your real ID here
const TEMPLATE_ID = 'template_cqvdczr';     // <-- put your real ID here
const PUBLIC_KEY = 'g4YtbRI-B8JNMSpOr'; 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,      // formData should have name, email, message keys
      PUBLIC_KEY
    ).then(
      (result) => {
        alert("Message sent! I'll contact you soon.");
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        alert('Failed to send. Please try again later.');
        console.error(error);
      }
    );
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 border-t-2 border-green-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            [ ESTABLISH_CONNECTION ]
          </h2>
          <div className="text-green-300">
            ani@localhost:~$ netstat -a | grep LISTEN
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black border-2 border-cyan-400 rounded-lg p-6">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-600 pb-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-cyan-400">message_sender.sh</div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-400 text-sm mb-2 font-mono">
                    $ echo "Enter your name:"
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-gray-500"
                    placeholder="> John Doe"
                  />
                </div>

                <div>
                  <label className="block text-green-400 text-sm mb-2 font-mono">
                    $ echo "Enter email address:"
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-gray-500"
                    placeholder="> john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-green-400 text-sm mb-2 font-mono">
                    $ cat message.txt
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-gray-500 resize-none"
                    placeholder="> Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-green-400 text-black font-bold rounded border-2 border-green-400 hover:bg-transparent hover:text-green-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  $ ./send_message.sh
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* System Status & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* ASCII Robot */}
            <div className="bg-black border-2 border-green-400 rounded-lg p-6 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-green-400 mb-4"
              >
                <pre className="text-sm">
{`    ┌───┐
    │ ◉ ◉ │
    │  ∀  │ 
    └─┬─┬─┘
      │ │
    ┌─┴─┴─┐
    │READY│
    └─────┘`}
                </pre>
              </motion.div>
              <p className="text-green-300 text-sm">
                System Status: ONLINE<br/>
                Response Time: &lt; 24hrs<br/>
                Collaboration Mode: ACTIVE
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-400 text-center">
                [ SOCIAL_NETWORKS ]
              </h3>
              
              <div className="space-y-3">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    href: "https://github.com/itzani18",  // <-- your GitHub
                    prefix: "git clone"
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/aniket-choudhary-b05163232/", // <-- your LinkedIn
                    prefix: "curl -X GET"
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    href: "https://wa.me/919340907174",   // <-- your WhatsApp (use wa.me link with country code, no + or leading zeros)
                    prefix: "ping"
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 p-3 bg-black border border-cyan-400 rounded text-green-400 hover:border-green-400 hover:text-green-300 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                    <div className="font-mono text-sm">
                      <div className="text-yellow-400">$ {social.prefix}</div>
                      <div>{social.label.toLowerCase()}.com/ani</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote Terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-yellow-400 rounded-lg p-4"
            >
              <div className="text-yellow-400 text-xs mb-2">$ fortune | cowsay</div>
              <div className="text-green-300 text-sm font-mono">
                "Building the future, one algorithm at a time. 🚀"
                <div className="text-right text-xs text-gray-500 mt-2">- Ani.exe</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
