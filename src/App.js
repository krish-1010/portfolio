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
          offset: -92, // adjust based on your fixed navbar height
        });
      }, 100); // short delay ensures DOM is ready
    }
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Navbar will be seen on every route */}
        <Navbar />

        <Routes>
          {/* Root/Home Route: contains your existing main-page components */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skill />
                <Tesimonials />
                <Projects />
                <Gallery />
                <Reviews />
                <Contact />
              </>
            }
          />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
