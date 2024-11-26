import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Tesimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />

      <Skill />
      <Tesimonials />

      <Projects />

      {/* <Experience /> */}

      <Gallery />

      <Contact />

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
