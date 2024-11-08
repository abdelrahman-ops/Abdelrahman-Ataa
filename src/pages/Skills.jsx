import Title from "../components/Title"


const Skills = () => {
    return (
        <div>
            <div className="my-20">
                <div className="w-full border  shadow-md rounded-lg p-6">
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
                        
            </div>
        </div>
    )
}

export default Skills
