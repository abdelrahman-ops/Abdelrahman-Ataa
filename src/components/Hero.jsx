import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/pf.jpg';
import { personalInfo, socialAccounts } from '../data/profileData';

/* ═══════════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════════ */

const Hero = () => {
    const japaneseName = "アブデルラーマン アター";
    const englishName = "Abdelrahman Ataa";
    const [displayedName, setDisplayedName] = useState(japaneseName);

    // ── Cyberpunk character-morph animation (exact original logic) ──
    useEffect(() => {
        const timer = setTimeout(() => {
            const targetName = englishName;
            const currentNameArray = [...japaneseName];
            const targetNameArray = [...targetName];

            let index = 0;
            const interval = setInterval(() => {
                if (index < targetNameArray.length) {
                    if (index < currentNameArray.length) {
                        currentNameArray[index] = targetNameArray[index];
                    } else {
                        currentNameArray.push(targetNameArray[index]);
                    }
                    setDisplayedName(currentNameArray.join(""));
                    index++;
                } else {
                    if (currentNameArray.length > targetNameArray.length) {
                        currentNameArray.pop();
                        setDisplayedName(currentNameArray.join(""));
                    } else {
                        clearInterval(interval);
                    }
                }
            }, 100);

            return () => clearInterval(interval);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Split for two-line display
    const spaceIdx = displayedName.indexOf(' ');
    const line1 = spaceIdx > 0 ? displayedName.slice(0, spaceIdx) : displayedName;
    const line2 = spaceIdx > 0 ? displayedName.slice(spaceIdx + 1) : '';

    return (
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-16 min-h-[calc(100vh-100px)] py-10 xl:py-0 w-full">

            {/* ── Text Column ── */}
            <motion.div
                className="w-full xl:w-3/5 text-center xl:text-left relative z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >


                <div className="relative z-10">
                    {/* Subtitle */}
                    <h2 className="text-sakura-500 dark:text-neon-cyan font-kosugi text-sm sm:text-base mb-3 tracking-widest uppercase flex items-center justify-center xl:justify-start gap-2">
                        <span className="w-5 h-px bg-current hidden sm:block" />
                        &gt; {personalInfo.title}
                    </h2>

                    {/* Name — fixed height container so morph never causes layout shift */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 uppercase leading-none tracking-tight min-h-[2.4em]">
                        <span className="block text-gray-900 dark:text-white font-japanese">
                            {line1}
                        </span>
                        {line2 && (
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink mt-1 font-japanese">
                                {line2}
                            </span>
                        )}
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto xl:mx-0 font-kosugi leading-relaxed">
                        {personalInfo.heroDescription}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-5 mt-8">
                        <motion.a
                            href="#contact"
                            className="group relative px-8 py-3.5 border border-sakura-500 dark:border-neon-cyan overflow-hidden w-full sm:w-auto text-center transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,126,179,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-sakura-500 dark:bg-neon-cyan transition-[width] duration-300 ease-out z-0" />
                            <span className="relative z-10 font-kosugi font-bold tracking-widest uppercase text-sm text-sakura-500 dark:text-neon-cyan group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300">
                                Initialize Contact
                            </span>
                            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-sakura-500/50 dark:border-neon-cyan/50 pointer-events-none" />
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-sakura-500/50 dark:border-neon-cyan/50 pointer-events-none" />
                        </motion.a>

                        <motion.a
                            href={`/${personalInfo.cvFileName}`}
                            download
                            className="group inline-flex items-center gap-3 px-6 py-3.5 text-gray-600 dark:text-gray-300 hover:text-sakura-500 dark:hover:text-neon-pink font-kosugi text-sm uppercase tracking-widest transition-colors duration-300 w-full sm:w-auto justify-center"
                            whileHover={{ x: 4 }}
                        >
                            <FaFileDownload className="text-lg group-hover:animate-bounce" />
                            <span>Download CV</span>
                        </motion.a>
                    </div>

                    {/* Social links row */}
                    <div className="mt-8 flex items-center justify-center xl:justify-start gap-3">
                        {socialAccounts.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-sakura-500 dark:hover:text-neon-cyan hover:border-sakura-500 dark:hover:border-neon-cyan transition-all duration-300"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + i * 0.06 }}
                                    title={social.name}
                                >
                                    <Icon className="text-sm" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* ── Image Column ── */}
            <motion.div
                className="w-full xl:w-2/5 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
                    {/* Glowing Aura Behind Image */}
                    <div className="absolute inset-[-15%] rounded-full bg-gradient-to-tr from-sakura-500/20 to-indigo-neon/20 dark:from-neon-cyan/20 dark:to-neon-pink/20 blur-3xl animate-pulse mix-blend-screen pointer-events-none z-0" />
                    
                    {/* Continuous S-Shape Energy Flow */}
                    <div className="absolute inset-[-30%] pointer-events-none z-0 flex items-center justify-center opacity-70">
                        <motion.svg 
                            viewBox="0 0 200 200" 
                            className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(255,183,197,0.6)] dark:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        >
                            {/* Base faint track */}
                            <path 
                                d="M 100,10 C 190,10 190,100 100,100 C 10,100 10,190 100,190 C 190,190 190,100 100,100 C 10,100 10,10 100,10 Z"
                                fill="none"
                                className="stroke-sakura-500/10 dark:stroke-cyan-400/10"
                                strokeWidth="2"
                            />
                            {/* Moving bright energy stream */}
                            <path 
                                d="M 100,10 C 190,10 190,100 100,100 C 10,100 10,190 100,190 C 190,190 190,100 100,100 C 10,100 10,10 100,10 Z"
                                fill="none"
                                className="stroke-sakura-500 dark:stroke-neon-cyan"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="150 400"
                            >
                                <animate attributeName="stroke-dashoffset" from="550" to="0" dur="4s" repeatCount="indefinite" />
                            </path>
                        </motion.svg>
                    </div>

                    {/* Rotating rings */}
                    <div className="absolute inset-0 z-10 rounded-full border border-sakura-500/25 dark:border-neon-cyan/25 border-t-sakura-500/60 dark:border-t-neon-cyan/60 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-3 z-10 rounded-full border border-indigo-neon/15 dark:border-neon-pink/15 border-b-indigo-neon/50 dark:border-b-neon-pink/50 animate-[spin_12s_linear_infinite_reverse]" />

                    {/* Image frame */}
                    <div className="absolute inset-5 z-20 rounded-full overflow-hidden border-2 border-sakura-500/30 dark:border-neon-cyan/30 p-1 bg-white/5 dark:bg-gray-900/20 shadow-[0_0_30px_rgba(201,58,58,0.2)] dark:shadow-[0_0_30px_rgba(212,183,131,0.2)]">
                        <div className="w-full h-full rounded-full overflow-hidden relative group">
                            <div className="absolute inset-0 bg-sakura-300/10 dark:bg-cyan-400/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                            <div className="absolute top-0 left-0 w-full h-1 bg-sakura-500/30 dark:bg-cyan-400/30 pointer-events-none shadow-[0_0_10px_rgba(255,183,197,0.3)] dark:shadow-[0_0_10px_rgba(0,255,255,0.3)] animate-[window-scroll_4s_linear_infinite]" />
                            <img
                                src={profileImg}
                                alt={personalInfo.englishName}
                                className="w-full h-full object-cover grayscale-[0.25] dark:grayscale-0 dark:contrast-110 dark:brightness-90 group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <motion.span
                        className="absolute top-8 -right-4 px-2 py-0.5 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm border border-sakura-500/10 dark:border-neon-cyan/10 text-gray-500 dark:text-gray-400 font-mono text-[10px] tracking-widest rounded-sm"
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        SYS.ONLINE
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;