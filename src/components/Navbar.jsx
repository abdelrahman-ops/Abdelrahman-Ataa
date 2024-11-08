import  { useState } from 'react';
import '../css/nav.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <a href="/" className="text-gray-900 text-xl font-bold font-playwrite">Abdelrahman</a>
                </div>
                <ul className="hidden md:flex sm:flex gap-5 space-x-4 text-md text-gray-900">
                    <a href="#home" className=" flex flex-col items-center gap-1 m-0">Home</a>
                    <a href="#about" className=" flex flex-col items-center gap-1 m-0">About</a>
                    <a href="#skills" className=" flex flex-col items-center gap-1 m-0">Skills</a>
                    <a href="#projects" className=" flex flex-col items-center gap-1 m-0">Projects</a>
                    <a href="#services" className=" flex flex-col items-center gap-1 m-0">Services</a>
                    <a href="#contact" className=" flex flex-col items-center gap-1 m-0">Contact</a>
                </ul>
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
                <div className="md:hidden bg-gray-400">
                    <a href="#home" className="block text-gray-300 hover:text-white px-4 py-2">Home</a>
                    <a href="#about" className="block text-gray-300 hover:text-white px-4 py-2">About</a>
                    <a href="#skills" className="block text-gray-300 hover:text-white px-4 py-2">Skills</a>
                    <a href="#projects" className="block text-gray-300 hover:text-white px-4 py-2">Projects</a>
                    <a href="#services" className="block text-gray-300 hover:text-white px-4 py-2">Services</a>
                    <a href="#contact" className="block text-gray-300 hover:text-white px-4 py-2">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
