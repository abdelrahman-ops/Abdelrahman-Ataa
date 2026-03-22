import { motion } from 'framer-motion';
import { FaFolderOpen } from 'react-icons/fa';

const ProjectPocket = ({ remainingCount, onClick }) => {
    return (
        <div className="w-full flex justify-center py-12 relative z-10">
            <motion.div
                className="relative w-full max-w-lg h-64 md:h-72 cursor-pointer group"
                onClick={onClick}
                whileHover="hover"
                initial="initial"
            >
                {/* Glow behind the pocket */}
                <div className="absolute inset-0 bg-sakura-500/10 dark:bg-neon-cyan/5 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Back of the pocket (Darker/solid to define the interior) */}
                <div className="absolute bottom-0 w-full h-48 md:h-56 bg-gray-100/50 dark:bg-black/40 rounded-3xl border border-gray-200/50 dark:border-white/5 shadow-inner" />

                {/* The Mini Cards Inside */}
                {Array.from({ length: Math.min(4, remainingCount) }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-8 left-1/2 w-[70%] h-36 md:h-40 bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex flex-col p-4 origin-bottom"
                        style={{
                            x: '-50%',
                            zIndex: 10 - i,
                        }}
                        variants={{
                            initial: { 
                                y: i * 12, 
                                scale: 1 - i * 0.06,
                                rotate: (i % 2 === 0 ? 1 : -1) * i * 2
                            },
                            hover: { 
                                y: -30 + i * 15, 
                                scale: 1 - i * 0.04,
                                rotate: (i % 2 === 0 ? 1 : -1) * i * 4,
                                transition: { type: 'spring', stiffness: 400, damping: 25, delay: i * 0.04 } 
                            }
                        }}
                    >
                        {/* Fake UI inside the mini cards */}
                        <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-800 rounded-full mb-4" />
                        <div className="space-y-2 opacity-60">
                            <div className="w-full h-2 bg-gradient-to-r from-sakura-500/50 to-indigo-neon/50 dark:from-neon-cyan/50 dark:to-neon-pink/50 rounded-full" />
                            <div className="w-5/6 h-2 bg-gray-100 dark:bg-gray-800 rounded-full" />
                            <div className="w-4/6 h-2 bg-gray-100 dark:bg-gray-800 rounded-full" />
                        </div>
                    </motion.div>
                ))}

                {/* Front Glass Pocket Layer (Highly transparent to see cards through it) */}
                <div className="absolute bottom-0 w-full h-40 md:h-48 backdrop-blur-xl bg-white/30 dark:bg-[#0a0d16]/60 rounded-3xl border-t border-l border-r border-white/50 dark:border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center z-20 overflow-hidden transition-all duration-300 group-hover:bg-white/40 dark:group-hover:bg-[#0a0d16]/50">
                    
                    {/* Glass Diagonal Shine */}
                    <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-[glass-shine_1.5s_ease-in-out_infinite]" />
                    
                    <motion.div 
                        className="text-center relative z-10 drop-shadow-sm"
                        variants={{
                            initial: { y: 0, scale: 1 },
                            hover: { y: -5, scale: 1.05 }
                        }}
                    >
                        <FaFolderOpen className="text-4xl mx-auto mb-3 text-sakura-500 dark:text-cyan-400 drop-shadow-[0_0_10px_rgba(255,126,179,0.5)] dark:drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]" />
                        <p className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base font-kosugi tracking-widest uppercase">
                            Unpack {remainingCount} More Projects
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">
                            Click to expand payload
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes glass-shine {
                    0% { left: -100%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { left: 200%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default ProjectPocket;
