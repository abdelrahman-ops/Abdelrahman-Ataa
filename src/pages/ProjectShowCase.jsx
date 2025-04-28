import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaDesktop } from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiDocker
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects] = useState([
    {
      id: 1,
      title: "Neon Nexus",
      description: "A decentralized social platform with Web3 integration and real-time communication features.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "MongoDB"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
      links: {
        github: "#",
        live: "#"
      },
      featured: true,
      accentColor: "from-purple-500 to-pink-600",
      type: "fullstack",
      status: "Live"
    },
    {
      id: 2,
      title: "Cyber Dashboard",
      description: "Analytics dashboard with real-time data visualization and AI-powered insights.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2342&auto=format&fit=crop",
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "from-cyan-400 to-blue-500",
      type: "frontend",
      status: "Live"
    },
    {
      id: 3,
      title: "API Sentinel",
      description: "High-performance backend service with automated monitoring and scaling capabilities.",
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2340&auto=format&fit=crop",
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "from-amber-500 to-red-500",
      type: "backend",
      status: "In Development"
    }
  ]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // Filter projects
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.type === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsIDAsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Neon border effect */}
      <div className="absolute inset-0 border-4 border-transparent pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
          style={{
            boxShadow: "0 0 10px rgba(155, 89, 255, 0.7), 0 0 20px rgba(155, 89, 255, 0.5)"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"
          style={{
            boxShadow: "0 0 10px rgba(155, 89, 255, 0.7), 0 0 20px rgba(155, 89, 255, 0.5)"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"
          style={{
            boxShadow: "0 0 10px rgba(89, 255, 255, 0.7), 0 0 20px rgba(89, 255, 255, 0.5)"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-purple-500 to-cyan-500"
          style={{
            boxShadow: "0 0 10px rgba(155, 89, 255, 0.7), 0 0 20px rgba(155, 89, 255, 0.5)"
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20 pointer-events-none"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 2
          }}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <header className="pt-12 px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PROJECT SHOWCASE
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cutting-edge digital experiences powered by the latest technologies
          </motion.p>

          {/* Filter buttons */}
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {['all', 'frontend', 'backend'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'frontend' && <FaDesktop />}
                {filter === 'backend' && <FaServer />}
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </header>

        {/* Projects scroll container */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto snap-y snap-mandatory mt-12 pb-12 px-8"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="h-full flex flex-col items-center gap-12">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <CyberpunkProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  scrollProgress={scrollYProgress}
                />
              ))
            ) : (
              <motion.div 
                className="h-full flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-2xl text-gray-300 mb-4">No projects found</h3>
                <motion.button
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show All Projects
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CyberpunkProjectCard = ({ project, index, scrollProgress }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techIcons = {
    react: { icon: <SiReact />, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    node: { icon: <SiNodedotjs />, color: "text-green-500", bg: "bg-green-500/10" },
    mongodb: { icon: <SiMongodb />, color: "text-green-400", bg: "bg-green-400/10" },
    express: { icon: <SiExpress />, color: "text-gray-400", bg: "bg-gray-400/10" },
    tailwind: { icon: <SiTailwindcss />, color: "text-cyan-300", bg: "bg-cyan-300/10" },
    typescript: { icon: <SiTypescript />, color: "text-blue-500", bg: "bg-blue-500/10" },
    firebase: { icon: <SiFirebase />, color: "text-amber-500", bg: "bg-amber-500/10" },
    graphql: { icon: <SiGraphql />, color: "text-pink-500", bg: "bg-pink-500/10" },
    framer: { icon: <TbBrandFramerMotion />, color: "text-purple-500", bg: "bg-purple-500/10" },
    'next.js': { icon: <SiNextdotjs />, color: "text-white", bg: "bg-white/10" },
    redux: { icon: <SiRedux />, color: "text-purple-300", bg: "bg-purple-300/10" },
    javascript: { icon: <SiJavascript />, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    python: { icon: <SiPython />, color: "text-blue-400", bg: "bg-blue-400/10" },
    django: { icon: <SiDjango />, color: "text-green-600", bg: "bg-green-600/10" },
    postgresql: { icon: <SiPostgresql />, color: "text-blue-300", bg: "bg-blue-300/10" },
    docker: { icon: <SiDocker />, color: "text-blue-400", bg: "bg-blue-400/10" },
    default: { icon: <FaCode />, color: "text-gray-400", bg: "bg-gray-400/10" }
  };

  const getTechIcon = (tech) => {
    const techKey = tech.toLowerCase().replace(/[^a-z]/g, '');
    return techIcons[techKey] || techIcons.default;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const y = useTransform(scrollProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-4xl h-[80vh] snap-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ y }}
    >
      {/* Interactive light effect */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(155, 89, 255, 0.1) 0%, rgba(155, 89, 255, 0) 70%)`
        }}
      />
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
        style={{
          boxShadow: isHovered 
            ? `0 0 15px ${project.accentColor.split(' ')[1]}, 0 0 30px ${project.accentColor.split(' ')[1]}/30`
            : `0 0 10px ${project.accentColor.split(' ')[1]}/20`
        }}
      />

      {/* Main Card */}
      <div className={`relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl transition-all duration-500 ${isHovered ? 'border-cyan-400/30' : ''}`}>
        {/* Holographic header */}
        <div className={`relative h-2 ${project.accentColor.split(' ')[0]} opacity-80`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
        
        {/* Image with parallax effect */}
        <motion.div 
          className="relative h-1/2 overflow-hidden"
          animate={{
            scale: isHovered ? 1.03 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <motion.div 
              className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 backdrop-blur-sm border border-amber-400/50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaStar className="text-white" /> 
              <span className="text-white">Featured</span>
            </motion.div>
          )}

          {/* Status indicator */}
          <motion.div 
            className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm border ${
              project.status === 'Live' 
                ? 'bg-green-500/20 text-green-400 border-green-400/30'
                : 'bg-amber-500/20 text-amber-400 border-amber-400/30'
            }`}
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              project.status === 'Live' ? 'bg-green-400' : 'bg-amber-400'
            }`} />
            {project.status}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-8 h-1/2 flex flex-col">
          <motion.h3 
            className="text-3xl font-bold text-white mb-2 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
            <motion.span 
              className="ml-3 text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              {project.type === 'frontend' ? 'FRONTEND' : project.type === 'backend' ? 'BACKEND' : 'FULLSTACK'}
            </motion.span>
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.technologies.map((tech, i) => {
              const { icon, color, bg } = getTechIcon(tech);
              return (
                <motion.span
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${color} ${bg} backdrop-blur-sm border border-gray-700`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    boxShadow: `0 4px 15px ${color.split('text-')[1]}/30`
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                  {tech}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-4 mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all border border-gray-600 text-gray-200 text-lg"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub className="text-gray-300 text-xl" />
              <span>View Code</span>
            </motion.a>
            
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r ${project.accentColor} text-white rounded-lg transition-all border border-transparent text-lg`}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 4px 20px ${project.accentColor.split(' ')[1]}/50`
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>Live Demo</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Binary code matrix effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              {Math.random().toString(2).substring(2, 10)}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;