import React from "react";
import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobileAlt,
  FaPalette,
  FaBrain,
  FaShieldAlt,
  FaNetworkWired,
  FaDownload // Import download icon
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs, 
  SiPython,
  SiFlask,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiFigma,
  SiAdobexd,
  SiBlender
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Functionality for the button (e.g., downloading a file)
  // const handleButtonClick = () => {
  //   const link = document.createElement("a");
  //   link.href = "/path-to-your-file/resume.pdf"; // Replace with your file path
  //   link.download = "resume.pdf";
  //   link.click();
  // };

  const skillCategories = [
    {
      name: "Frontend Wizardry",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-400" />, level: 98 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 90 },
        { name: "Redux", icon: <SiRedux className="text-purple-300" />, level: 85 },
        { name: "Three.js", icon: <TbBrandThreejs className="text-gray-300" />, level: 80 },
        { name: "Framer Motion", icon: <SiFramer className="text-blue-400" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 95 }
      ],
      color: "from-blue-500 to-cyan-500",
      glow: "hover:shadow-blue-500/30"
    },
    {
      name: "Backend Engineering",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 90 },
        { name: "Python", icon: <SiPython className="text-blue-400" />, level: 85 },
        { name: "Flask", icon: <SiFlask className="text-gray-300" />, level: 80 },
        { name: "Express", icon: <SiExpress className="text-gray-400" />, level: 85 },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 75 }
      ],
      color: "from-green-500 to-emerald-500",
      glow: "hover:shadow-green-500/30"
    },
    {
      name: "Database Systems",
      icon: <FaDatabase className="text-amber-500" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 80 },
        { name: "MariaDB", icon: <SiMariadb className="text-blue-400" />, level: 70 },
        { name: "SQLite", icon: <SiSqlite className="text-blue-300" />, level: 80 }
      ],
      color: "from-amber-500 to-orange-500",
      glow: "hover:shadow-amber-500/30"
    },
    {
      name: "DevOps & Cloud",
      icon: <FaNetworkWired className="text-red-500" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: 85 },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" />, level: 70 },
        { name: "CI/CD Pipelines", icon: <FaNetworkWired className="text-red-400" />, level: 80 },
        { name: "AWS Basics", icon: <FaNetworkWired className="text-amber-600" />, level: 75 }
      ],
      color: "from-red-500 to-pink-500",
      glow: "hover:shadow-red-500/30"
    },
    {
      name: "Security & RE",
      icon: <FaShieldAlt className="text-indigo-500" />,
      skills: [
        { name: "Reverse Engineering", icon: <FaShieldAlt className="text-purple-400" />, level: 75 },
        { name: "JWT/OAuth", icon: <FaShieldAlt className="text-blue-400" />, level: 80 },
        { name: "Secure Architecture", icon: <FaShieldAlt className="text-green-400" />, level: 85 }
      ],
      color: "from-indigo-500 to-violet-500",
      glow: "hover:shadow-indigo-500/30"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Glowing Particles */}
      <AnimatePresence>
        {inView && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"
                }`}
                style={{
                  width: Math.random() * 50 + 10,
                  height: Math.random() * 50 + 10,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [1, 1.2, 1],
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Title text1="My" text2="Expertise" />
          <motion.p
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.3 }}
          >
            Cutting-edge technologies I've mastered to create exceptional digital experiences
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, scale: inView ? 1 : 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`group relative ${category.glow} transition-all duration-500`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`} />

              {/* Skill Card */}
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 shadow-lg overflow-hidden transition-all duration-500 group-hover:border-gray-600">
                {/* Category Header */}
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ x: -20 }}
                  animate={{ x: inView ? 0 : -20 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <div className={`text-3xl mr-4 bg-gradient-to-br ${category.color} text-transparent bg-clip-text`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </motion.div>

                {/* Skills List */}
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.4 }}
                    >
                      <div className="text-2xl mr-3">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: inView ? skill.level / 100 : 0 }}
                            transition={{ delay: index * 0.15 + i * 0.05 + 0.5, type: "spring" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default Skills;