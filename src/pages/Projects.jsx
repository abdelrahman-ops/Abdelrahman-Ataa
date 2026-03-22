import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaServer, FaDesktop, FaTerminal } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import Title from '../components/Title';
import SectionReveal from '../components/SectionReveal';

const filters = [
    { key: 'all', label: 'All', icon: null },
    { key: 'frontend', label: 'Frontend', icon: <FaDesktop /> },
    { key: 'backend', label: 'Backend', icon: <FaServer /> },
    { key: 'fullstack', label: 'Full Stack', icon: <FaTerminal /> },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.type === activeFilter);

    return (
        <SectionReveal>
            <div className="overflow-x-hidden pt-12">
                <div className="relative z-10 container mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <Title text1="My" text2="Projects" />

                        <motion.p
                            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Cutting-edge digital experiences powered by modern technologies
                        </motion.p>

                        {/* Filter buttons */}
                        <motion.div
                            className="flex justify-center gap-3 mt-6 flex-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {filters.map((filter) => (
                                <motion.button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                        activeFilter === filter.key
                                            ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700/50'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {filter.icon}
                                    {filter.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-16">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} reverse={index % 2 === 0} />
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg font-mono">No projects found for "{activeFilter}"</p>
                        </div>
                    )}
                </div>
            </div>
        </SectionReveal>
    );
};

export default Projects;