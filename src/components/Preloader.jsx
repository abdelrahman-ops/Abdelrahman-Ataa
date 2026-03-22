import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Fast Japanese-style preloader — kanji brush stroke reveal.
 * Total duration: ~1.2s so it completes well before the name morph (1.5s delay).
 */
const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const kanjiRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // 1. Kanji fades in + scales
        tl.fromTo(kanjiRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
        )
        // 2. Brush line sweeps across
        .fromTo(lineRef.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.3, ease: 'power2.inOut' },
            '-=0.1'
        )
        // 3. Brief hold, then fade everything out
        .to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            delay: 0.15,
        })
        // 4. Remove from layout
        .set(containerRef.current, { display: 'none' });

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            style={{ backgroundColor: '#0a0a0a' }}
        >
            {/* Kanji character — 始 (hajime = "begin") */}
            <div className="relative flex flex-col items-center gap-4">
                <h1
                    ref={kanjiRef}
                    className="text-6xl md:text-8xl font-japanese font-black text-white/90 tracking-widest select-none"
                >
                    始
                </h1>

                {/* Brush stroke line */}
                <div className="w-32 md:w-48 h-[2px] overflow-hidden">
                    <div
                        ref={lineRef}
                        className="w-full h-full bg-gradient-to-r from-sakura-500 via-white/80 to-sakura-500 origin-left"
                        style={{ transform: 'scaleX(0)' }}
                    />
                </div>

                <span className="text-xs font-kosugi text-white/30 tracking-[0.3em] uppercase">
                    loading
                </span>
            </div>
        </div>
    );
};

export default Preloader;
