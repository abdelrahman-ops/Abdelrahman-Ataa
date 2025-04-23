

import ecom from "../projects/ecom.png";
import gpa2 from "../projects/gpa2.png";

export const projects = [
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
            featured : true
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
            featured : true
        }
];