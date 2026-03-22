import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

/**
 * 5-Layer Pro-Level Japanese Background Stack:
 * 1. Base Color (Navy / Soft White) with warm subtle lighting
 * 2. Fog/Mist (GSAP animated wide blur gradients)
 * 3. Paper Grain Texture (SVG Noise)
 * 4. Minimal Grid Lines (Japanese Zen Order)
 * 5. Minimal Sakura (Only 6 tiny petals)
 */
const CyberBackground = () => {
    const { isDark } = useTheme();
    const fogRef1 = useRef(null);
    const fogRef2 = useRef(null);
    const petalsRef = useRef([]);

    useEffect(() => {
        // Slow cinematic horizontal fog drift
        const ctx = gsap.context(() => {
            // Fog floating animations
            gsap.to(fogRef1.current, {
                xPercent: 15,
                duration: 40,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            gsap.to(fogRef2.current, {
                xPercent: -15,
                duration: 55,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Scroll-Linked Infinite Sakura Animation (Continuous Wrap)
            petalsRef.current.forEach((petal, i) => {
                if (!petal) return;
                
                // Initial random scatter distribution across viewport
                gsap.set(petal, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight
                });

                // Huge arbitrary travel distance to be scrubbed by the scrollbar
                const distanceY = window.innerHeight * (Math.random() * 5 + 3); 
                const distanceX = window.innerWidth * (Math.random() * 3 + 2) * (Math.random() > 0.85 ? -0.3 : 1.2); 

                gsap.to(petal, {
                    y: `+=${distanceY}`,
                    x: `+=${distanceX}`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.5, 
                        invalidateOnRefresh: true, 
                    },
                    modifiers: {
                        // Infinite loop: if petal leaves screen, it wraps back around seamlessly
                        y: (y) => gsap.utils.wrap(-100, window.innerHeight + 100, parseFloat(y)) + "px",
                        x: (x) => gsap.utils.wrap(-100, window.innerWidth + 100, parseFloat(x)) + "px"
                    }
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-1000"
             style={{ backgroundColor: isDark ? '#0a0d16' : '#fcfbf9' }}>
             
            {/* 1. Base Ambient Lighting */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
                isDark 
                    ? 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,58,58,0.06)_0%,transparent_60%)]' 
                    : 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,58,58,0.04)_0%,transparent_60%)]'
            }`} />

            {/* 2. Fog / Mist Layer (Animated) */}
            <div 
                ref={fogRef1}
                className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%] blur-[100px] rounded-[100%] opacity-30 dark:opacity-40"
                style={{
                    background: isDark 
                        ? 'radial-gradient(circle, rgba(196,167,119,0.08) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(196,167,119,0.08) 0%, transparent 60%)'
                }}
            />
            <div 
                ref={fogRef2}
                className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[60%] blur-[100px] rounded-[100%] opacity-30 dark:opacity-40"
                style={{
                    background: isDark 
                        ? 'radial-gradient(circle, rgba(201,58,58,0.06) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(201,58,58,0.04) 0%, transparent 60%)'
                }}
            />

            {/* 3. Authentic Paper Texture (SVG Grain/Noise) */}
            <div 
                className="absolute inset-0 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    opacity: isDark ? 0.05 : 0.12
                }}
            />

            {/* 4. Zen Grid System (1px soft lines) */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px),
                        linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    opacity: 1
                }}
            />

            {/* Heavy Windy Sakura Wave */}
            {Array.from({ length: 80 }).map((_, i) => {
                const isForeground = Math.random() > 0.6;
                const sizeMult = isForeground ? (Math.random() * 1.5 + 1) : (Math.random() * 0.5 + 0.5);
                
                return (
                    <div
                        key={i}
                        ref={el => petalsRef.current[i] = el}
                        className="absolute top-0 left-0 will-change-transform z-10 pointer-events-none"
                        style={{ zIndex: isForeground ? 30 : 5 }}
                    >
                        <div 
                            style={{
                                borderRadius: '100% 0px 100% 0px',
                                width: (Math.random() * 5 + 5) * sizeMult + 'px',
                                height: (Math.random() * 7 + 5) * sizeMult + 'px',
                                opacity: isDark ? (isForeground ? Math.random() * 0.5 + 0.2 : 0.1) : (isForeground ? Math.random() * 0.6 + 0.4 : 0.2),
                                backgroundColor: isDark ? '#e84a4a' : '#ff7a93',
                                animation: `petal-flutter ${Math.random() * 4 + 3}s ease-in-out infinite`,
                                animationDelay: `-${Math.random() * 5}s`,
                            }}
                        />
                    </div>
                );
            })}

            <style jsx>{`
                @keyframes petal-flutter {
                    0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                    33% { transform: translate(30px, -15px) rotate(120deg) scale(0.9); }
                    66% { transform: translate(-20px, 15px) rotate(240deg) scale(1.1); }
                    100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default CyberBackground;
