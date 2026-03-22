/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaTerminal } from 'react-icons/fa';
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss,
    SiTypescript, SiNextdotjs, SiPrisma, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Tech icon map ── */
const techIcons = {
    react: { icon: <SiReact />, color: 'text-cyan-500 dark:text-cyan-400' },
    'node.js': { icon: <SiNodedotjs />, color: 'text-green-600 dark:text-green-400' },
    mongodb: { icon: <SiMongodb />, color: 'text-green-600 dark:text-green-400' },
    express: { icon: <SiExpress />, color: 'text-gray-600 dark:text-gray-400' },
    tailwindcss: { icon: <SiTailwindcss />, color: 'text-cyan-500 dark:text-cyan-300' },
    typescript: { icon: <SiTypescript />, color: 'text-blue-600 dark:text-blue-400' },
    'next.js': { icon: <SiNextdotjs />, color: 'text-gray-900 dark:text-white' },
    prisma: { icon: <SiPrisma />, color: 'text-teal-600 dark:text-teal-400' },
    javascript: { icon: <SiJavascript />, color: 'text-yellow-500 dark:text-yellow-400' },
    html: { icon: <SiHtml5 />, color: 'text-orange-600 dark:text-orange-500' },
    css: { icon: <SiCss3 />, color: 'text-blue-500 dark:text-blue-400' },
    default: { icon: <FaCode />, color: 'text-gray-500 dark:text-gray-400' },
};

const getTechIcon = (tech) => {
    const key = tech.toLowerCase().replace(/[^a-z.]/g, '');
    return techIcons[key] || techIcons.default;
};

const typeConfig = {
    frontend: { label: 'Frontend', icon: <FaCode />, color: 'text-sakura-500 dark:text-neon-cyan', bg: 'bg-sakura-300/10 dark:bg-neon-cyan/10', border: 'border-sakura-300/30 dark:border-neon-cyan/30' },
    backend: { label: 'Backend', icon: <FaServer />, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-400/10', border: 'border-green-300 dark:border-green-400/30' },
    fullstack: { label: 'Full Stack', icon: <FaTerminal />, color: 'text-indigo-neon dark:text-neon-pink', bg: 'bg-indigo-100 dark:bg-neon-pink/10', border: 'border-indigo-300 dark:border-neon-pink/30' },
};

/* ══════════════════════════════════════════
   ProjectCard  — real 3D mouse-follow tilt
   + cursor-following lighting
   ══════════════════════════════════════════ */

const ProjectCard = ({ project, index, reverse }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasLiveUrl = project.links.live && project.links.live !== '#';
    const type = typeConfig[project.type] || typeConfig.fullstack;

    const wrapperRef = useRef(null);
    const cardRef = useRef(null);
    const lightRef = useRef(null);
    const visualRef = useRef(null);

    // ── GSAP scroll parallax for preview ──
    useEffect(() => {
        let ctx = gsap.context(() => {
            if (visualRef.current) {
                gsap.fromTo(visualRef.current,
                    { y: -15 },
                    {
                        y: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        }, cardRef);
        return () => ctx.revert();
    }, []);

    // ── Mouse tilt + lighting ──
    const handleMouseMove = useCallback((e) => {
        const wrapper = wrapperRef.current;
        const card = cardRef.current;
        const light = lightRef.current;
        if (!wrapper || !card) return;

        // Calculate coordinates based on the static WRAPPER bounds
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Tilt relative to center
        const rotateY = ((x - centerX) / centerX) * 6;
        const rotateX = -((y - centerY) / centerY) * 4;

        gsap.to(card, {
            rotateY,
            rotateX,
            ease: 'power2.out',
            duration: 0.4,
        });

        // Cursor-following light gradient
        if (light) {
            gsap.to(light, {
                background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 50%)`,
                duration: 0.3,
            });
        }
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        if (cardRef.current) gsap.to(cardRef.current, { scale: 1.015, duration: 0.4, ease: 'power2.out' });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                rotateY: 0, rotateX: 0, scale: 1,
                ease: 'power3.out', duration: 0.6,
            });
        }
        if (lightRef.current) {
            gsap.to(lightRef.current, { opacity: 0, duration: 0.3 });
        }
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="w-full relative py-4 lg:py-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ perspective: 1500 }}
        >
            <div
                ref={cardRef}
                className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 items-center p-4 lg:p-6 rounded-2xl card-surface relative overflow-visible`}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            >
                {/* Cursor-following light overlay */}
                <div
                    ref={lightRef}
                    className="absolute inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300 rounded-2xl overflow-hidden"
                    style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* ── Preview Section (depth layer 1) ── */}
                <div className="w-full lg:w-1/2 relative z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                <div
                    ref={visualRef}
                    className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-dark-card"
                >
                    {hasLiveUrl ? (
                        <div className="relative w-full h-full group bg-gray-100 dark:bg-gray-900 overflow-hidden">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none group-hover:opacity-20 transition-opacity duration-500" />
                            
                            {/* Scaled iframe container to force desktop view (1280px wide scaled down) */}
                            <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left" style={{ transform: 'scale(0.25)' }}>
                                <iframe src={project.links.live} width="100%" height="100%" frameBorder="0" scrolling="yes" className="pointer-events-none group-hover:pointer-events-auto" />
                            </div>
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md bg-white/80 dark:bg-neon-cyan/10 text-sakura-500 dark:text-neon-cyan border border-sakura-300/30 dark:border-neon-cyan/30 z-20">
                                <div className="w-2 h-2 rounded-full bg-sakura-500 dark:bg-neon-cyan animate-pulse" />
                                Live Preview
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gray-50 dark:bg-dark-card flex flex-col p-6 font-mono border-t-[24px] border-gray-200 dark:border-gray-800 relative">
                            <div className="absolute -top-[16px] left-4 flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-sakura-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-bamboo-400 dark:bg-bamboo-neon" />
                            </div>
                            <span className="absolute -top-[18px] w-full text-center text-[10px] text-gray-500 left-0 truncate px-16">{project.title.toLowerCase().replace(/\s+/g, '-')} - root</span>

                            <div className="flex-1 text-xs md:text-sm space-y-3 text-gray-700 dark:text-gray-400 overflow-y-auto">
                                <p><span className="text-sakura-500 dark:text-neon-cyan">root@cyber ~$</span> cat README.md</p>
                                <p className="text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-sakura-300 dark:border-neon-cyan/50">{project.description}</p>
                                <p className="mt-4"><span className="text-sakura-500 dark:text-neon-cyan">root@cyber ~$</span> ls tech/</p>
                                <p className="text-indigo-neon dark:text-sakura-300 pl-4 font-kosugi">{project.technologies.join('  ')}</p>
                                <p className="mt-4"><span className="text-sakura-500 dark:text-neon-cyan">root@cyber ~$</span> ./start.sh</p>
                                <p className="text-bamboo-400 dark:text-bamboo-neon pl-4">System Initialized...</p>
                                <p className="text-gray-400 dark:text-gray-500 pl-4 animate-pulse">Awaiting input...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Content Section (depth layer 2 — closer to viewer) ── */}
            <div className="w-full lg:w-1/2 relative z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h2 className="text-2xl lg:text-3xl font-bold font-japanese text-gray-900 dark:text-white">{project.title}</h2>
                    {project.featured && (
                        <span className="px-2.5 py-0.5 bg-gradient-to-r from-sakura-500 to-indigo-neon text-white rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                            <FaStar /> Featured
                        </span>
                    )}
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${type.bg} ${type.color} border ${type.border}`}>
                        {type.icon} {type.label}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => {
                        const { icon, color } = getTechIcon(tech);
                        return (
                            <span
                                key={i}
                                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${color} bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 hover:border-sakura-500 dark:hover:border-neon-cyan transition-colors`}
                            >
                                {icon} {tech}
                            </span>
                        );
                    })}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 relative z-50 mt-2" style={{ transform: 'translateZ(20px)' }}>
                    {project.links.githubBackend ? (
                        <>
                            <motion.a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center flex-1 min-w-[130px] gap-2 px-4 py-2 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 rounded-xl transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:border-sakura-500 dark:hover:border-neon-cyan shadow-sm pointer-events-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="text-lg" />
                                Frontend
                            </motion.a>
                            <motion.a
                                href={project.links.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center flex-1 min-w-[130px] gap-2 px-4 py-2 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 rounded-xl transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:border-sakura-500 dark:hover:border-neon-cyan shadow-sm pointer-events-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaServer className="text-lg" />
                                Backend
                            </motion.a>
                        </>
                    ) : (
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center flex-1 min-w-[130px] gap-2 px-4 py-2 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 rounded-xl transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:border-sakura-500 dark:hover:border-neon-cyan shadow-sm pointer-events-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className="text-lg" />
                            Source Code
                        </motion.a>
                    )}

                    {hasLiveUrl && (
                        <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center flex-1 min-w-[130px] gap-2 px-4 py-2 bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink text-white rounded-xl transition-all text-sm font-semibold hover:opacity-90 shadow-sm pointer-events-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt className="text-sm" />
                            Live Demo
                        </motion.a>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectCard;