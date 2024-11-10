import { useState } from "react";
import '../css/exp.css'
import Title from "../components/Title";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Exp2 = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
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
        >
            <section className="w-full border  shadow-md rounded-lg p-6">
                <div className="flex justify-center items-center flex-wrap mb-5">
                    <div>
                        <p className="text-4xl font-semibold text-center">
                            <Title text1="My" text2="Experience" />
                        </p>
                    </div>
                </div>

                <div className="max-w-[768px] m-auto">
                    {/* Tabs */}
                    <div className="flex justify-center mb-8 text-slate-700 hover:text-slate-900 font-[500] text-[1.25rem] cursor-pointer">
                        
                        {/* Button 1 Education */}
                        <div 
                            className = {`qualification__button inline-flex items-center mx-4 my-0 ${toggleState === 1 ? 'qualification__active' : ''} `}
                            onClick={() => toggleTab(1)}
                        >
                            <i className="uil uil-graduation-cap qualification__icon"></i>Education
                        </div>
                        
                        {/* Button 2 Experience */}
                        <div className = {`qualification__button inline-flex items-center mx-4 my-0 ${toggleState === 2 ? 'qualification__active' : ''} `}
                            onClick={() => toggleTab(2)}
                        >
                            <i className="uil uil-briefcase-alt qualification__icon "></i>Experience
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-[0.5fr] justify-center">
                        {/* Left Column: Education */}
                        <div className={`${toggleState === 1 ? 'block' : 'hidden'}`}>
                            {/* Qualification Data Entries */}
                            
                            {/* Data 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web Design</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            
                            {/* Data 2 */}
                            <div className="qualification__data">
                                <div></div>
                                
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                
                                <div>
                                    <h3 className="qualification__title">Web Design</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2021 - Present
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* Data 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web dev</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            
                            {/* Data 4 */}
                            <div className="qualification__data">
                                <div></div>
                                
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                
                                <div>
                                    <h3 className="qualification__title">UX Thing</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* Right Column: Experience */}
                        <div className={`${toggleState === 2 ? 'block' : 'hidden'}`}>
                            {/* Qualification Data Entries */}
                            
                            {/* Data 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Product Thing</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            
                            {/* Data 2 */}
                            <div className="qualification__data">
                                <div></div>
                                
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                
                                <div>
                                    <h3 className="qualification__title">IUX Design</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* Data 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web designer</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">2021 - Present</i>
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Exp2;
