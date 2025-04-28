const Footer = () => {
    return (
        <footer className="bg-gray-900/50 border-t border-gray-700 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400 font-mono text-sm">
                    <span className="text-cyan-400">$</span> © {new Date().getFullYear()} ABDELRAHMAN_ATA 
                    <span className="text-purple-400 ml-2">// ALL SYSTEMS NOMINAL</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;