import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaBook, FaBriefcase } from 'react-icons/fa';
import Title from '../components/Title';
import SectionReveal from '../components/SectionReveal';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';

const Journey = () => {
    const [toggleState, setToggleState] = useState(1);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionReveal>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            >
                <div className="relative max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <Title text1="My" text2="Journey" />
                        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
                            The path to mastery is paved with challenges, failures, and breakthroughs.
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex justify-center mb-10 relative z-10"
                    >
                        <div className="flex bg-white/60 dark:bg-gray-900/70 backdrop-blur-sm rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-none">
                            <TabButton
                                active={toggleState === 1}
                                onClick={() => setToggleState(1)}
                                icon={<FaBook />}
                                label="Education"
                            />
                            <TabButton
                                active={toggleState === 2}
                                onClick={() => setToggleState(2)}
                                icon={<FaBriefcase />}
                                label="Experience"
                            />
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative z-10">
                        <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block opacity-50 dark:opacity-100" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={toggleState}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {(toggleState === 1 ? educationData : experienceData).map((item, index) => (
                                    <TimelineCard key={item.id} item={item} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Decorative blurs */}
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500 opacity-5 dark:opacity-10 blur-3xl" />
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500 opacity-5 dark:opacity-10 blur-3xl" />
                </div>
            </motion.div>
        </SectionReveal>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
            active
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
    >
        {icon} {label}
    </button>
);

const TimelineCard = ({ item, index }) => {
    const isLeft = item.side === 'left';
    const accentDark = isLeft ? 'rgba(0,255,255,0.1)' : 'rgba(255,0,255,0.1)';
    const borderColor = isLeft ? 'border-cyan-400/30' : 'border-purple-400/30';
    const iconBg = isLeft
        ? 'bg-cyan-100/80 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-300'
        : 'bg-purple-100/80 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300';
    const dotColor = isLeft ? 'bg-cyan-400' : 'bg-purple-400';
    const ItemIcon = item.Icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] }}
            className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col w-full group`}
        >
            <div
                className={`flex-1 p-6 rounded-xl backdrop-blur-md bg-white/70 dark:bg-[rgba(10,10,30,0.7)] border ${borderColor} hover:scale-[1.02] transition-transform duration-300 shadow-md ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
                style={{
                    boxShadow: `0 4px 20px ${accentDark}`,
                }}
            >
                <div className="flex items-start">
                    <div className={`text-xl p-3 rounded-full mr-4 ${iconBg}`}>
                        <ItemIcon />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-800 dark:text-gray-100">
                            {item.title}
                        </h3>
                        {Array.isArray(item.subtitle) ? (
                            <ul className="space-y-1 mb-3">
                                {item.subtitle.map((sub, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                                        <span className={`mr-2 ${isLeft ? 'text-cyan-600 dark:text-cyan-400' : 'text-purple-600 dark:text-purple-400'}`}>{">"}</span> {sub}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-base mb-2 text-gray-700 dark:text-gray-300 font-medium">{item.subtitle}</p>
                        )}
                        {item.period && (
                            <div className="flex items-center text-sm mb-2 text-gray-500 dark:text-gray-500">
                                <FaCalendarAlt className="mr-2 text-xs" /> {item.period}
                            </div>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                </div>
            </div>

            {/* Timeline dots */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-8 h-8 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${dotColor}`} />
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center z-20">
                <div className={`w-4 h-4 rounded-full border-4 border-gray-50 dark:border-[#030014] ${dotColor}`} />
            </div>
        </motion.div>
    );
};

export default Journey;
