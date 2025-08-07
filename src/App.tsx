import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </>
  );
}

export default App;
