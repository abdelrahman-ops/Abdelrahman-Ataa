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

    // Animated name transition (only runs once on mount)
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
        }, 1500); // Initial delay before transition starts

        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Futuristic grid background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            {/* Floating tech circles */}
            <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            
            {/* Binary code rain effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-400/20 text-xs font-mono"
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
                ))}
            </div>

            <div className="container mx-auto pt-12 px-4 max-w-6xl relative z-10">
                {/* Futuristic Name Section */}
                <motion.div 
                    className="flex flex-col items-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative group">
                        {/* Neon name effect */}
                        <div className="absolute inset-0 rounded-lg bg-cyan-500/10 blur-md group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                        
                        <motion.h1 
                            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-mono relative tracking-tighter"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="block text-center">
                                {displayedName}
                            </span>
                        </motion.h1>
                        
                        {/* Cyber divider */}
                        <motion.div 
                            className="h-1 mt-6 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-purple-500/0 w-3/4 mx-auto"
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
                            <span className="text-cyan-400 font-medium">//</span> Digital portfolio of a future builder
                        </motion.p>
                    </div>
                </motion.div>

                {/* Main Content Area */}
                <motion.div 
                    className="flex flex-col lg:flex-row gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {/* Sidebar - Always shown but order changes */}
                    <motion.div 
                        className={`${show ? 'lg:w-1/4 order-first' : 'lg:w-1/4 order-last'}`}
                        whileHover={{ 
                            y: -5
                        }}
                    >
                        <SideBar />
                    </motion.div>
                    
                    {/* Hero Section */}
                    <motion.div 
                        className={`${show ? 'lg:w-3/4' : 'lg:w-3/4'}`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <Hero />
                    </motion.div>
                </motion.div>

                {/* Cyber footer */}
                <motion.div 
                    className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-purple-500/0 my-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default Profile;