import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Hero from './components/Hero';
import Profile from './pages/Profile';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';




function App() {
	return (
		<>
			<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#F5F5F5] font-maven">
				<Navbar />
				<Profile />
				<About />
				<Skills />
				<Projects />
				<Services />
				<Contact />
				<Footer />
			</div>
			
		</>
		
	);
}

export default App;
