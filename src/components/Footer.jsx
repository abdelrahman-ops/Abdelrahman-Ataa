const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Abdelrahman Ataa. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-cyan-600 dark:text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    SYSTEM.ONLINE
                </div>
            </div>
        </footer>
    );
};

export default Footer;