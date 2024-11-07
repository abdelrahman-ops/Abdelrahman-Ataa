// import React from 'react'
import { useEffect, useState } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaDiscord, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { SiCodeforces } from "react-icons/si";
const SideBar = () => {
    const[show , setShow] = useState(true);
    const profileData = {
        email: "abdelrahmanataa17@gmail.com",
        phone: "+201015372301",
        location: "Cairo, Egypt",
        accounts: [
            { name: 'GitHub', url: "https://github.com/abdelrahman-ops", icon: <FaGithub /> },
            { name: 'LinkedIn', url: "https://www.linkedin.com/in/abdelrahman-ataa-b557b8219/", icon: <FaLinkedinIn /> },
            { name: 'Codeforces', url: "https://codeforces.com/profile/abdelrahmanataa17", icon: <SiCodeforces /> },
            { name: 'X', url: "https://x.com/abdelrahmanside?t=k4wCRJdSaiPO_TeghXupVw&s=09", icon: <FaXTwitter /> },
            { name: 'WhatsApp', url: "https://wa.me/201015372301", icon: <FaWhatsapp /> },
            { name: 'Telegram', url: "https://t.me/Shadowmonarch4r", icon: <FaTelegramPlane /> },
            { name: 'Facebook', url: "https://www.facebook.com/profile.php?id=100010146721312&mibextid=ZbWKwL", icon: <FaFacebookF /> },
            { name: 'Discord', url: "https://discord.com/users/abdelrahman0_2", icon: <FaDiscord /> },
        ],
    };

    useEffect(() => {
        // Function to check screen size and set `show` accordingly
        const handleResize = () => {
            if (window.innerWidth < 768) { // You can adjust 768px as per your requirement for "small" screens
                setShow(false);
            } else {
                setShow(true);
            }
        };

        // Run the function once on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <> 
        {show ? (
            <div className="min-w-60 border shadow-md rounded-lg p-6 flex flex-col items-center">
                <div>
                        <div className="flex items-center gap-2  border-gray-300 pl-2 py-3 hover:bg-gray-200 transition duration-300 cursor-pointer text-gray-950">
                            <MdOutlineMailOutline className="text-xl" />
                            <p className="mb-0 text-sm font-medium">{profileData.email}</p>
                        </div>
                        
                        <div className="flex items-center gap-2 border-t border-gray-300 pl-2 py-3 hover:bg-gray-200 transition duration-300 cursor-pointer text-gray-950">
                            <FaPhoneAlt className="text-md" />
                            <p className="mb-0 text-sm font-medium">{profileData.phone}</p>
                        </div>
                        
                        <div className="flex items-center gap-2 border-t border-gray-300 pl-2 py-3 hover:bg-gray-200 transition duration-300 cursor-pointer text-gray-950">
                            <MdOutlineLocationOn className="text-xl" />
                            <p className="mb-0 text-sm font-medium">{profileData.location}</p>
                        </div>

                        <div className="border-t border-gray-300 pl-2 py-3">
                            <p className="text-lg font-semibold">Find me on:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                                {profileData.accounts.map((account, index) => (
                                    <div key={index} className="flex items-center justify-center">
                                        <a
                                            href={account.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full p-3 hover:bg-gray-200 transition duration-300"
                                        >
                                            <span className="text-xl text-gray-700">{account.icon}</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        ): (
            <div className="min-w-60 max-w-full flex flex-col items-center pb-6">
                
                <div>
                    <div className="flex flex-wrap gap-0 mt-3 justify-center">
                        {profileData.accounts.map((account, index) => (
                            <div key={index} className="flex items-center justify-center min-w-[50px] max-w-[60px]">
                                <a
                                    href={account.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-3 hover:bg-gray-200 transition duration-300"
                                >
                                    <span className="text-xl text-gray-700">{account.icon}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        )}
        </>
    )
}

export default SideBar
