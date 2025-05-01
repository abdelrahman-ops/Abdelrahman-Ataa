/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SideBar from '../components/SideBar';
import useWindowWidth from "../hooks/Small";
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
    const japaneseName = "アブデルラーマン アター";
    const englishName = "Abdelrahman Ataa";
    const [displayedName, setDisplayedName] = useState(japaneseName);
    const [showKanji, setShowKanji] = useState(true);
    const show = useWindowWidth(768);

    // **Animated Name Transition (Cyberpunk-style)**
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowKanji(false);
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

    return (
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
            {/* === FUTURISTIC BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* **Holographic Grid** */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-20"></div>

                {/* **Neon Glow Spots** */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[90px] animate-pulse"></div>

                {/* **Floating Binary Particles** */}
                {/* {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-400/10 font-mono text-xs"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '-20px'
                        }}
                        initial={{ y: -20 }}
                        animate={{ y: '100vh' }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {Math.random().toString(2).substring(2, 12)}
                    </motion.div>
                ))} */}
            </div>

            {/* === MAIN CONTENT === */}
            <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* **Cyber Name Header** */}
                <motion.div 
                    className="flex flex-col items-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative group">
                        {/* **Glowing Name Effect** */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md group-hover:opacity-50 transition-all duration-500"></div>
                        
                        <motion.h1 
                            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono tracking-tighter"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="block text-center">
                                {displayedName}
                            </span>
                        </motion.h1>
                        
                        {/* **Neon Divider** */}
                        <motion.div 
                            className="h-1 mt-6 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 w-3/4 mx-auto"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        />
                        
                        <motion.p 
                            className="mt-6 text-lg text-gray-400 text-center max-w-md font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="text-blue-400 font-medium">//</span> Digital architect of the future
                        </motion.p>
                    </div>
                </motion.div>

                {/* **Hero & Sidebar Layout** */}
                <motion.div 
                    className="flex flex-col lg:flex-row gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {/* **Sidebar (Responsive Order)** */}
                    <motion.div 
                        className={`${show ? 'lg:w-1/4 order-first' : 'lg:w-1/4 order-last'}`}
                        whileHover={{ y: -5 }}
                    >
                        <SideBar />
                    </motion.div>
                    
                    {/* **Hero Section (Floating Effect)** */}
                    <motion.div 
                        className={`${show ? 'lg:w-3/4' : 'lg:w-3/4'}`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        whileHover={{ y: -5 }}
                    >
                        <Hero />
                    </motion.div>
                </motion.div>

                {/* **Cyber Glow Footer** */}
                <motion.div 
                    className="h-px bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 my-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default Profile;