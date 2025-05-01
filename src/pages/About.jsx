import React from "react";
import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaBrain, FaDownload } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = "../assets/Abdelrahman Ataa Mohamed CV.pdf";
    link.download = "Abdelrahman Ataa Mohamed CV.pdf";
    link.click();
  };

  // Tech skills data
  const skills = [
    { name: "Frontend Architecture", icon: <FaCode className="text-blue-400" />, delay: 0.4 },
    { name: "Backend Systems", icon: <FaServer className="text-cyan-400" />, delay: 0.5 },
    { name: "Mobile Development", icon: <FaMobile className="text-purple-400" />, delay: 0.6 },
    { name: "AI Integration", icon: <FaBrain className="text-amber-400" />, delay: 0.7 },
    { name: "Blockchain Tech", icon: <SiBlockchaindotcom className="text-green-400" />, delay: 0.8 }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-[#0a0a0a] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Holographic grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50],
              opacity: [0.1, 0.8, 0.1],
              x: [0, (Math.random() - 0.5) * 20]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <Title text1="About" text2="Me" />
          <motion.p
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-blue-400">//</span> Engineering digital experiences at the intersection of innovation and precision
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Introduction */}
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md rounded-xl border border-gray-800 p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Who I Am
            </h3>
            <div className="space-y-4">
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.6 }}
              >
                I'm a <span className="font-medium text-blue-400">Full-Stack Developer</span> specializing in building high-performance applications with cutting-edge technologies. My work focuses on creating seamless bridges between elegant interfaces and robust backend architectures.
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                With expertise spanning the entire development stack, I engineer solutions that are <span className="font-medium text-purple-400">scalable</span>, <span className="font-medium text-cyan-400">efficient</span>, and <span className="font-medium text-amber-400">user-centric</span>.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md rounded-xl border border-gray-800 p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Core Expertise
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                  transition={{ delay: skill.delay }}
                >
                  <div className="text-xl mr-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={handleButtonClick}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-medium cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-3">Download Resume</span>
              <motion.span
                animate={{ 
                  x: [0, 4, 0],
                  transition: { 
                    repeat: Infinity,
                    duration: 2 
                  } 
                }}
              >
                <FaDownload />
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;