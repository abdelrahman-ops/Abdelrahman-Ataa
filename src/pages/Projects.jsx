/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { FaServer, FaDesktop, FaCode } from "react-icons/fa";
import ProjectCard from "../components/ProductCard";
import { projects } from "../assets/data/projectsData";
import Text from "../components/Title";
const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const filteredProjects = activeFilter === "all" 
		? projects 
		: projects.filter(project => {
			if (activeFilter === "frontend") {
			return ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Next.js"].some(tech => 
				project.technologies.includes(tech)
			);
			} else if (activeFilter === "backend") {
			return ["Node.js", "Express", "MongoDB", "Prisma"].some(tech => 
				project.technologies.includes(tech)
			);
			}
			return true;
		});

	return (
		<div className="min-h-screen bg-gray-900 overflow-x-hidden">
		{/* Cyberpunk grid background */}
		<div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsIDAsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
		</div>

		{/* Neon border effects */}
		{/* <div className="fixed inset-0 border-4 border-transparent pointer-events-none z-20">
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
			<div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>
			<div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-cyan-500"></div>
			<div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-purple-500 to-cyan-500"></div>
		</div> */}

		<div className="relative z-10 container mx-auto px-4 py-20">
			{/* Header */}
			<div className="text-center mb-16">
			<motion.h1 
				className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<Text text1="My" text2="Projects" />
			</motion.h1>
			
			<motion.p
				className="text-xl text-gray-300 max-w-3xl mx-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				Cutting-edge digital experiences powered by modern technologies
			</motion.p>

			{/* Filter buttons */}
			<motion.div 
				className="flex justify-center gap-4 mt-8 flex-wrap"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				{['all', 'frontend', 'backend'].map((filter) => (
				<motion.button
					key={filter}
					onClick={() => setActiveFilter(filter)}
					className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
					activeFilter === filter 
						? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
						: 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
					}`}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{filter === 'frontend' && <FaDesktop />}
					{filter === 'backend' && <FaServer />}
					{filter.charAt(0).toUpperCase() + filter.slice(1)}
				</motion.button>
				))}
			</motion.div>
			</div>

			{/* Projects Grid */}
			<div className="grid gap-16">
			{filteredProjects.map((project, index) => (
				<ProjectCard 
				key={project.id} 
				project={project} 
				index={index}
				reverse={index % 2 === 0} // Alternate layout
				/>
			))}
			</div>
		</div>
		</div>
	);
};

export default Projects;