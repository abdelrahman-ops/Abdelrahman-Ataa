import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from '../components/Title';
import { skillCategories } from '../data/skillsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollWidth - window.innerWidth + 40; // Add padding

            gsap.to(slider, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${scrollAmount}`,
                    invalidateOnRefresh: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-12 overflow-hidden relative bg-gray-50 dark:bg-[#030014]"
        >
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
                <div className="text-center" ref={inViewRef}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title text1="Tech" text2="Arsenal" />
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                            The tools and technologies I use to build scalable, high-performance digital experiences.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* GSAP Horizontal Scroll Container */}
            <div className="overflow-hidden w-full">
                <div 
                    ref={sliderRef}
                    className="flex gap-6 px-4 md:px-8 w-fit"
                >
                    {skillCategories.map((category, index) => {
                        const CategoryIcon = category.Icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ delay: index * 0.1 }}
                                className="skill-card w-[85vw] md:w-[400px] lg:w-[450px] shrink-0 bg-white/60 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors group shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden h-fit"
                            >
                                {/* Hover sweep effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 dark:via-cyan-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0"></div>

                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors group-hover:scale-110 duration-300">
                                        <CategoryIcon className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-6 relative z-10">
                                    {category.skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.Icon;
                                        return (
                                            <div key={skillIndex} className="relative">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                                            <SkillIcon />
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                                                </div>
                                                {/* Progress Bar */}
                                                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 relative"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                                        viewport={{ once: true }}
                                                    >
                                                        {/* Glowing tip */}
                                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-75"></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;