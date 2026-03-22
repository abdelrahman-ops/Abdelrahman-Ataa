const Footer = () => {
    return (
        <footer className="w-full py-8 mt-16 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 transition-colors duration-500">
            <div className="section-container py-0 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Abdelrahman Ataa. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-sakura-500 dark:text-neon-cyan">
                    <span className="w-2 h-2 rounded-full bg-sakura-500 dark:bg-neon-cyan animate-pulse" />
                    SYSTEM.ONLINE
                </div>
            </div>
        </footer>
    );
};

export default Footer;