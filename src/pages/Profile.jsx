import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SideBar from '../components/SideBar';
import useWindowWidth from "../hooks/Small";
const Profile = () => {
    const japaneseName = "アブデルラーマン アター";
    const englishName = "Abdelrahman Ataa";
    const [displayedName, setDisplayedName] = useState(japaneseName);

    // const[show , setShow] = useState(true);
    
    const show = useWindowWidth(768);
    

    useEffect(() => {
        const nameArray = [...japaneseName];
        const targetArray = [...englishName];
        let currentName = nameArray;
        let index = 0;

        const interval = setInterval(() => {
            if (index < targetArray.length) {
                currentName[index] = targetArray[index];
                setDisplayedName(currentName.join(""));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust speed as needed

        return () => clearInterval(interval);
    }, []);

    return ( <>
    
        {show ? (
            <div className="container mx-auto pt-10 border-t-2">
            {/* Name Section */}
            <div className="flex justify-center mb-6">
                <p className="text-gray-700 text-5xl font-bold">{displayedName}🖐️</p>
            </div>
            
            {/* Sidebar and Hero Section Side by Side */}
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Sidebar */}
                <div className="sm:w-1/4">
                    <SideBar />
                </div>
                
                {/* Hero Section */}
                <div className="sm:w-3/4">
                    <Hero />
                </div>
            </div>
        </div>
        ) : (
        <div className="container mx-auto pt-10 border-t-2">
            {/* Name Section */}
            <div className="flex justify-center mb-6">
                <p className="text-gray-700 text-5xl font-bold">{displayedName}🖐️</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Sidebar */}
                <div className="sm:w-3/4">
                    <Hero />
                </div>
                <div className="sm:w-1/4">
                    <SideBar />
                </div>
                
                {/* Hero Section */}
                
            </div>
            
            
            
            {/* Sidebar and Hero Section Side by Side */}
            
        </div>)}
        </>
    );
};

export default Profile;
