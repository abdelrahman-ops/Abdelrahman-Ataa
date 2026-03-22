import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '' }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
        }, 5000 + Math.random() * 5000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div 
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
        >
            {/* Main Text */}
            <span className="relative z-10 text-gray-900 dark:text-white transition-colors duration-500">{text}</span>

            {/* Glitch Layers - Only visible when glitching */}
            {isGlitching && (
                <>
                    <motion.span 
                        className="absolute top-0 left-0 -ml-[2px] text-cyan-500 opacity-70 z-0 mix-blend-screen"
                        animate={{ x: [-2, 2, -1, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror' }}
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
                    >
                        {text}
                    </motion.span>
                    <motion.span 
                        className="absolute top-0 left-0 ml-[2px] text-purple-500 opacity-70 z-0 mix-blend-screen"
                        animate={{ x: [2, -2, 1, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror' }}
                        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
};

export default GlitchText;
