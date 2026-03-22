import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialAccounts } from '../data/profileData';

/* ─── Contact Item ─── */

const ContactItem = ({ icon, text, href, delay = 0 }) => {
    const inner = (
        <>
            <div className="w-9 h-9 rounded-full bg-sakura-300/20 dark:bg-neon-cyan/10 flex items-center justify-center text-sakura-500 dark:text-neon-cyan group-hover:bg-sakura-500 dark:group-hover:bg-neon-cyan group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300 flex-shrink-0">
                {icon}
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-sakura-500 dark:group-hover:text-neon-cyan transition-colors duration-300 truncate">
                {text}
            </span>
        </>
    );

    const cls = "flex items-center gap-3 group cursor-pointer";

    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
        >
            {href ? (
                <a href={href} className={cls}>{inner}</a>
            ) : (
                <div className={cls}>{inner}</div>
            )}
        </motion.div>
    );
};

/* ─── SideBar ─── */

const SideBar = () => {
    return (
        <motion.aside
            className="w-full xl:w-auto flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
        >
            <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 p-5 md:p-6 relative overflow-hidden shadow-lg dark:shadow-[0_0_20px_rgba(0,255,255,0.04)]">
                {/* Corner accents — decorative */}
                <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-sakura-500/30 dark:border-neon-cyan/30 rounded-tl-2xl pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-pink/30 dark:border-neon-pink/30 rounded-br-2xl pointer-events-none" />

                {/* Subtle grid pattern — decorative z-0 */}
                <div className="absolute inset-0 shoji-pattern opacity-30 pointer-events-none z-0" />

                {/* Content — z-10 */}
                <div className="relative z-10 space-y-6">
                    {/* Decorative kanji watermark */}
                    <div className="absolute -top-2 -right-2 text-4xl font-japanese font-black text-gray-100 dark:text-gray-800/30 select-none pointer-events-none" aria-hidden="true">
                        連絡
                    </div>

                    {/* Contact info */}
                    <div className="space-y-4 mt-4">
                        <ContactItem
                            icon={<FaEnvelope className="text-sm" />}
                            text={personalInfo.email}
                            href={`mailto:${personalInfo.email}`}
                            delay={0.6}
                        />
                        <ContactItem
                            icon={<FaPhone className="text-sm" />}
                            text={personalInfo.phone}
                            href={`tel:${personalInfo.phone}`}
                            delay={0.7}
                        />
                        <ContactItem
                            icon={<FaMapMarkerAlt className="text-sm" />}
                            text={personalInfo.location}
                            delay={0.8}
                        />
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-sakura-500/40 dark:from-neon-cyan/40 to-transparent" />

                    {/* Social links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 font-kosugi uppercase tracking-wider">
                            Find me on
                            <span className="h-0.5 w-8 bg-sakura-500 dark:bg-neon-cyan rounded-full" />
                        </h3>

                        <div className="grid grid-cols-4 gap-3">
                            {socialAccounts.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-sakura-500 dark:hover:text-neon-cyan hover:border-sakura-500 dark:hover:border-neon-cyan hover:bg-sakura-500/5 dark:hover:bg-neon-cyan/5 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.07, type: 'spring' }}
                                        title={social.name}
                                    >
                                        <Icon className="text-base" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.aside>
    );
};

export default SideBar;