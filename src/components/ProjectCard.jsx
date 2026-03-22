/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaTerminal } from 'react-icons/fa';
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss,
    SiTypescript, SiNextdotjs, SiPrisma, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';

const techIcons = {
    react: { icon: <SiReact />, color: 'text-cyan-600 dark:text-cyan-400' },
    'node.js': { icon: <SiNodedotjs />, color: 'text-green-600 dark:text-green-500' },
    mongodb: { icon: <SiMongodb />, color: 'text-green-600 dark:text-green-400' },
    express: { icon: <SiExpress />, color: 'text-gray-600 dark:text-gray-400' },
    tailwindcss: { icon: <SiTailwindcss />, color: 'text-cyan-500 dark:text-cyan-300' },
    typescript: { icon: <SiTypescript />, color: 'text-blue-600 dark:text-blue-500' },
    'next.js': { icon: <SiNextdotjs />, color: 'text-gray-900 dark:text-white' },
    prisma: { icon: <SiPrisma />, color: 'text-teal-600 dark:text-teal-400' },
    javascript: { icon: <SiJavascript />, color: 'text-yellow-500 dark:text-yellow-400' },
    html: { icon: <SiHtml5 />, color: 'text-orange-600 dark:text-orange-500' },
    css: { icon: <SiCss3 />, color: 'text-blue-500 dark:text-blue-400' },
    default: { icon: <FaCode />, color: 'text-gray-500 dark:text-gray-400' },
};

const getTechIcon = (tech) => {
    const techKey = tech.toLowerCase().replace(/[^a-z.]/g, '');
    return techIcons[techKey] || techIcons.default;
};

const typeConfig = {
    frontend: { label: 'Frontend', icon: <FaCode />, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-400/10', border: 'border-cyan-300 dark:border-cyan-400/30' },
    backend: { label: 'Backend', icon: <FaServer />, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-400/10', border: 'border-green-300 dark:border-green-400/30' },
    fullstack: { label: 'Full Stack', icon: <FaTerminal />, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-400/10', border: 'border-purple-300 dark:border-purple-400/30' },
};

const ProjectCard = ({ project, index, reverse }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasLiveUrl = project.links.live && project.links.live !== '#';
    const type = typeConfig[project.type] || typeConfig.fullstack;

    return (
        <motion.div
            className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Preview Section */}
            <motion.div
                className={`relative w-full lg:w-1/2 h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 shadow-lg dark:shadow-none bg-white dark:bg-transparent`}
                initial={{ x: reverse ? 80 : -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
            >
                {hasLiveUrl ? (
                    <div className="relative w-full h-full group bg-gray-100 dark:bg-gray-900">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/40 dark:from-gray-900/80 via-transparent to-gray-900/10 dark:to-gray-900/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-10 dark:group-hover:opacity-30" />

                        <div className="w-full h-full overflow-hidden relative">
                            <iframe src={project.links.live} width="100%" height="500" frameborder="0" scrolling="yes"></iframe>
                        </div>

                        <motion.div
                            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md bg-white/80 dark:bg-green-500/20 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-400/30 z-20 shadow-sm"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" />
                            Live Preview
                        </motion.div>
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-50 dark:bg-gray-900 flex flex-col p-6 font-mono border-t-[24px] border-gray-200 dark:border-gray-800 relative">
                        {/* Terminal dots */}
                        <div className="absolute -top-[16px] left-4 flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500" />
                        </div>
                        <span className="absolute -top-[18px] w-full text-center text-[10px] text-gray-500 left-0 truncate px-16">{project.title.toLowerCase().replace(/\s+/g, '-')} - bash</span>

                        <div className="flex-1 text-xs md:text-sm space-y-3 text-gray-700 dark:text-gray-400 overflow-y-auto">
                            <p><span className="text-pink-500 dark:text-green-400">user@admin ~$</span> cat README.md</p>
                            <p className="text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-700">{project.description}</p>
                            <p className="mt-4"><span className="text-pink-500 dark:text-green-400">user@admin ~$</span> ls tech/</p>
                            <p className="text-cyan-600 dark:text-cyan-400 pl-4">{project.technologies.join('  ')}</p>
                            <p className="mt-4"><span className="text-pink-500 dark:text-green-400">user@admin ~$</span> npm run start:dev</p>
                            <p className="text-amber-500 dark:text-yellow-400 pl-4">Server running on port 3000...</p>
                            <p className="text-gray-400 dark:text-gray-500 pl-4 animate-pulse">Waiting for connections...</p>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                        {project.featured && (
                            <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                <FaStar className="text-white" />
                                <span className="text-white">Featured</span>
                            </span>
                        )}
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${type.bg} ${type.color} border ${type.border}`}>
                            {type.icon} {type.label}
                        </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2.5 mb-8">
                        {project.technologies.map((tech, i) => {
                            const { icon, color } = getTechIcon(tech);
                            return (
                                <motion.span
                                    key={i}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${color} bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-none`}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {icon} {tech}
                                </motion.span>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaGithub className="text-lg" />
                            Source Code
                        </motion.a>

                        {hasLiveUrl && (
                            <motion.a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accentColor} hover:opacity-90 text-white rounded-xl transition-all shadow-md text-sm font-semibold`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FaExternalLinkAlt className="text-sm" />
                                Live Demo
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;