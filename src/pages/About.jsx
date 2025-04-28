import React from "react";
import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaBrain, FaRocket, FaDownload } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });


  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = "../assets/Abdelrahman Ataa Mohamed CV.pdf";
    link.download = "Abdelrahman Ataa Mohamed CV.pdf";
    link.click();
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Binary Particles */}
      <AnimatePresence>
        {inView && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400/10 font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  y: [0, -100],
                  x: [0, (Math.random() - 0.5) * 100]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              >
                {Math.random().toString(2).substring(2, 10)}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Title text1="About" text2="Me" />
          <motion.p
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.3 }}
          >
            Crafting digital experiences that blend innovation with functionality
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Introduction */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who Am I?</h3>
            <motion.p
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              I'm a <span className="font-bold text-blue-400">Full-Stack Developer</span> with a passion for creating immersive digital experiences. With expertise across the entire development stack, I bridge the gap between beautiful interfaces and robust backend systems.
            </motion.p>
            <motion.p
              className="text-gray-400 leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.8 }}
            >
              My approach combines <span className="font-bold text-purple-400">cutting-edge technologies</span> with user-centered design principles to deliver solutions that are both powerful and intuitive.
            </motion.p>
          </motion.div>

          {/* Right Column: Skills Overview */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">My Expertise</h3>
            <ul className="space-y-4">
              {[
                { name: "Frontend Development", icon: <FaCode className="text-blue-500" /> },
                { name: "Backend Engineering", icon: <FaServer className="text-green-500" /> },
                { name: "Mobile App Development", icon: <FaMobile className="text-purple-500" /> },
                { name: "AI & Machine Learning", icon: <FaBrain className="text-amber-500" /> }
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl mr-3">{skill.icon}</div>
                  <span className="text-gray-400">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={handleButtonClick}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-medium cursor-pointer group hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Download My Resume</span>
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                transition: { 
                  repeat: Infinity,
                  duration: 2 
                } 
              }}
            >
              <FaDownload />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;