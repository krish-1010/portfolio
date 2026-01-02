import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Tesimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Gallery from "./components/Gallery";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Reviews from "./components/Reviews";
import Links from "./components/Links";
function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      // Delay scroll to wait for components to mount
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -90, // adjust based on your fixed navbar height
        });
      }, 100); // short delay ensures DOM is ready
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/links" element={<Links />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Skill />
                <Tesimonials />
                <Projects />
                <Gallery />
                <Reviews />
                <Contact />
                <BackToTop />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
