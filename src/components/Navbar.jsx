import { useState } from 'react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-gray-900 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo on left */}
                    <a 
                        href="#home" 
                        className="text-cyan-400 text-lg font-mono"
                    >
                        ABDELRAHMAN_ATAA
                    </a>

                    {/* Desktop Nav - Simple right-aligned */}
                    <div className="hidden md:flex items-center space-x-6">
                        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-cyan-400 text-sm font-mono"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-gray-300"
                        aria-label="Menu"
                    >
                        <div className="w-6 flex flex-col gap-1">
                            <span className="h-0.5 w-full bg-current"></span>
                            <span className="h-0.5 w-full bg-current"></span>
                            <span className="h-0.5 w-full bg-current"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu - simple dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-2">
                    {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block py-2 text-gray-300 hover:text-cyan-400 text-sm font-mono"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;