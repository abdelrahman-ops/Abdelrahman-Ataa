import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-powered scroll reveal wrapper for consistent section entrance animations.
 * Replaces the inconsistent Framer Motion useInView patterns across pages.
 */
const SectionReveal = ({
    children,
    className = '',
    direction = 'up',   // 'up' | 'down' | 'left' | 'right'
    distance = 60,
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    ...props
}) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const dirMap = {
            up: { y: distance, x: 0 },
            down: { y: -distance, x: 0 },
            left: { x: distance, y: 0 },
            right: { x: -distance, y: 0 },
        };
        const from = dirMap[direction] || dirMap.up;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, ...from },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [direction, distance, duration, delay]);

    return (
        <div ref={sectionRef} className={className} {...props}>
            {children}
        </div>
    );
};

export default SectionReveal;
