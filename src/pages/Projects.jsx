import Title from "../components/Title";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ecom from "../assets/projects/ecom.png";
import gpa from "../assets/projects/gpa.png";
import gpa2 from "../assets/projects/gpa2.png"

const Projects = () => {
    return (
        <div className="my-20">
            <div className="w-full border shadow-md rounded-lg p-6">
                {/* Section Title */}
                <div className="flex justify-center items-center mb-10">
                    <p className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
                        <Title text1="My" text2="Projects" />
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-8">
                    {/* E-commerce Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                E-Commerce Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A dynamic e-commerce platform with product management, user authentication, 
                                    and an admin dashboard. Built using the MERN stack for optimal performance.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/abdelrahman-ops/Lumira-ECommerce"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        {/* <FaGithub size={24} /> */}
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://44ever.netlify.app/"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        {/* <FaExternalLinkAlt size={24} /> */}
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={ecom}
                                    alt="E-Commerce Website"
                                    className="w-full h-full object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* GPA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                GPA Calculator Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A simple yet effective GPA calculator website designed to help students
                                    compute their GPA dynamically. Built using React and Tailwind CSS for a modern and responsive design.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/abdelrahman-ops/gpa-calculator"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://calcmygpa.netlify.app/"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={gpa2}
                                    alt="GPA Calculator Website"
                                    className="w-full h-full max-h-64 object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    
                    {/* CRUD Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                E-Commerce Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A dynamic e-commerce platform with product management, user authentication, 
                                    and an admin dashboard. Built using the MERN stack for optimal performance.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/your-repo-link"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        {/* <FaGithub size={24} /> */}
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://your-project-link.com"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        {/* <FaExternalLinkAlt size={24} /> */}
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={ecom}
                                    alt="E-Commerce Website"
                                    className="w-full h-full object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* CRUD Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                E-Commerce Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A dynamic e-commerce platform with product management, user authentication, 
                                    and an admin dashboard. Built using the MERN stack for optimal performance.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/your-repo-link"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        {/* <FaGithub size={24} /> */}
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://your-project-link.com"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        {/* <FaExternalLinkAlt size={24} /> */}
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={ecom}
                                    alt="E-Commerce Website"
                                    className="w-full h-full object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* CRUD Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                E-Commerce Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A dynamic e-commerce platform with product management, user authentication, 
                                    and an admin dashboard. Built using the MERN stack for optimal performance.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/your-repo-link"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        {/* <FaGithub size={24} /> */}
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://your-project-link.com"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        {/* <FaExternalLinkAlt size={24} /> */}
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={ecom}
                                    alt="E-Commerce Website"
                                    className="w-full h-full object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* CRUD Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Title */}
                        <div className="text-center py-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-900">
                                E-Commerce Website
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row">
                            {/* Description and Technologies */}
                            <div className="flex-1 pl-6 py-4 space-y-4">
                                <p className="text-gray-600 dark:text-slate-800">
                                    A dynamic e-commerce platform with product management, user authentication, 
                                    and an admin dashboard. Built using the MERN stack for optimal performance.
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs dark:bg-gray-800 dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="mt-4 flex space-x-4">
                                    {/* GitHub Icon */}
                                    <a
                                        href="https://github.com/your-repo-link"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub Repository"
                                    >
                                        {/* <FaGithub size={24} /> */}
                                        <i className="uil uil-github-alt text-2xl p-2"></i>
                                    </a>
                                    {/* External Link Icon */}
                                    <a
                                        href="https://your-project-link.com"
                                        className="text-gray-800 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-400 rounded-full bg-slate-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View Project"
                                    >
                                        {/* <FaExternalLinkAlt size={24} /> */}
                                        <i className="uil uil-link-alt text-2xl p-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image with "Drop" Effect */}
                            <div className="relative flex-1 overflow-hidden group">
                                <img
                                    src={ecom}
                                    alt="E-Commerce Website"
                                    className="w-full h-full object-cover rounded-tl-lg 
                                    transition-transform duration-500 group-hover:scale-[1.05] 
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-hover:rotate-[-2deg]"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
