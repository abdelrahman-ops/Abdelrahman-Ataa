// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to My Portfolio</h1>
        <p className="text-center">This is where you can showcase your work and skills.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
