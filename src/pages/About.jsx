import { motion } from 'framer-motion';
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
    return (
        <SectionReveal>
            <section id="about" className="section-container">
                <div className="section-header">
                    <Title text1="About" text2="Me" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 font-kosugi">
                            Initializing <span className="text-sakura-500 dark:text-neon-cyan">Developer_Profile...</span>
                        </h3>

                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed font-kosugi space-y-4">
                            <p>{personalInfo.aboutIntro}</p>
                            <p>{personalInfo.aboutDetail}</p>
                        </div>

                        {/* Resume Download */}
                        <div className="pt-4">
                            <a
                                href={`/${personalInfo.cvFileName}`}
                                download
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink text-white rounded-xl font-bold font-kosugi transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <FaFileDownload className="text-xl" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Core Skills Cards */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {coreSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="card-surface p-6 group relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="relative z-10">
                                    <div className="text-3xl text-sakura-500 dark:text-neon-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3 font-kosugi">{skill.name}</h4>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-1 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink h-1.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <div className="text-right text-xs font-mono text-sakura-500 dark:text-neon-cyan">
                                        {skill.level}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
};

export default About;