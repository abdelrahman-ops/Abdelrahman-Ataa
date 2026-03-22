import Hero from '../components/Hero';
import SideBar from '../components/SideBar';
import SectionReveal from '../components/SectionReveal';
import useMediaQuery from '../hooks/useMediaQuery';

const Profile = () => {
    const isMobile = useMediaQuery(768);

    return (
        <SectionReveal className="relative overflow-hidden">
            {/* Main Content */}
            <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
                    <Hero />
                    <SideBar isMobile={isMobile} />
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-[#0a0a0a] to-transparent pointer-events-none"></div>
        </SectionReveal>
    );
};

export default Profile;