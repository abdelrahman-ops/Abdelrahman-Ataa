import Title from "../components/Title"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when it enters view
        threshold: 0.3, // Trigger when 30% of the section is in view
    });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="my-20">
            <div className="w-full border  shadow-md rounded-lg p-6">
                        {/* Profile Header */}
                        <div className="flex items-center flex-wrap justify-between">
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-lg font-semibold text-center">
                                        <Title text1="About" text2="Me" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <p className="border rounded-md p-2 mt-1 font-medium">
                                    I am a passionate web developer with expertise in full-stack development, specializing in building dynamic and responsive web applications. 
                                    <br></br><br></br>With a strong foundation in front-end and back-end technologies, 
                                    I have experience creating seamless user experiences while ensuring scalability and efficiency. 
                                    <br></br><br></br>I am constantly learning and applying new technologies to enhance my skills and provide innovative solutions to challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                    
        </motion.div>
    )
}

export default About