import { FaGraduationCap, FaCertificate, FaTrophy, FaFlask } from 'react-icons/fa';

export const educationData = [
    {
        id: 1,
        title: "B.Sc. in Computer & Communication Engineering",
        subtitle: "Faculty of Engineering, Mansoura University",
        period: "Sep 2021 – Jun 2026",
        Icon: FaGraduationCap,
        side: "left",
        description:
            "GPA: 3.74 / 4.0. Relevant Courses: Data Structures, Algorithms, Database Systems, Software Engineering.",
    },
    {
        id: 2,
        title: "Junior Researcher",
        subtitle: "Nile University UGRF 2025 Participant",
        period: "May 2025 – Aug 2025",
        Icon: FaFlask,
        side: "right",
        description:
            "Presented BloodFlow in Undergraduate Research Forum (Digital Healthcare Track) earned certificate recognition among 800+ submissions from 50+ Universities across 10+ Countries.",
    },
    {
        id: 3,
        title: "Top Certificates",
        subtitle: [
            "Web Development Using React JS (ITI) - Sep 2025",
            "AWS Cloud Foundation (Deployed BloodFlow) - Apr 2025",
            "Meta Database Engineer Certificate (Coursera) - Nov 2023",
            "Huawei AI HCIA - Aug 2024",
            "CS50x Introduction to Computer Science – Harvard, EDX",
        ],
        period: "",
        Icon: FaCertificate,
        side: "left",
        description:
            "Completed intensive programs and specializations in Cloud, Web Development, Databases, and IoT.",
    },
    {
        id: 4,
        title: "Awards & Achievements",
        subtitle: [
            "1st Place - IoT Fire Detection (Samsung Innovation Campus, 2023)",
            "1st Place - C Programming Contest (2023)",
            "2nd Place - Huawei AI HCIA Competition (2024)",
            "3rd Place - Samsung Innovation Campus Hackathon (2024)",
            "4th Place - VICTORIS Dawak AI App (IEEE 2025)",
        ],
        period: "",
        Icon: FaTrophy,
        side: "right",
        description:
            "Recognized for innovative solutions and technical excellence in highly competitive environments.",
    },
];
