import { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import SectionReveal from '../components/SectionReveal';
import { personalInfo, socialAccounts } from '../data/profileData';

const Contact = () => {
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
            <section id="contact" className="section-container">
                <div className="section-header">
                    <Title text1="Send a" text2="Message" />
                    <p className="section-subtitle">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
                    {/* Info Section */}
                    <div className="card-surface p-8 md:p-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-8">
                            Establish Connection
                        </h3>

                        <div className="space-y-6 mb-10">
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
                                            className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-sakura-300/10 dark:hover:bg-neon-cyan/10 border border-gray-200 dark:border-gray-700 hover:border-sakura-500 dark:hover:border-neon-cyan text-gray-600 dark:text-gray-300 hover:text-sakura-500 dark:hover:text-neon-cyan flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                            title={social.name}
                                        >
                                            <Icon />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div>
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 card-surface">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 text-3xl">✓</div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Your signal has been received. I'll respond shortly.</p>
                                <button onClick={() => setIsSuccess(false)} className="mt-6 text-sm text-sakura-500 dark:text-neon-cyan hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <FormField label="Your Name" id="name" type="text" name="name" required />
                                <FormField label="Your Email" id="email" type="email" name="email" required />

                                <div>
                                    <label htmlFor="message" className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Message Payload</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full mt-1 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sakura-500/50 dark:focus:ring-neon-cyan/50 focus:border-sakura-500 dark:focus:border-neon-cyan transition-all font-mono text-sm resize-none"
                                        placeholder="Enter your message..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-sakura-500 to-indigo-neon dark:from-neon-cyan dark:to-neon-pink hover:opacity-90 text-white font-bold rounded-xl overflow-hidden shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="font-mono tracking-widest">
                                        {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE_TRANSMISSION'}
                                    </span>
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
};

const ContactInfo = ({ title, value, href }) => (
    <div className="group">
        <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">{title}</div>
        <a href={href} className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-sakura-500 dark:hover:text-neon-cyan transition-colors inline-block relative">
            {value}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sakura-500 dark:bg-neon-cyan group-hover:w-full transition-all duration-300 ease-out" />
        </a>
    </div>
);

const FormField = ({ label, id, type, name, required }) => (
    <div>
        <label htmlFor={id} className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">{label}</label>
        <input
            id={id}
            type={type}
            name={name}
            required={required}
            className="w-full mt-1 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sakura-500/50 dark:focus:ring-neon-cyan/50 focus:border-sakura-500 dark:focus:border-neon-cyan transition-all font-mono text-sm"
            placeholder={`Enter ${label.toLowerCase()}...`}
        />
    </div>
);

export default Contact;