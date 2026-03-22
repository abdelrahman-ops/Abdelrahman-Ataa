import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from '../components/Title';
import SectionReveal from '../components/SectionReveal';
import { personalInfo, socialAccounts } from '../data/profileData';

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        try {
            const response = await fetch("https://formspree.io/f/xjkbqbkl", {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            }
        } catch (error) {
            console.error(error);
        }
        setIsSubmitting(false);
    };

    return (
        <SectionReveal>
            <motion.section 
                ref={ref}
                id="contact" 
                className="py-12 overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Visual decorations */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <Title text1="Send a" text2="Message" />
                        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Info Section */}
                        <motion.div 
                            className="bg-white/60 dark:bg-gray-900/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-none"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: inView ? 0 : -30, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mb-8 font-japanese">
                                接続を確立... (Establish Connection)
                            </h3>
                            
                            <div className="space-y-6 mb-12">
                                <ContactInfo title="System Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                                <ContactInfo title="Secure Line" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                            </div>

                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-bold font-mono">Social Networks:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {socialAccounts.slice(0, 5).map((social, idx) => {
                                        const Icon = social.icon;
                                        return (
                                            <a 
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all duration-300 shadow-sm dark:shadow-none hover:-translate-y-1"
                                                title={social.name}
                                            >
                                                <Icon />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Section */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: inView ? 0 : 30, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-200 dark:border-green-500/30">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 text-3xl">✓</div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Your signal has been received. I'll respond shortly.</p>
                                    <button onClick={() => setIsSuccess(false)} className="mt-6 text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <FormField label="Your Name" id="name" type="text" name="name" required />
                                        <FormField label="Your Email" id="email" type="email" name="email" required />
                                        
                                        <div className="relative group">
                                            <label htmlFor="message" className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Message Payload</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                required
                                                className="w-full mt-1 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm resize-none shadow-sm dark:shadow-none"
                                                placeholder="Enter your message..."
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full relative px-6 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-xl overflow-hidden group shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="relative z-10 font-mono tracking-widest flex items-center justify-center gap-2">
                                            {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE_TRANSMISSION'}
                                        </div>
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </SectionReveal>
    );
};

const ContactInfo = ({ title, value, href }) => (
    <div className="relative group">
        <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">{title}</div>
        <a href={href} className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-block relative">
            {value}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
    </div>
);

const FormField = ({ label, id, type, name, required }) => (
    <div className="relative group">
        <label htmlFor={id} className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">{label}</label>
        <div className="relative mt-1">
            <input
                id={id}
                type={type}
                name={name}
                required={required}
                className="w-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm shadow-sm dark:shadow-none"
                placeholder={`Enter ${label.toLowerCase()}...`}
            />
            {/* Cyberpunk corner accent - only visible on focus */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
        </div>
    </div>
);

export default Contact;