import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/pf.jpg';
import GlitchText from './GlitchText';
import { personalInfo } from '../data/profileData';

const Hero = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-10 xl:py-0 w-full">
            {/* Left Content */}
            <motion.div
                className="w-full xl:w-3/5 text-center xl:text-left z-10 mb-16 xl:mb-0 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Decorative Japanese Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute -top-10 -left-10 text-[120px] font-japanese font-black text-gray-200 dark:text-gray-800 tracking-widest whitespace-nowrap pointer-events-none select-none writing-mode-vertical"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    {personalInfo.japaneseName}
                </motion.div>

                <div className="relative">
                    <h2 className="text-cyan-600 dark:text-cyan-400 font-mono text-sm sm:text-base md:text-xl mb-4 tracking-widest uppercase">
                        &gt; {personalInfo.title}
                    </h2>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
                        <GlitchText text={personalInfo.englishName.split(' ')[0]} /><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
                            {personalInfo.englishName.substring(personalInfo.englishName.indexOf(' ') + 1)}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto xl:mx-0 font-light leading-relaxed">
                        {personalInfo.heroDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6">
                        {/* Contact Button */}
                        <motion.a
                            href="#contact"
                            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-cyan-500 w-full sm:w-auto text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 w-full h-full bg-cyan-500 group-hover:w-full transition-all duration-300 ease-out -z-10 w-0"></span>
                            <span className="relative text-cyan-600 dark:text-cyan-400 group-hover:text-white font-mono font-bold tracking-widest uppercase text-sm z-10 transition-colors">
                                Initialize Contact
                            </span>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
                        </motion.a>

                        {/* Resume Button */}
                        <motion.a
                            href={`/${personalInfo.cvFileName}`}
                            download
                            className="group flex items-center gap-3 px-6 py-4 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-widest transition-colors w-full sm:w-auto justify-center"
                            whileHover={{ x: 5 }}
                        >
                            <FaFileDownload className="text-xl group-hover:animate-bounce" />
                            <span>Download.exe</span>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Right Image/Hologram Container */}
            <motion.div
                className="w-full xl:w-2/5 flex justify-center items-center relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
                    {/* Glowing rotating rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-4 rounded-full border border-purple-500/30 border-b-purple-400 animate-[spin_12s_linear_infinite_reverse]"></div>

                    {/* The Image Wrapper */}
                    <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-cyan-500/50 p-2 backdrop-blur-sm bg-white/10 dark:bg-gray-900/40">
                        <div className="w-full h-full rounded-full overflow-hidden relative group">
                            {/* Hologram scanline effect */}
                            <div className="absolute inset-0 bg-blue-500/20 dark:bg-cyan-400/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400/50 z-20 pointer-events-none shadow-[0_0_15px_#0ff] animate-[window-scroll_4s_linear_infinite]"></div>

                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover filter grayscale sepia-[0.3] dark:sepia-0 dark:contrast-125 dark:brightness-90 group-hover:grayscale-0 group-hover:filter-none transition-all duration-700"
                            />
                        </div>
                    </div>

                    {/* Floating decorative elements */}
                    <motion.div
                        className="absolute top-10 -right-5 px-3 py-1 bg-white/80 dark:bg-gray-900/80 border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 font-mono text-xs backdrop-blur-md rounded-sm"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        SYS.ONLINE
                    </motion.div>
                    <motion.div
                        className="absolute bottom-20 -left-10 px-3 py-1 border border-purple-500/50 text-purple-600 dark:text-purple-400 font-mono text-xs backdrop-blur-md rounded-sm"
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        LVL.99
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;