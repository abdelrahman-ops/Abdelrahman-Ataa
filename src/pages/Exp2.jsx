import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from "../components/Title";

const Exp2 = () => {
    const [toggleState, setToggleState] = useState(1);
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlowPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Cyberpunk color scheme
    const colors = {
        primary: '#00f0ff',
        secondary: '#ff00f0',
        accent: '#f0ff00',
        dark: '#0a0a20',
        darker: '#050510',
        text: '#e0e0ff',
        textSecondary: '#b0b0ff'
    };

    const educationData = [
        {
            id: 1,
            title: "Faculty Of Engineering",
            subtitle: "Mansoura University",
            period: "2021 - Present",
            icon: "🎓",
            side: "left",
            description: "Pursuing degree in Computer Engineering with focus on software development and systems architecture."
        },
        {
            id: 2,
            title: "Courses & Certifications",
            subtitle: [
                "CS50 - Harvard University",
                "Google Cybersecurity Certificate",
                "Samsung Innovation Campus - IoT"
            ],
            period: "",
            icon: "📚",
            side: "right",
            description: "Completed intensive programs to enhance technical skills and stay current with industry trends."
        },
        {
            id: 3,
            title: "Freelance Developer",
            subtitle: "Full-Stack Development",
            period: "2022 - Present",
            icon: "💻",
            side: "left",
            description: "Building responsive web applications, integrating APIs, and managing database systems."
        },
        {
            id: 4,
            title: "Awards & Achievements",
            subtitle: [
                "Samsung Innovation Campus Hackathon - 2023",
                "Ultimate V1.0 Contest Winner"
            ],
            period: "",
            icon: "🏆",
            side: "right",
            description: "Recognized for innovative solutions and technical excellence in competitive environments."
        }
    ];

    const experienceData = [
        {
            id: 1,
            title: "Freelance Full-Stack Developer",
            subtitle: "Self-Employed",
            period: "2022 - Present",
            icon: "🚀",
            side: "left",
            description: "Developed custom web solutions for clients using modern stacks like React, Node.js, and MongoDB."
        },
        {
            id: 2,
            title: "React.js Intern",
            subtitle: "Digital Egyptians Pioneers Initiative (DEPI)",
            period: "June 2023 - Aug 2023",
            icon: "⚛️",
            side: "right",
            description: "Contributed to frontend development projects and learned industry best practices in a team environment."
        },
        {
            id: 3,
            title: "IoT Intern",
            subtitle: "Samsung Innovation Campus",
            period: "Mar 2023 - May 2023",
            icon: "🌐",
            side: "left",
            description: "Designed and implemented IoT solutions including a smart fire detection system using Arduino and sensors."
        },
        {
            id: 4,
            title: "Backend Developer",
            subtitle: "E-commerce Project",
            period: "Jan 2024 - Feb 2024",
            icon: "🛒",
            side: "right",
            description: "Led development of RESTful APIs and database architecture for a custom e-commerce platform."
        }
    ];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${colors.darker} 0%, ${colors.dark} 100%)` }}
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-grid-animation"></div>
            </div>
            
            {/* Glow effect */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, ${colors.primary}20, transparent 80%)`
                }}
            />
            
            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <Title text1="My" text2="Journey" />
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"></div>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
                        The path to mastery is paved with challenges, failures, and breakthroughs.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex justify-center mb-12 relative z-10"
                >
                    <div 
                        className="flex bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-1 border border-cyan-400 border-opacity-30 shadow-lg"
                        onMouseMove={handleMouseMove}
                    >
                        <button
                            onClick={() => toggleTab(1)}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center ${toggleState === 1 ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'text-cyan-300 hover:text-white'}`}
                        >
                            <span className="mr-2">📚</span> Education
                        </button>
                        <button
                            onClick={() => toggleTab(2)}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center ${toggleState === 2 ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'text-purple-300 hover:text-white'}`}
                        >
                            <span className="mr-2">💼</span> Experience
                        </button>
                    </div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div 
                        className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"
                        style={{ top: '1.5rem', bottom: '1.5rem' }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={toggleState}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {(toggleState === 1 ? educationData : experienceData).map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        delay: 0.1 * index,
                                        duration: 0.6,
                                        ease: [0.16, 0.77, 0.47, 0.97]
                                    }}
                                    className={`relative flex ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col w-full`}
                                >
                                    {/* Content Card */}
                                    <div 
                                        className={`flex-1 p-6 rounded-xl backdrop-blur-sm border border-opacity-20 mb-4 md:mb-0 ${item.side === 'left' ? 'md:mr-8 border-cyan-400' : 'md:ml-8 border-purple-400'}`}
                                        style={{ 
                                            background: 'rgba(10, 10, 30, 0.7)',
                                            boxShadow: `0 0 20px ${item.side === 'left' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 0, 240, 0.1)'}`
                                        }}
                                    >
                                        <div className="flex items-start">
                                            <div 
                                                className={`text-2xl p-3 rounded-full mr-4 ${item.side === 'left' ? 'bg-cyan-900 bg-opacity-40 text-cyan-300' : 'bg-purple-900 bg-opacity-40 text-purple-300'}`}
                                            >
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 
                                                    className="text-xl md:text-2xl font-bold mb-1"
                                                    style={{ 
                                                        color: colors.text,
                                                        textShadow: `0 0 8px ${item.side === 'left' ? colors.primary : colors.secondary}40`
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>
                                                {Array.isArray(item.subtitle) ? (
                                                    <ul className="space-y-2 mb-3">
                                                        {item.subtitle.map((sub, i) => (
                                                            <li key={i} className="flex items-start" style={{ color: colors.textSecondary }}>
                                                                <span className="mr-2">•</span> {sub}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-lg mb-3" style={{ color: colors.textSecondary }}>
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                                {item.period && (
                                                    <div className="flex items-center text-sm mb-3" style={{ color: colors.textSecondary }}>
                                                        <span className="mr-2">⏳</span> {item.period}
                                                    </div>
                                                )}
                                                <p className="text-sm md:text-base opacity-80" style={{ color: colors.textSecondary }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline dot (mobile) */}
                                    <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-8 h-8 flex items-center justify-center">
                                        <div 
                                            className={`w-4 h-4 rounded-full ${item.side === 'left' ? 'bg-cyan-400' : 'bg-purple-400'}`}
                                            style={{ boxShadow: `0 0 10px ${item.side === 'left' ? colors.primary : colors.secondary}` }}
                                        />
                                    </div>

                                    {/* Timeline dot (desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center">
                                        <div 
                                            className={`w-5 h-5 rounded-full ${item.side === 'left' ? 'bg-cyan-400' : 'bg-purple-400'}`}
                                            style={{ boxShadow: `0 0 15px ${item.side === 'left' ? colors.primary : colors.secondary}` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Cyberpunk decorative elements */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
            </div>

            {/* CSS for grid animation */}
            <style>{`
                .bg-grid-animation {
                    background-image: 
                        linear-gradient(to right, ${colors.primary}20 1px, transparent 1px),
                        linear-gradient(to bottom, ${colors.primary}20 1px, transparent 1px);
                    background-size: 40px 40px;
                    animation: gridMove 60s linear infinite;
                }
                
                @keyframes gridMove {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 1000px 1000px;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Exp2;