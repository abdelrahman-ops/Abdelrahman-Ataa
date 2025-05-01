import React from 'react'
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaDiscord, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { SiCodeforces } from "react-icons/si";
import useWindowWidth from "../hooks/Small";
import { motion } from 'framer-motion';

const SideBar = () => {
    const show = useWindowWidth(768);

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

    return (
        <> 
        {show ? (
            <div className="min-w-72 bg-black/10 backdrop-blur-lg border-2 border-cyan-400/20 rounded-xl p-6 flex flex-col items-center shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
                <div className="flex w-full">
                    {/* Left column for Japanese text */}
                    <div className="flex flex-col items-center h-full mr-4">
                        <div className="vertical-text text-xs text-amber-400/80 tracking-widest mt-2">
                            ポートフォリオ
                        </div>
                    </div>
                    
                    {/* Right column for contact info */}
                    <div className="w-full space-y-4 z-10">
                        {/* Contact Info with Japanese aesthetic */}
                        <div className="group flex items-center gap-3 pl-3 py-3 hover:bg-cyan-500/10 transition-all duration-500 cursor-pointer text-gray-100 rounded-lg border-l-4 border-cyan-400/0 hover:border-cyan-400">
                            <MdEmail className="text-sm text-cyan-400 group-hover:scale-110 transition-transform" />
                            <p className="mb-0 text-sm font-medium text-gray-200 group-hover:text-cyan-200 transition-colors">
                                {profileData.email}
                            </p>
                        </div>
                        
                        <div className="group flex items-center gap-3 pl-3 py-3 hover:bg-purple-500/10 transition-all duration-500 cursor-pointer text-gray-100 rounded-lg border-l-4 border-purple-400/0 hover:border-purple-400">
                            <FaPhoneAlt className="text-md text-purple-400 group-hover:scale-110 transition-transform" />
                            <p className="mb-0 text-sm font-medium text-gray-200 group-hover:text-purple-200 transition-colors">
                                {profileData.phone}
                            </p>
                        </div>
                        
                        <div className="group flex items-center gap-3 pl-3 py-3 hover:bg-amber-500/10 transition-all duration-500 cursor-pointer text-gray-100 rounded-lg border-l-4 border-amber-400/0 hover:border-amber-400">
                            <MdOutlineLocationOn className="text-xl text-amber-400 group-hover:scale-110 transition-transform" />
                            <p className="mb-0 text-sm font-medium text-gray-200 group-hover:text-amber-200 transition-colors">
                                {profileData.location}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Japanese wave pattern */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full filter blur-3xl"></div>
                
                {/* Kanji decorative elements */}
                <div className="absolute top-4 left-4 text-cyan-400/10 text-4xl font-bold select-none">連絡</div>
                <div className="absolute bottom-4 right-4 text-purple-400/10 text-4xl font-bold select-none">情報</div>
                
                {/* Social Media Section */}
                <div className="pt-4 w-full">
                    <div className="relative">
                        <h3 className="text-lg font-bold text-gray-100 mb-4 pl-2 relative inline-block">
                            <span className="relative z-10">Find me on:</span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500/30 z-0"></span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {profileData.accounts.map((account, index) => (
                            <motion.a
                                key={index}
                                href={account.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600/50 transition-colors border border-gray-700 hover:border-indigo-500"
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors group-hover:scale-110">
                                    {account.icon}
                                </span>
                                <span className="absolute -bottom-6 text-xs text-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity w-full">
                                    {account.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-cyan-500/20 z-50 py-2 px-4">
                <div className="flex justify-center space-x-1">
                    {profileData.accounts.map((account, index) => (
                        <a
                            key={index}
                            href={account.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-2 rounded-full hover:bg-cyan-500/20 transition-all duration-300 group"
                        >
                            <span className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors">
                                {account.icon}
                            </span>
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                {account.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        )}
        </>
    )
}

export default SideBar