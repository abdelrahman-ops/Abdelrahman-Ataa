/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaBrain, FaRocket } from "react-icons/fa";
import { SiTypescript, SiReact, SiNodedotjs, SiGraphql } from "react-icons/si";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    { name: "Frontend", icon: <FaCode />, tech: ["React", "Next.js", "TypeScript"], color: "text-blue-500" },
    { name: "Backend", icon: <FaServer />, tech: ["Node.js", "Express", "GraphQL"], color: "text-green-500" },
    { name: "Mobile", icon: <FaMobile />, tech: ["React Native", "Flutter"], color: "text-purple-500" },
    { name: "AI/ML", icon: <FaBrain />, tech: ["TensorFlow", "NLP"], color: "text-amber-500" }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <Title text1="About" text2="Me" />
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.2 }}
          >
            Crafting digital experiences that blend innovation with functionality
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

          <div className="p-8 md:p-12">
            {/* Introduction */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p 
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                I'm a <span className="font-bold text-blue-500 dark:text-blue-400">Full-Stack Developer</span> with a passion for creating immersive digital experiences. With expertise across the entire development stack, I bridge the gap between beautiful interfaces and robust backend systems.
              </motion.p>
              
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.6 }}
              >
                My approach combines <span className="font-bold text-purple-500 dark:text-purple-400">cutting-edge technologies</span> with user-centered design principles to deliver solutions that are both powerful and intuitive.
              </motion.p>
            </motion.div>


            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-medium cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">Let's Build Something Amazing</span>
                <motion.span
                  animate={{ 
                    x: [0, 5, 0],
                    transition: { 
                      repeat: Infinity,
                      duration: 2 
                    } 
                  }}
                >
                  <FaRocket />
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <AnimatePresence>
            {inView && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-500/10 dark:bg-purple-500/10"
                    style={{
                      width: Math.random() * 100 + 50,
                      height: Math.random() * 100 + 50,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      y: [0, Math.random() * 100 - 50],
                      x: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 2
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;