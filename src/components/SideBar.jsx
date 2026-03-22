import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialAccounts } from '../data/profileData';

const SideBar = ({ isMobile }) => {
    return (
        <motion.div 
            className="w-full xl:w-80 flex-shrink-0"
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <div className="bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-cyan-900/50 p-6 md:p-8 relative overflow-hidden group shadow-lg dark:shadow-[0_0_30px_rgba(0,255,255,0.05)]">
                {/* Cyberpunk corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl"></div>
                
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Header decorative text */}
                    <div className="absolute -top-4 -right-4 text-6xl font-japanese font-black text-gray-100 dark:text-cyan-900/20 select-none pointer-events-none">
                        連絡
                    </div>

                    {/* Left side decorative text */}
                    <div className="absolute top-10 -left-2 text-xs font-japanese text-amber-600 dark:text-amber-500/50 writing-mode-vertical tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                        ポートフォリオ
                    </div>

                    <div className="space-y-8 mt-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <ContactItem 
                                icon={<FaEnvelope />} 
                                text={personalInfo.email} 
                                delay={0.5} 
                                href={`mailto:${personalInfo.email}`} 
                            />
                            <ContactItem 
                                icon={<FaPhone />} 
                                text={personalInfo.phone} 
                                delay={0.6} 
                                href={`tel:${personalInfo.phone}`} 
                            />
                            <ContactItem 
                                icon={<FaMapMarkerAlt />} 
                                text={personalInfo.location} 
                                delay={0.7} 
                            />
                        </div>

                        {/* Social Links Section */}
                        <div className="pt-8 relative">
                            {/* Section divider */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                            
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                Find me on:
                                <span className="h-1 w-12 bg-cyan-500 rounded-full animate-pulse"></span>
                            </h3>
                            
                            <div className="grid grid-cols-4 gap-4">
                                {socialAccounts.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a 
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 group"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + (index * 0.1), type: "spring" }}
                                            title={social.name}
                                        >
                                            <Icon className="text-xl group-hover:scale-110 transition-transform" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorative text */}
                    <div className="absolute -bottom-8 -right-4 text-6xl font-japanese font-black text-gray-100 dark:text-purple-900/20 select-none pointer-events-none">
                        情報
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ContactItem = ({ icon, text, delay, href }) => {
    const content = (
        <>
            <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 truncate">
                {text}
            </span>
        </>
    );

    const containerClasses = "flex items-center gap-4 group cursor-pointer w-full";

    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
        >
            {href ? (
                <a href={href} className={containerClasses}>
                    {content}
                </a>
            ) : (
                <div className={containerClasses}>
                    {content}
                </div>
            )}
        </motion.div>
    );
};

export default SideBar;