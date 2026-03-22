import { useTheme } from '../context/ThemeContext';

const CyberBackground = ({ particleCount = 30 }) => {
    const { isDark } = useTheme();

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gray-50 dark:bg-[#030014] transition-colors duration-500">
            {/* Base Radial Gradient */}
            <div
                className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_50%_40%,#1a0b2e_0%,#030014_100%)] opacity-80' : 'bg-[radial-gradient(circle_at_50%_40%,#e0e7ff_0%,#f8fafc_100%)] opacity-50'}`}
            />

            {/* Glowing Orbs */}
            <div className={`absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-500 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/20'}`} />
            <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-500 ${isDark ? 'bg-purple-600/15' : 'bg-purple-400/20'}`} />

            {/* Neon Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${isDark ? '#0ff' : '#0ea5e9'} 1px, transparent 1px),
                        linear-gradient(to bottom, ${isDark ? '#f0f' : '#8b5cf6'} 1px, transparent 1px)
                    `,
                    backgroundSize: '4rem 4rem',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    animation: 'grid-animation 20s linear infinite',
                }}
            />

            {/* Floating Tech Particles */}
            {Array.from({ length: particleCount }).map((_, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full transition-colors duration-500 ${isDark ? 'bg-cyan-400 shadow-[0_0_10px_#0ff]' : 'bg-cyan-500 shadow-[0_0_10px_#0ea5e9]'}`}
                    style={{
                        width: Math.random() * 4 + 1 + 'px',
                        height: Math.random() * 4 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.5 + 0.1,
                        animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                        animationDelay: `-${Math.random() * 10}s`,
                    }}
                />
            ))}

            {/* Scanlines Overlay - visible only in dark mode to keep light mode clean */}
            {isDark && (
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
                        backgroundSize: '100% 4px'
                    }}
                />
            )}
        </div>
    );
};

export default CyberBackground;
