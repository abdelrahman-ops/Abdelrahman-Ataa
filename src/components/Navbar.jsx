import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['HOME', 'ABOUT', 'SKILLS', 'JOURNEY', 'PROJECTS', 'CONTACT'];

    return (
        <motion.nav 
            className={`fixed w-full z-50 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b' : 'bg-transparent border-transparent'} border-gray-200 dark:border-gray-800/50 transition-all duration-300`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with glow effect */}
                    <motion.a 
                        href="#home" 
                        className="text-sakura-500 dark:text-neon-cyan text-lg font-kosugi relative group font-bold tracking-widest"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="relative z-10 transition-all duration-300 group-hover:text-sakura-500 dark:group-hover:neon-text-cyan">ABDELRAHMAN_ATAA</span>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sakura-500 dark:bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_8px_#ffb7c5] dark:shadow-[0_0_10px_#00ffff]"></span>
                        <span className="absolute inset-0 bg-sakura-500/10 dark:bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-neon-cyan text-sm font-kosugi group transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                <span className="relative z-10 transition-all duration-300 group-hover:text-sakura-500 dark:group-hover:neon-text-cyan">{item}</span>
                                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-sakura-500 dark:bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_5px_#ffb7c5] dark:shadow-[0_0_8px_#00ffff]"></span>
                                <span className="absolute inset-0 bg-sakura-500/10 dark:bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-4">
                        
                        {/* Menu button */}
                        <motion.button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-gray-600 dark:text-gray-300 relative group"
                            whileTap={{ scale: 0.9 }}
                            aria-label="Menu"
                        >
                            <div className="w-6 flex flex-col gap-1.5 items-end">
                                <motion.span 
                                    className="h-0.5 bg-sakura-500 dark:bg-neon-cyan transition-all shadow-[0_0_5px_#ffb7c5] dark:shadow-[0_0_5px_#00ffff]"
                                    animate={{
                                        width: mobileOpen ? '100%' : '100%',
                                        transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                                    }}
                                />
                                <motion.span 
                                    className="h-0.5 bg-sakura-500 dark:bg-neon-cyan transition-all shadow-[0_0_5px_#ffb7c5] dark:shadow-[0_0_5px_#00ffff]"
                                    animate={{
                                        width: mobileOpen ? '0%' : '80%',
                                        opacity: mobileOpen ? 0 : 1
                                    }}
                                />
                                <motion.span 
                                    className="h-0.5 bg-sakura-500 dark:bg-neon-cyan transition-all shadow-[0_0_5px_#ffb7c5] dark:shadow-[0_0_5px_#00ffff]"
                                    animate={{
                                        width: mobileOpen ? '100%' : '60%',
                                        transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                                    }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-sakura-300/30 dark:border-neon-cyan/20 overflow-hidden shadow-[0_4px_20px_rgba(255,183,197,0.2)] dark:shadow-[0_4px_20px_rgba(0,255,255,0.1)]"
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="flex items-center py-3 text-gray-700 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-neon-cyan text-sm font-kosugi border-b border-gray-100 dark:border-gray-800/50 last:border-0 transition-colors group"
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="w-2 h-2 bg-sakura-500 dark:bg-neon-cyan rounded-full mr-3 group-hover:shadow-[0_0_8px_#ffb7c5] dark:group-hover:shadow-[0_0_8px_#00ffff]"></span>
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;