import Title from "../components/Title"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when it enters view
        threshold: 0.3, // Trigger when 30% of the section is in view
    });

    return (
        <div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.6 }}
                className="my-20"
            >
                <div className="w-full border shadow-md rounded-lg p-6">
                    {/* Section Header */}
                    <div className="flex justify-center items-center mb-10">
                        <p className="text-4xl font-semibold">
                            <Title text1="" text2="Experience" />
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                        {/* Education Section (Left side) */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-start mb-12"
                        >
                            <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/2 p-4 text-left">
                                <p className="text-xl font-semibold mb-2">My Education</p>
                                <p className="text-md font-medium">Faculty Of Engineering</p>
                                <p className="text-sm text-gray-500">Mansoura University</p>
                                <p className="text-sm text-gray-500">2021 : Present</p>
                            </div>
                        </motion.div>

                        {/* Experience Section (Right side) */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex justify-end mb-12"
                        >
                            <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/2 p-4 text-left">
                                <p className="text-xl font-semibold mb-2">What I Do</p>
                                <p className="text-md font-medium">Freelance Full-Stack Developer</p>
                                <p className="text-sm text-gray-500">2022 – Present</p>
                            </div>
                        </motion.div>

                        {/* Courses Section (Left side) */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex justify-start mb-12"
                        >
                            <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/2 p-4 text-left">
                                <p className="text-xl font-semibold mb-2">Courses</p>
                                <p className="text-md font-medium">• CS50</p>
                                <p className="text-md font-medium">• Google Cybersecurity Certificate</p>
                                <p className="text-md font-medium">• Samsung Innovation Campus – IoT</p>
                            </div>
                        </motion.div>

                        {/* More Info Section (Right side) */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex justify-end mb-12"
                        >
                            <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/2 p-4 text-left">
                                <p className="text-xl font-semibold mb-2">More</p>
                                <p className="text-md font-medium">Samsung Innovation Campus Hackathon - 2023</p>
                                <p className="text-md font-medium">Ultimate V1.0 Contest Winner</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;
