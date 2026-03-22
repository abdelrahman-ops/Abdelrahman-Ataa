import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaBook, FaBriefcase } from 'react-icons/fa';
import Title from '../components/Title';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';
import SectionReveal from '../components/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
    const [toggleState, setToggleState] = useState(1);

    return (
        <SectionReveal>
            <section id="journey" className="section-container">
                {/* Header */}
                <div className="section-header">
                    <Title text1="My" text2="Journey" />
                    <p className="section-subtitle">
                        The path to mastery is paved with challenges, failures, and breakthroughs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="flex bg-white/60 dark:bg-gray-900/70 backdrop-blur-md rounded-full p-1 border border-gray-200 dark:border-gray-800 shadow-md">
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
                </div>

                {/* Timeline */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={toggleState}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <TimelineList data={toggleState === 1 ? educationData : experienceData} />
                    </motion.div>
                </AnimatePresence>
            </section>
        </SectionReveal>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
            active
                ? 'bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
    >
        {icon} <span className="font-kosugi">{label}</span>
    </button>
);

const TimelineList = ({ data }) => {
    const listRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (lineRef.current) {
                gsap.fromTo(lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: listRef.current,
                            start: "top 70%",
                            end: "bottom 70%",
                            scrub: true
                        }
                    }
                );
            }

            const cards = gsap.utils.toArray('.timeline-card');
            cards.forEach((card) => {
                const isLeft = card.dataset.side === 'left';
                const xOffset = isLeft ? -60 : 60;

                gsap.fromTo(card,
                    { opacity: 0, x: xOffset },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, listRef);

        return () => ctx.revert();
    }, [data]);

    return (
        <div ref={listRef} className="relative z-10 space-y-8 py-8">
            {/* Scroll-drawn center line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2 hidden md:block rounded-full overflow-hidden">
                <div ref={lineRef} className="w-full h-full bg-gradient-to-b from-sakura-500 via-indigo-neon to-sakura-300 dark:from-neon-cyan dark:via-neon-pink dark:to-neon-cyan" />
            </div>

            {data.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

const TimelineCard = ({ item }) => {
    const isLeft = item.side === 'left';
    const borderColor = isLeft ? 'border-sakura-500/30 dark:border-neon-cyan/40' : 'border-indigo-neon/30 dark:border-neon-pink/40';
    const iconBg = isLeft
        ? 'bg-sakura-500/10 dark:bg-neon-cyan/10 text-sakura-500 dark:text-neon-cyan'
        : 'bg-indigo-neon/10 dark:bg-neon-pink/10 text-indigo-neon dark:text-neon-pink';
    const dotColor = isLeft ? 'bg-sakura-500 dark:bg-neon-cyan' : 'bg-indigo-neon dark:bg-neon-pink';
    const ItemIcon = item.Icon;

    return (
        <div
            data-side={item.side}
            className="timeline-card relative flex md:flex-row flex-col w-full group"
        >
            <div
                className={`flex-1 card-surface p-6 border ${borderColor} transition-all duration-500 hover:-translate-y-1 ${isLeft ? 'md:mr-10 xl:mr-12' : 'md:ml-10 xl:ml-12 md:order-last'}`}
            >
                <div className="flex items-start">
                    <div className={`text-xl p-3 rounded-xl mr-4 ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <ItemIcon />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold font-japanese mb-1 text-gray-800 dark:text-gray-100 group-hover:text-sakura-500 dark:group-hover:text-neon-cyan transition-colors">
                            {item.title}
                        </h3>
                        {Array.isArray(item.subtitle) ? (
                            <ul className="space-y-1 mb-3">
                                {item.subtitle.map((sub, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm font-medium">
                                        <span className={`mr-2 ${isLeft ? 'text-sakura-500 dark:text-neon-cyan' : 'text-indigo-neon dark:text-neon-pink'}`}>{">"}</span> {sub}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-base mb-2 text-gray-700 dark:text-gray-300 font-medium">{item.subtitle}</p>
                        )}
                        {item.period && (
                            <div className="flex items-center text-sm mb-3 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-3">
                                <FaCalendarAlt className={`mr-2 text-xs ${isLeft ? 'text-sakura-500' : 'text-indigo-neon'}`} /> {item.period}
                            </div>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                </div>
            </div>

            {/* Mobile dot */}
            <div className="md:hidden flex items-center mb-4 mt-2">
                <div className={`w-3 h-3 rounded-full ${dotColor}`} />
                <div className="h-0.5 w-12 bg-gray-300 dark:bg-gray-700" />
            </div>

            {/* Desktop center dot */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center z-20 group-hover:scale-125 transition-transform duration-300">
                <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-dark-bg ${dotColor}`} />
            </div>

            {/* Horizontal connector */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 z-0 ${isLeft ? 'right-1/2 w-10 xl:w-12 bg-gradient-to-l from-sakura-500/60 dark:from-neon-cyan/60 to-transparent' : 'left-1/2 w-10 xl:w-12 bg-gradient-to-r from-indigo-neon/60 dark:from-neon-pink/60 to-transparent'}`} />
        </div>
    );
};

export default Journey;
