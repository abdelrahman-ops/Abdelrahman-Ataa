import  { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <a href="/" className="text-white text-xl font-bold">YourName</a>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
                <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
                </button>
            </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden bg-gray-700">
            <a href="#about" className="block text-gray-300 hover:text-white px-4 py-2">About</a>
            <a href="#projects" className="block text-gray-300 hover:text-white px-4 py-2">Projects</a>
            <a href="#skills" className="block text-gray-300 hover:text-white px-4 py-2">Skills</a>
            <a href="#contact" className="block text-gray-300 hover:text-white px-4 py-2">Contact</a>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
