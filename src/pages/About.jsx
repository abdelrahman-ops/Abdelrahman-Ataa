import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaInfinity, FaTerminal, FaFileDownload } from 'react-icons/fa';
import Title from '../components/Title';
import SectionReveal from '../components/SectionReveal';
import { personalInfo } from '../data/profileData';

const coreSkills = [
    { name: "Frontend Architecture", icon: <FaCode />, level: "95%" },
    { name: "Backend Engineering", icon: <FaServer />, level: "85%" },
    { name: "System Design", icon: <FaTerminal />, level: "80%" },
    { name: "DevOps & CI/CD", icon: <FaInfinity />, level: "75%" }
];

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark'); // Fallback logic just in case it's not needed outside rendering cycle

    return (
        <SectionReveal>
            <motion.section 
                ref={ref}
                id="about" 
                className="py-12 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <Title text1="About" text2="Me" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Text Content */}
                        <motion.div 
                            className="w-full lg:w-1/2 space-y-6"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                                Initializing <span className="text-cyan-600 dark:text-cyan-400">Developer_Profile...</span>
                            </h3>
                            
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                <p className="mb-6">{personalInfo.aboutIntro}</p>
                                <p className="mb-6">{personalInfo.aboutDetail}</p>
                            </div>

                            {/* Resume Download CTA */}
                            <motion.div 
                                className="pt-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a 
                                    href={`/${personalInfo.cvFileName}`}
                                    download
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-cyan-500/40 transform hover:-translate-y-1"
                                >
                                    <FaFileDownload className="text-xl" />
                                    <span>Download Source Code (CV)</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Core Skills Cards */}
                        <motion.div 
                            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {coreSkills.map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-2xl hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors group relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Hover gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 dark:from-cyan-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-3xl text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-purple-500 transition-all">
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{skill.name}</h4>
                                        
                                        {/* Progress Bar Container */}
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-1 overflow-hidden">
                                            <motion.div 
                                                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1.5 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: inView ? skill.level : 0 }}
                                                transition={{ duration: 1, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                                            />
                                        </div>
                                        <div className="text-right text-xs font-mono text-cyan-600 dark:text-cyan-400">
                                            {skill.level}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </SectionReveal>
    );
};

export default About;