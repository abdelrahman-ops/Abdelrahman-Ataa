import React from 'react';

const Title = ({ text1, text2 }) => {
    return (
        <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase font-japanese relative z-10">
                <span className="text-gray-800 dark:text-white transition-colors duration-500">{text1} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500"
                      style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 255, 255, 0.4))" }}>
                    {text2}
                </span>
            </h2>
            
            {/* Cyberpunk Underscore */}
            <div className="absolute -bottom-3 left-0 w-full flex items-center h-1">
                <div className="w-8 h-1 bg-cyan-500 shadow-[0_0_8px_#0ff]"></div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#f0f] animate-pulse"></div>
            </div>

            {/* Decorative particles behind title */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-75"></div>
        </div>
    );
};

export default Title;