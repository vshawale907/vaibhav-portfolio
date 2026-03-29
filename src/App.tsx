
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Contact from './sections/Contact';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  // Initialise Lenis smooth scroll + GSAP ticker
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white cursor-none">
      {/* Premium custom cursor — hidden on touch devices via internal check */}
      <CustomCursor />

      <Navbar />

      {/* pt-28 prevents fixed navbar from overlapping content */}
      <main className="relative pt-28">
        <section id="home" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Home />
          </div>
        </section>

        <section id="about" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <About />
          </div>
        </section>

        <section id="experience" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Experience />
          </div>
        </section>

        <section id="education" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Education />
          </div>
        </section>

        <section id="portfolio" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <Portfolio />
          </div>
        </section>

        <section id="services" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Services />
          </div>
        </section>

        <section id="contact" className="min-h-screen bg-[#0D0D0D]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
