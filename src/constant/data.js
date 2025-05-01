import lumira from '../assets/projects/ecom.png';
import gpa from '../assets/projects/gpa.png';
import bloodFlow from '../assets/projects/blood.png';
// import nodejsBoilerplate from '../projects/nodejsBoilerplate.png';
import chatgpt3 from '../assets/projects/gpt.png';
import dblink from '../assets/projects/dblink.png'; 
import greeneco from '../assets/projects/eco.png';

export const projects = [
    {
        id: 1,
        title: "Lumira E-Commerce",
        description: "A full-featured online store with cart functionality, payments, and admin dashboard built with MERN stack.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
        image: [lumira],
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
        image: [gpa],
        links: {
            github: "https://github.com/abdelrahman-ops/gpa-calculator",
            live: "https://calcmygpa.netlify.app/"
        },
        accentColor: "from-blue-500 to-cyan-400",
        featured: true
    },
    // {
    //     id: 3,
    //     title: "NodeJS Boilerplate",
    //     description: "A clean and modular Node.js boilerplate setup with TypeScript, Express, REST/GraphQL setup, authentication, and testing support.",
    //     technologies: ["TypeScript", "Node.js", "Express", "Prisma", "TailwindCSS", "Docker"],
    //     image: [nodejsBoilerplate],
    //     links: {
    //         github: "https://github.com/abdelrahman-ops/advanced-nodejs-boilerplate",
    //         live: "#"
    //     },
    //     accentColor: "from-green-500 to-teal-500",
    //     featured: true
    // },
    {
        id: 4,
        title: "BloodFlow",
        description: "A blood donation system integrating hospitals to streamline blood donation, track donors, and enhance healthcare with AI tools.",
        technologies: ["TypeScript", "Node.js", "Express", "Prisma", "TailwindCSS", "AI Integration"],
        image: [bloodFlow],
        links: {
            github: "https://github.com/abdelrahman-ops/BloodFlow",
            live: "#"
        },
        accentColor: "from-red-500 to-yellow-500",
        featured: true
    },
    {
        id: 5,
        title: "CRUD Application",
        description: "A simple yet powerful CRUD application with user authentication, using TypeScript, Express, and MongoDB.",
        technologies: ["TypeScript", "TailwindCSS", "Express", "MongoDB"],
        image: [gpa], // Placeholder image
        links: {
            github: "https://github.com/abdelrahman-ops/crud-application",
            live: "https://crud-application-zeta-eight.vercel.app/"
        },
        accentColor: "from-indigo-500 to-purple-600",
        featured: true
    },
    {
        id: 6,
        title: "ChatGPT-3 Website",
        description: "A sleek front-end website showcasing the power of ChatGPT-3, featuring smooth animations and a clean design.",
        technologies: ["React", "Next.js", "TailwindCSS"],
        image: [chatgpt3],
        links: {
            github: "https://github.com/abdelrahman-ops/chatgpt3-website",
            live: "https://chatgpt3-website-nine.vercel.app/"
        },
        accentColor: "from-sky-400 to-blue-600",
        featured: true
    },
    {
        id: 7,
        title: "DBLINK - Movies Platform",
        description: "A movie discovery and streaming UI project with dynamic movie browsing and attractive responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: [dblink],
        links: {
            github: "https://github.com/abdelrahman-ops/DBLINK-PROJECT",
            live: "https://dblink-project-k7e6.vercel.app/"
        },
        accentColor: "from-orange-400 to-red-500",
        featured: true
    },
    {
        id: 8,
        title: "GreenEco Ecosystem",
        description: "A web application to promote eco-friendly practices and environmental awareness, with modern animations and smooth UI.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: [greeneco],
        links: {
            github: "https://github.com/abdelrahman-ops/greeneco.github.io",
            live: "https://greeneco-github-io.vercel.app/"
        },
        accentColor: "from-green-400 to-emerald-500",
        featured: true
    }
];
