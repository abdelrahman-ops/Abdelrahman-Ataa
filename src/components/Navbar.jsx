import { useState, useEffect } from 'react';
import '../css/nav.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-gray-900/50 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with glitch effect - constrained width */}
                    <div className="flex-shrink-0 flex items-center max-w-[180px] sm:max-w-none">
                        <a href="/" className="text-cyan-400 text-xl font-bold font-mono relative group truncate">
                            <span className="group-hover:text-purple-400 transition-colors duration-300">ABDELRAHMAN_ATA</span>
                            <span className="absolute left-0 top-0 text-cyan-400 opacity-0 group-hover:opacity-100 animate-glitch truncate">ABDELRAHMAN_ATA</span>
                            <span className="absolute left-0 top-0 text-purple-400 opacity-0 group-hover:opacity-100 animate-glitch2 truncate">ABDELRAHMAN_ATA</span>
                            <span className="text-cyan-400 ml-2">|</span>
                        </a>
                    </div>

                    {/* Desktop Navigation - with proper spacing */}
                    <div className="hidden md:block ml-4">
                        <ul className="flex items-center space-x-4 lg:space-x-8">
                            {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`} 
                                        className="text-gray-300 hover:text-cyan-400 font-mono text-sm lg:text-base relative group transition-colors duration-300 px-2 py-1"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-4/5 transition-all duration-300"></span>
                                        <span className="absolute -bottom-1 right-0 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">_</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button - properly aligned */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className={`w-6 flex flex-col gap-1.5 ${isOpen ? 'transform rotate-90' : ''} transition-transform duration-300`}>
                                <span className={`block h-0.5 w-full bg-cyan-400 ${isOpen ? 'transform rotate-45 translate-y-2' : ''} transition-all duration-300`}></span>
                                <span className={`block h-0.5 w-full bg-cyan-400 ${isOpen ? 'opacity-0' : ''} transition-all duration-300`}></span>
                                <span className={`block h-0.5 w-full bg-cyan-400 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''} transition-all duration-300`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - full width but properly contained */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-cyan-500/20">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                className="block text-gray-300 hover:text-cyan-400 py-2 px-4 font-mono text-sm hover:bg-gray-800/50 transition-colors duration-300 rounded mx-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-cyan-400 mr-2">$</span> {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;