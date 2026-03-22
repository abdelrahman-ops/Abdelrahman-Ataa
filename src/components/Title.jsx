/**
 * Section title — clean, minimal, Japanese-accented.
 * No glitch effects, no pulsing blobs, no random particles.
 */
const Title = ({ text1, text2 }) => {
    return (
        <div className="relative inline-block py-2">
            {/* Authentic Japanese Brush Stroke (Behind text) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0 flex items-center justify-center -rotate-2">
                <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="w-full h-full fill-current text-gray-900 dark:text-white">
                    <path d="M5,30 Q40,15 100,25 T195,30 Q150,45 100,35 T5,30 Z" />
                </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase relative z-10">
                <span className="text-gray-800 dark:text-white/90">{text1} </span>
                <span className="text-gray-500 dark:text-gray-400">
                    {text2}
                </span>
            </h2>
        </div>
    );
};

export default Title;