import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaServer, FaDesktop, FaTerminal } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import ProjectPocket from '../components/ProjectPocket';
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
    const [isExpanded, setIsExpanded] = useState(false); // Track if pocket is open

    const handleFilterChange = (key) => {
        setActiveFilter(key);
        setIsExpanded(false); // Collapse pocket when changing categories
    };

    const filteredProjects = projects.filter((p) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'frontend') return p.type === 'frontend' || p.type === 'fullstack';
        if (activeFilter === 'backend') return p.type === 'backend' || p.type === 'fullstack';
        return p.type === activeFilter;
    });

    // Initial load: 4 projects. If expanded: all.
    const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);
    const remainingCount = filteredProjects.length - visibleProjects.length;

    return (
        <SectionReveal>
            <section id="projects" className="section-container">
                <div className="section-header">
                    <Title text1="My" text2="Projects" />
                    <p className="section-subtitle">
                        Cutting-edge digital experiences powered by modern technologies
                    </p>

                    {/* Filter buttons */}
                    <div className="flex justify-center gap-3 mt-6 flex-wrap">
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.key}
                                onClick={() => handleFilterChange(filter.key)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeFilter === filter.key
                                        ? 'bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink text-white shadow-lg'
                                        : 'bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700/50'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {filter.icon}
                                {filter.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-16">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} reverse={index % 2 === 0} />
                    ))}
                    
                    {/* The 3D Glass Pocket for remaining projects */}
                    {!isExpanded && remainingCount > 0 && (
                        <ProjectPocket 
                            remainingCount={remainingCount} 
                            onClick={() => setIsExpanded(true)} 
                        />
                    )}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg font-mono">No projects found for "{activeFilter}"</p>
                    </div>
                )}
            </section>
        </SectionReveal>
    );
};

export default Projects;