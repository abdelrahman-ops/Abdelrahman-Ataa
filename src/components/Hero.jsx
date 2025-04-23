import { motion } from 'framer-motion';
import '../css/hero.css';
import useWindowWidth from "../hooks/Small";

const HeroContent = ({ showImage }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 max-w-5xl mx-auto">
            {/* Futuristic Profile Image with Holographic Effect */}
            <motion.div
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className={`relative ${showImage ? 'w-72 h-72' : 'w-56 h-56'} md:w-80 md:h-80`}
            >
                <div className="home__img absolute inset-0 z-10"></div>
                <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -inset-2 border-2 border-cyan-500/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
            </motion.div>

            {/* Cyberpunk-inspired Text Content */}
            <div className="flex flex-col space-y-6 md:w-2/3 text-left">
                <motion.h1 
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter"
                >
                    <span className="text-gray-300">$ </span>MERN_DEVELOPER
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed font-light"
                >
                    <span className="text-cyan-400">//</span> Crafting high-performance web applications with cutting-edge technology. 
                    Specializing in seamless front-end experiences and scalable back-end architectures.
                </motion.p>

                {/* Holographic Contact Button */}
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 font-mono rounded-lg hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center space-x-2 self-start relative overflow-hidden group"
                >
                    <span>CONTACT_ME</span>
                    <motion.span 
                        className="text-lg"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut"
                        }}
                    >
                        &gt;
                    </motion.span>
                    <span className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300"></span>
                </motion.button>
            </div>
        </div>
    );
};

const Hero = () => {
    const show = useWindowWidth(768);

    return (
        <div className="relative z-10">
            {/* Floating tech particles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-500/10"
                        style={{
                            width: Math.random() * 6 + 2 + 'px',
                            height: Math.random() * 6 + 2 + 'px',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, Math.random() * 40 - 20],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>
            
            <HeroContent showImage={show} />
        </div>
    );
};

export default Hero;