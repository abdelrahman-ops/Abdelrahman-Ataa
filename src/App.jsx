import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Exp2 from './pages/Exp2';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono relative overflow-x-hidden">
      {/* Futuristic background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyNTUsIDAsIDI1NSwgMC4wMikiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-5"></div>
        
        {/* Glowing cyberpunk accents */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        
        {/* Binary code floating animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-green-400/10 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatUp ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Math.random().toString(2).substring(2, 10)}
            </div>
          ))}
        </div>
      </div>

      {/* Main content container with consistent padding */}
      <div className="">
        <Navbar />
        
        {/* Sections with uniform spacing */}
        <div className="space-y-28 md:space-y-36 lg:space-y-44 py-8 md:py-12">
          <section id="home" className="pt-4">
            <Profile />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="exp2">
            <Exp2 />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
        
        <Footer />
      </div>

      {/* Global styles for animations */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;