/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiExpress, 
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiPrisma,
    SiJavascript,
    SiHtml5,
    SiCss3
} from "react-icons/si";

const techIcons = {
    react: { icon: <SiReact />, color: "text-cyan-400" },
    'node.js': { icon: <SiNodedotjs />, color: "text-green-500" },
    mongodb: { icon: <SiMongodb />, color: "text-green-400" },
    express: { icon: <SiExpress />, color: "text-gray-400" },
    tailwindcss: { icon: <SiTailwindcss />, color: "text-cyan-300" },
    typescript: { icon: <SiTypescript />, color: "text-blue-500" },
    'next.js': { icon: <SiNextdotjs />, color: "text-white" },
    prisma: { icon: <SiPrisma />, color: "text-teal-400" },
    javascript: { icon: <SiJavascript />, color: "text-yellow-400" },
    html: { icon: <SiHtml5 />, color: "text-orange-500" },
    css: { icon: <SiCss3 />, color: "text-blue-400" },
    default: { icon: <FaCode />, color: "text-gray-400" }
};

const ProjectCard = ({ project, index, reverse }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getTechIcon = (tech) => {
        const techKey = tech.toLowerCase().replace(/[^a-z]/g, '');
        return techIcons[techKey] || techIcons.default;
    };

    return (
        <motion.div 
            className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
        {/* Image */}
        <motion.div 
            className={`relative w-full lg:w-1/2 h-80 lg:h-96 rounded-xl overflow-hidden ${reverse ? 'lg:ml-8' : 'lg:mr-8'}`}
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <motion.img
            src={project.image[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
                scale: isHovered ? 1.05 : 1,
                x: isHovered ? (reverse ? -20 : 20) : 0
            }}
            transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Status badge */}
            <motion.div 
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm bg-green-500/20 text-green-400 border border-green-400/30`}
            animate={{
                opacity: [0.8, 1, 0.8]
            }}
            transition={{
                duration: 2,
                repeat: Infinity
            }}
            >
            <div className="w-2 h-2 rounded-full bg-green-400" />
                Live
            </motion.div>
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            >
            <div className="flex items-center gap-3 mb-4">
                <motion.h2 
                className="text-3xl font-bold text-white"
                whileHover={{ 
                    backgroundSize: '100% 2px',
                    backgroundPosition: '0 100%'
                }}
                >
                {project.title}
                </motion.h2>
                {project.featured && (
                <motion.span 
                    className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-xs font-bold flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <FaStar className="text-white" /> 
                    <span className="text-white">Featured</span>
                </motion.span>
                )}
            </div>

            <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
                {project.description}
            </motion.p>

            {/* Tech stack */}
            <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                {project.technologies.slice(0, 8).map((tech, i) => {
                const { icon, color } = getTechIcon(tech);
                return (
                    <motion.span
                    key={i}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${color} bg-gray-800/50 backdrop-blur-sm border border-gray-700`}
                    whileHover={{ 
                        y: -3,
                        scale: 1.05,
                        boxShadow: `0 4px 15px ${color.split('text-')[1] || 'rgba(0,0,0,0.2)'}`
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                    {icon}
                    {tech}
                    </motion.span>
                );
                })}
                {project.technologies.length > 8 && (
                <motion.span
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-sm text-gray-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                    whileHover={{ y: -3, scale: 1.05 }}
                >
                    +{project.technologies.length - 8} more
                </motion.span>
                )}
            </motion.div>

            {/* Action buttons */}
            <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
            >
                <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-700 text-gray-200"
                    whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.97 }}
                >
                <FaGithub className="text-xl" />
                    <span>View Code</span>
                </motion.a>
                
                <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r ${project.accentColor} text-white rounded-lg transition-all`}
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
            </motion.div>
        </div>
        </motion.div>
    );
};

export default ProjectCard;