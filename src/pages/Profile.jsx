import Hero from '../components/Hero';
import SectionReveal from '../components/SectionReveal';

const Profile = () => {
    return (
        <SectionReveal className="relative">
            <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
                <Hero />
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 dark:from-dark-bg to-transparent pointer-events-none" />
        </SectionReveal>
    );
};

export default Profile;