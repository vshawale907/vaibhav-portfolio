
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <Navbar />
      {/* Use native page scroll; keep snap if desired */}
      <main className="snap-y snap-mandatory">
        <section id="home" className="snap-start min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <Home />
        </section>
        <section id="about" className="snap-start min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <About />
        </section>
        <section id="services" className="snap-start min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <Services />
        </section>
        <section id="portfolio" className="snap-start min-h-screen w-full px-3 sm:px-4 lg:px-6">
          <Portfolio />
        </section>
        <section id="contact" className="snap-start min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
