/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiExpress, 
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
    SiGraphql
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const techIcons = {
    react: { icon: <SiReact />, color: "text-cyan-400" },
    node: { icon: <SiNodedotjs />, color: "text-green-500" },
    mongodb: { icon: <SiMongodb />, color: "text-green-400" },
    express: { icon: <SiExpress />, color: "text-gray-400" },
    tailwind: { icon: <SiTailwindcss />, color: "text-cyan-300" },
    typescript: { icon: <SiTypescript />, color: "text-blue-500" },
    firebase: { icon: <SiFirebase />, color: "text-amber-500" },
    graphql: { icon: <SiGraphql />, color: "text-pink-500" },
    framer: { icon: <TbBrandFramerMotion />, color: "text-purple-500" },
    default: { icon: <FaCode />, color: "text-gray-400" }
};

const ProjectCard = ({ project, index }) => {
    const getTechIcon = (tech) => {
        const techKey = tech.toLowerCase().replace(/[^a-z]/g, '');
        return techIcons[techKey] || techIcons.default;
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -10 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
        }}
        className="relative group perspective-1000"
        >
        {/* 3D Tilt Effect Container */}
        <motion.div
            whileHover={{
            rotateY: 5,
            rotateX: 2,
            transition: { duration: 0.5 }
            }}
            className="transform-style-preserve-3d"
        >
            {/* Glow Border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
            
            {/* Main Card */}
            <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl transform-style-preserve-3d">
            
            {/* Image with Parallax Effect */}
            <motion.div 
                className="relative h-56 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <FaStar className="inline mr-1" /> Featured
                </motion.div>
                )}
            </motion.div>

            {/* Content */}
            <div className="p-6">
                <motion.h3 
                className="text-xl font-bold text-gray-800 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                {project.title}
                </motion.h3>
                
                <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                >
                {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div 
                className="flex flex-wrap gap-2 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                {project.technologies.map((tech, i) => {
                    const { icon, color } = getTechIcon(tech);
                    return (
                    <motion.span
                        key={i}
                        className={`flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-xs ${color} shadow-sm`}
                        whileHover={{ 
                        y: -3,
                        scale: 1.05,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
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
                className="flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                >
                <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <FaGithub />
                    Code
                </motion.a>
                
                <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.accentColor} text-white rounded-lg text-sm transition-all`}
                    whileHover={{ 
                    scale: 1.03,
                    boxShadow: `0 4px 15px ${project.accentColor.split(' ')[1]}/30`
                    }}
                    whileTap={{ scale: 0.97 }}
                >
                    <FaExternalLinkAlt />
                    Live Demo
                </motion.a>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10"
                    style={{
                    width: Math.random() * 40 + 20,
                    height: Math.random() * 40 + 20,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 2
                    }}
                />
                ))}
            </motion.div>
            </div>
        </motion.div>
        </motion.div>
    );
};

export default ProjectCard;