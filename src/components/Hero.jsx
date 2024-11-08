import { motion } from 'framer-motion';
import '../css/hero.css';
import useWindowWidth from "../hooks/Small";
const Hero = () => {
    
    const show = useWindowWidth(768);
    
    return (
        <>
        {show ? (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 max-w-5xl mx-auto">
                    {/* Brief and Title */}
                    <div className="flex flex-col space-y-4 md:w-2/3 text-left">
                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-gray-900"
                        >
                            MERN Developer
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-gray-700 leading-relaxed"
                        >
                            Crafting intuitive and efficient web applications with modern technology. Passionate about front-end finesse and back-end robustness to deliver smooth, engaging experiences.
                        </motion.p>

                        {/* Contact Button */}
                        <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-4 px-6 py-2 bg-[#1b263b] text-white font-semibold 
                                        rounded-lg hover:bg-[#0d1b2a] focus:outline-none 
                                        focus:ring-2 focus:ring-[#003566] focus:ring-opacity-50 
                                        flex items-center space-x-2 self-start"
                                >
                                <span>Contact Me</span>
                                <i className="bx bxs-send bx-tada-hover text-lg"></i>
                            </motion.button>


                    </div>
                    
                    {/* Profile Image with Animated Border */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <div className="home__img w-80 h-80" ></div>
                    </motion.div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 max-w-5xl mx-auto">
                    {/* Brief and Title */}
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <div className="home__img w-80 h-80" ></div>
                    </motion.div>
                    
                    <div className="flex flex-col space-y-4 md:w-2/3 text-left">
                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-gray-900"
                        >
                            MERN Developer
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-gray-700 leading-relaxed"
                        >
                            Crafting intuitive and efficient web applications with modern technology. Passionate about front-end finesse and back-end robustness to deliver smooth, engaging experiences.
                        </motion.p>

                        {/* Contact Button */}
                        <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-4 px-6 py-2 bg-[#1b263b] text-white font-semibold 
                                        rounded-lg hover:bg-[#0d1b2a] focus:outline-none 
                                        focus:ring-2 focus:ring-[#003566] focus:ring-opacity-50 
                                        flex items-center space-x-2 self-start"
                                >
                                <span>Contact Me</span>
                                <i className="bx bxs-send bx-tada-hover text-lg"></i>
                            </motion.button>


                    </div>
                    
                    {/* Profile Image with Animated Border */}
                    
                </div>
            )
        }
        </>
    );
};

export default Hero;