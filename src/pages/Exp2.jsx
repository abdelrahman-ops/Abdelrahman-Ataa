import { useState } from "react";
import '../css/exp.css'
const Exp2 = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            <section className="qualification section">
                <h2 className="section__title">My Experience</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualification__container container">
                    {/* Tabs */}
                    <div className="qualification__tabs">
                        
                        {/* Button 1 */}
                        <div className="qualification__button qualification__active button--flex">
                            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                        </div>
                        
                        {/* Button 2 */}
                        <div className="qualification__button button--flex">
                            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                        </div>
                    </div>

                    {/* Content */}
                    <div className="qualification__sections">
                        {/* Left Column: Education */}
                        <div className="qualification__content qualification__content-active">
                            {/* Qualification Data Entries */}
                            
                            {/* Data 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web Design</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
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
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* Data 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web dev</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
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
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* Right Column: Experience */}
                        <div className="qualification__content">
                            {/* Qualification Data Entries */}
                            
                            {/* Data 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Product Thing</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
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
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* Data 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web designer</h3>
                                    <span className="qualification__subtitle">Spain - Ins</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">2021 - Present</i>
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
        </div>
    );
};

export default Exp2;
