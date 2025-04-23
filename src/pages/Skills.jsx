import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobile, 
  FaCloud, 
  FaRobot,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiTensorflow
} from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiReact className="text-gray-800 dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiReact className="text-cyan-400" /> }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Backend",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express", icon: <SiJavascript className="text-gray-400" /> },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Flask", icon: <SiPython className="text-gray-300" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-purple-500" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
        { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
        { name: "SQLite", icon: <FaDatabase className="text-blue-300" /> },
        { name: "Redis", icon: <FaDatabase className="text-red-600" /> }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "DevOps",
      icon: <FaCloud className="text-amber-500" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <FaCloud className="text-blue-400" /> },
        { name: "AWS", icon: <FaCloud className="text-amber-600" /> },
        { name: "CI/CD", icon: <FaCloud className="text-red-500" /> },
        { name: "Terraform", icon: <FaCloud className="text-purple-500" /> }
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "AI/ML",
      icon: <FaRobot className="text-pink-500" />,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "PyTorch", icon: <FaRobot className="text-red-500" /> },
        { name: "NLP", icon: <FaRobot className="text-blue-400" /> },
        { name: "Computer Vision", icon: <FaRobot className="text-green-400" /> },
        { name: "Data Analysis", icon: <FaRobot className="text-purple-400" /> }
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Security",
      icon: <FaShieldAlt className="text-red-500" />,
      skills: [
        { name: "OAuth", icon: <FaShieldAlt className="text-blue-400" /> },
        { name: "JWT", icon: <FaShieldAlt className="text-purple-400" /> },
        { name: "Pen Testing", icon: <FaShieldAlt className="text-red-400" /> },
        { name: "Crypto", icon: <FaShieldAlt className="text-yellow-400" /> },
        { name: "Firewalls", icon: <FaShieldAlt className="text-orange-400" /> }
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <Title text1="My" text2="Skills" />
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.2 }}
          >
            Technologies I've mastered to build exceptional digital experiences
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity`} />

              {/* Skill Card */}
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.li
                        key={skill.name}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                        transition={{ delay: 0.3 + index * 0.05 + i * 0.03 }}
                      >
                        <span className="text-lg mr-3">
                          {skill.icon}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <motion.div
                          className="ml-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                          style={{ width: '60px' }}
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: inView ? 1 : 0 }}
                          transition={{ delay: 0.4 + index * 0.05 + i * 0.03, duration: 0.5 }}
                        >
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${80 + Math.random() * 20}%` }}
                          />
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <AnimatePresence>
          {inView && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-500/10 dark:bg-purple-500/10"
                  style={{
                    width: Math.random() * 80 + 20,
                    height: Math.random() * 80 + 20,
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
                    duration: Math.random() * 15 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 2
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;