import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';

/**
 * Floating sakura petal theme toggle — fixed bottom-right.
 * GSAP drives the gentle floating + rotation loop.
 */
const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();
    const petalRef = useRef(null);

    useEffect(() => {
        const el = petalRef.current;
        if (!el) return;

        // Floating loop: gentle y oscillation + subtle rotation
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(el, {
            y: -8,
            rotation: 8,
            duration: 2.5,
            ease: 'sine.inOut',
        }).to(el, {
            y: 4,
            rotation: -5,
            duration: 2,
            ease: 'sine.inOut',
        });

        return () => tl.kill();
    }, []);

    return (
        <button
            ref={petalRef}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center
                       cursor-pointer outline-none border-none bg-transparent
                       transition-transform duration-300
                       hover:scale-125 active:scale-95
                       group"
            title={isDark ? 'Light Mode' : 'Dark Mode'}
        >
            {/* Sakura petal SVG */}
            <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,126,179,0.5)] dark:drop-shadow-[0_0_12px_rgba(0,255,255,0.5)] transition-all duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* 5-petal sakura flower */}
                <g transform="translate(20,20)" className="transition-colors duration-500">
                    {[0, 72, 144, 216, 288].map((angle) => (
                        <ellipse
                            key={angle}
                            cx="0"
                            cy="-10"
                            rx="5.5"
                            ry="10"
                            transform={`rotate(${angle})`}
                            className={`transition-all duration-500 ${
                                isDark
                                    ? 'fill-neon-cyan/80 stroke-neon-cyan/40'
                                    : 'fill-sakura-500/80 stroke-sakura-300/60'
                            }`}
                            strokeWidth="0.5"
                        />
                    ))}
                    {/* Center dot */}
                    <circle
                        r="3"
                        className={`transition-all duration-500 ${
                            isDark ? 'fill-neon-pink' : 'fill-sakura-300'
                        }`}
                    />
                </g>
            </svg>

            {/* Glow ring on hover */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-sakura-500/10 dark:bg-neon-cyan/10 blur-lg pointer-events-none" />
        </button>
    );
};

export default ThemeToggle;
