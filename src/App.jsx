import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";

const TRACKING_ID = import.meta.env.VITE_GA_ID;

if (TRACKING_ID && window.location.hostname !== "localhost") {
  ReactGA.initialize(TRACKING_ID);
}
// Helper component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google whenever the path changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.hash,
    });
  }, [location]);

  return null;
};

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
      <PageTracker />
      <div className="App">
        <Routes>
          <Route path="/links" element={<Links />} />
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Krishna | Software Engineer</title>
                  <meta
                    name="description"
                    content="Portfolio of Krishna, a Junior Software Engineer specializing in React, Next.js, and interactive web simulations."
                  />
                  {/* Social Media Previews (Open Graph) */}
                  <meta
                    property="og:title"
                    content="Krishna | Software Engineer"
                  />
                  <meta
                    property="og:description"
                    content="Explore my projects, skills, and developer portfolio."
                  />
                  <meta
                    property="og:image"
                    content="https://mkrishna.dev/my-logo.png"
                  />
                  <meta property="og:url" content="https://mkrishna.dev/" />
                  <meta property="og:type" content="website" />
                </Helmet>

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
