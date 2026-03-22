import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { skillCategories } from '../data/skillsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '../components/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollWidth - window.innerWidth + 40;

            gsap.to(slider, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "bottom bottom",
                    pin: true,
                    scrub: 1,
                    end: () => `+=${scrollAmount}`,
                    invalidateOnRefresh: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-10 md:py-16 overflow-hidden relative flex flex-col justify-end min-h-[100svh] pb-10"
        >
            <div className="section-container mb-4 md:mb-8 mt-auto">
                <div className="section-header">
                    <Title text1="Tech" text2="Arsenal" />
                    <p className="section-subtitle">
                        The tools and technologies I use to build scalable, high-performance digital experiences.
                    </p>
                </div>
            </div>

            {/* GSAP Horizontal Scroll */}
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                                viewport={{ once: true }}
                                className="card-surface w-[85vw] md:w-[400px] lg:w-[450px] shrink-0 p-6 md:p-8 relative overflow-hidden h-fit max-h-[55vh] md:max-h-[65vh] overflow-y-auto custom-scrollbar"
                            >
                                {/* Hover sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sakura-500/5 dark:via-neon-cyan/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-sakura-500/10 dark:bg-neon-cyan/10 flex items-center justify-center text-sakura-500 dark:text-neon-cyan transition-colors group-hover:scale-110 duration-300">
                                        <CategoryIcon className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white font-kosugi">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="space-y-5 relative z-10">
                                    {category.skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.Icon;
                                        return (
                                            <div key={skillIndex}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500 dark:text-gray-400">
                                                            <SkillIcon />
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-mono text-sakura-500 dark:text-neon-cyan">{skill.level}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink relative"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-75" />
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