import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import CyberBackground from './components/CyberBackground';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen text-gray-900 dark:text-gray-100 font-poppins relative overflow-x-hidden transition-colors duration-500">
                <CyberBackground />
                
                <div className="relative z-10">
                    <Navbar />

                    <div className="space-y-6 md:space-y-8 lg:space-y-10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <section id="home" className="scroll-mt-24">
                            <Profile />
                        </section>

                        <section id="about" className="scroll-mt-24">
                            <About />
                        </section>

                        <section id="skills" className="scroll-mt-24">
                            <Skills />
                        </section>

                        <section id="journey" className="scroll-mt-24">
                            <Journey />
                        </section>

                        <section id="projects" className="scroll-mt-24">
                            <Projects />
                        </section>

                        <section id="contact" className="scroll-mt-24">
                            <Contact />
                        </section>
                    </div>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;