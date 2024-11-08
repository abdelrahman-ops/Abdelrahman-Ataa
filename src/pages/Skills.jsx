import Title from "../components/Title"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when it enters view
        threshold: 0.3, // Trigger when 30% of the section is in view
    });

    // Animation settings for each skill
    const skillAnimation = {
        initial: { opacity: 0, y: 20 }, // start with hidden and slightly below
        animate: { opacity: 1, y: 0 },   // animate to visible and normal position
        transition: { duration: 0.5, ease: "easeOut" } // smooth transition
    };
    
    return (
        <div>
            <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="my-20">
                <div className="w-full border shadow-md rounded-lg p-6">
                    {/* Profile Header */}
                    <div className="flex items-center flex-wrap justify-between">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-lg font-semibold text-center">
                                    <Title text1="" text2="Skills" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 mt-6">
                        {/* Skills List */}
                        <div className="flex flex-wrap gap-4">
                            {/* Skill items with individual animations */}
                            {[
                                'C', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Flask', 
                                'Tailwind CSS', 'Git', 'GitHub', 'Node.js', 'MySQL', 'PostgreSQL', 'SQLite3', 
                                'Raspberry Pi', 'Galaxy Upcycling', 'REST APIs', 'CRUD Operations', 'Responsive Design',
                                'Grafana', 'PostgreSQL Integration'
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="border rounded-md p-2 font-medium bg-gray-100"
                                    initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate to visible position
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.1 // Stagger the appearance
                                    }}
                                >
                                    <p>{skill}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills;
