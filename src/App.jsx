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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-10"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="space-y-24 md:space-y-32 lg:space-y-40 py-12">
          <Profile />
          <About />
          <Skills />
          <Exp2 />
          <Projects />
          <Services />
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;