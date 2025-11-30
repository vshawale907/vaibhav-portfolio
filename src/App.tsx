
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (

    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      {/* add top padding to avoid fixed navbar overlapping section content */}
      <main className="relative snap-y snap-mandatory pt-28">
        <section id="home" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Home />
          </div>
        </section>
        <section id="about" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <About />
          </div>
        </section>
        <section id="experience" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Experience />
          </div>
        </section>
        <section id="portfolio" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <Portfolio />
          </div>
        </section>
        <section id="services" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Services />
          </div>
        </section>
        <section id="contact" className="snap-start min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
