// No images needed since we don't render them anymore in ProjectCard

export const projects = [
    {
        id: 1,
        title: "Nexify",
        description:
            "Multi-Tenant CRM Platform. Led complete frontend architecture, designing scalable state management and reusable component patterns for long-term maintainability.",
        technologies: ["React", "Zustand", "TailwindCSS"],
        links: {
            github: "https://github.com/abdelrahman-ops",
            live: "https://crm-system-client-eight.vercel.app/",
        },
        accentColor: "from-blue-500 to-indigo-500",
        featured: true,
        type: "frontend",
    },
    {
        id: 2,
        title: "Taqwa",
        description:
            "Taqwa is an Islamic app that helps Muslims pray on time, read the Quran, and track their religious activities.",
        technologies: ["React", "Zustand", "TailwindCSS"],
        links: {
            github: "https://github.com/abdelrahman-ops/Taqwa-App",
            live: "https://taqwa-app-one.vercel.app/",
        },
        accentColor: "from-blue-500 to-indigo-500",
        featured: true,
        type: "frontend",
    },
    {
        id: 3,
        title: "Finora",
        description:
            "Finora is a money tracking app that helps you track your expenses and income.",
        technologies: ["React", "Zustand", "TailwindCSS"],
        links: {
            github: "https://github.com/abdelrahman-ops/Money-Tracker-APP",
            live: "https://finora-flax.vercel.app/",
        },
        accentColor: "from-blue-500 to-indigo-500",
        featured: true,
        type: "frontend",
    },
    {
        id: 4,
        title: "Dawak",
        description:
            "AI-Powered Medication and Reminder App. Built AI-powered prescription scanner and drug interaction detector. Processed 191K+ drug interactions with millisecond-level lookups. Top 10 Finalist – VICTORIS IEEE (2025).",
        technologies: ["Node.js", "Express", "MongoDB", "Auth", "AI Integration"],
        links: {
            github: "https://github.com/abdelrahman-ops/Dawak", // Assuming repo name
            live: null,
        },
        accentColor: "from-emerald-400 to-teal-500",
        featured: true,
        type: "backend",
    },
    {
        id: 3,
        title: "BloodFlow",
        description:
            "Donor Matching Platform (Hackathon Winner). Reduced donor–patient matching delays using real-time location alerts. Admin dashboard for hospitals to manage inventory. 3rd Place Samsung Hackathon.",
        technologies: ["TypeScript", "Node.js", "Express", "Prisma", "WebSockets"],
        links: {
            github: "https://github.com/abdelrahman-ops/BloodFlow",
            live: "https://abdelrahman-ataa.vercel.app", // Placeholder
        },
        accentColor: "from-red-500 to-yellow-500",
        featured: true,
        type: "fullstack",
    },
    {
        id: 4,
        title: "LUMIRA",
        description:
            "Full-stack e-commerce platform with admin dashboard, highly optimized client-side caching and API usage.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
        links: {
            github: "https://github.com/abdelrahman-ops/Lumira-ECommerce",
            live: "https://lumira-seven.vercel.app",
        },
        accentColor: "from-purple-500 to-pink-500",
        featured: true,
        type: "fullstack",
    },
    {
        id: 5,
        title: "GPA Calculator",
        description:
            "An intuitive GPA calculator with semester tracking and grade prediction.",
        technologies: ["React", "TailwindCSS"],
        links: {
            github: "https://github.com/abdelrahman-ops/gpa-calculator",
            live: "https://calcmygpa.netlify.app/",
        },
        accentColor: "from-blue-400 to-cyan-400",
        featured: false,
        type: "frontend",
    }
];
