import { motion } from "framer-motion";
import Title from "../components/Title";
import ProjectCard from "../components/ProductCard";

// Move images to src/assets/projects/ folder first
import ecom from "../assets/projects/ecom.png";
import gpa2 from "../assets/projects/gpa2.png";

const projects = [
  {
    id: 1,
    title: "Lumira E-Commerce",
    description: "A full-featured online store with cart functionality, payments, and admin dashboard built with MERN stack.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    image: ecom,
    links: {
      github: "https://github.com/abdelrahman-ops/Lumira-ECommerce",
      live: "https://44ever.netlify.app/"
    },
    accentColor: "from-purple-500 to-pink-500",
    featured: true
  },
  {
    id: 2,
    title: "GPA Calculator",
    description: "An intuitive GPA calculator with semester tracking and grade prediction using React and Tailwind CSS.",
    technologies: ["React", "TailwindCSS"],
    image: gpa2,
    links: {
      github: "https://github.com/abdelrahman-ops/gpa-calculator",
      live: "https://calcmygpa.netlify.app/"
    },
    accentColor: "from-blue-500 to-cyan-400",
    featured: true
  }
];

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Title text1="My" text2="Projects" />
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Cutting-edge projects with immersive interactions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;