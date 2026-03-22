import { FaNetworkWired, FaChalkboardTeacher, FaReact, FaLaptopCode } from 'react-icons/fa';
import { RiCodeView } from 'react-icons/ri';

export const experienceData = [
    {
        id: 1,
        title: "Backend Developer",
        subtitle: "Taqniat Al-Ma'loumat",
        period: "Sep 2025 – Present",
        Icon: FaNetworkWired,
        side: "left",
        description:
            "Built Node.js + TypeScript backends for production tourism platforms. Developed real-time CRM using Socket.IO and designed scalable systems with BullMQ and AWS.",
    },
    {
        id: 2,
        title: "Coding Instructor",
        subtitle: "DECI (MCIT, Udacity Partner)",
        period: "Jul 2025 – Aug 2025",
        Icon: FaChalkboardTeacher,
        side: "right",
        description:
            "Delivered in-person training on JavaScript, React, Node.js, and software engineering principles to 100+ students. Designed structured learning paths.",
    },
    {
        id: 3,
        title: "Frontend Engineer Intern",
        subtitle: "Vezeeta (Health Tech)",
        period: "May 2025 – Jun 2025",
        Icon: RiCodeView,
        side: "left",
        description:
            "Built and optimized TypeScript React components for Thndr like Stock Market App using Next.js. Raised test coverage to 85% using Storybook + Cypress.",
    },
    {
        id: 4,
        title: "React.js Intern",
        subtitle: "Digital Egypt Pioneers Initiative (DEPI)",
        period: "Apr 2024 – Oct 2024",
        Icon: FaReact,
        side: "right",
        description:
            "Developed 5 React apps with 30% better Lighthouse scores. Awarded DEPI Top Performer (top 5% of 200+ interns).",
    },
    {
        id: 5,
        title: "IoT Engineer Intern",
        subtitle: "Samsung Innovation Campus",
        period: "Aug 2023 – Oct 2023",
        Icon: FaLaptopCode,
        side: "left",
        description:
            "Led a 4-member team to build a fire-detection system using Raspberry Pi, Node RED, and Flask, winning 1st place.",
    }
];
