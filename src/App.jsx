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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans relative overflow-x-hidden">
      {/* === FUTURISTIC GLOW EFFECTS === */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* **Holographic Grid Background** */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-30"></div>

        {/* **Neon Glow Spots** */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[90px] animate-pulse"></div>

        {/* **Floating Holographic Particles** */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10">
        <Navbar />

        {/* **Smooth Scroll Sections** */}
        <div className="space-y-28 md:space-y-36 lg:space-y-44 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <section id="home" className="scroll-mt-24">
            <Profile />
          </section>

          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="exp2" className="scroll-mt-24">
            <Exp2 />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="services" className="scroll-mt-24">
            <Services />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>

        <Footer />
      </div>

      {/* === GLOBAL ANIMATIONS === */}
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default App;