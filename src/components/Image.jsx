/* eslint-disable react/prop-types */
const Image = ({ imageSrc }) => {
    return (
        <div className="relative flex h-48 w-48 group perspective-1000">
            {/* Holographic glow effect */}
            <span className="absolute inset-0 rounded-full bg-cyan-500/10 blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-500"></span>
            
            {/* Pulsing cyberpunk ring */}
            <span className="absolute -inset-2 rounded-full border-2 border-cyan-400/30 group-hover:border-cyan-400/70 transition-all duration-700 animate-[spin_8s_linear_infinite]"></span>
            
            {/* Main image with morph effect */}
            <div className="relative h-48 w-48 overflow-hidden">
                <img 
                    src={imageSrc} 
                    alt="Profile" 
                    className="h-full w-full object-cover rounded-full transition-all duration-500 
                    group-hover:scale-105 group-hover:brightness-110
                    animate-[morph_8s_ease-in-out_infinite] border-2 border-cyan-400/20"
                />
            </div>
            
            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <span 
                    key={i}
                    className={`absolute rounded-full bg-cyan-400/60 group-hover:opacity-80 opacity-0 transition-opacity duration-300`}
                    style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        top: `${Math.random() * 30 + 10}%`,
                        left: `${Math.random() * 30 + 10}%`,
                        animation: `float${i % 3} ${Math.random() * 5 + 5}s infinite ease-in-out`
                    }}
                />
            ))}
        </div>
    );
};

export default Image;