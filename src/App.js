// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skill from "./components/Skills";
// import Tesimonials from "./components/Testimonials";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import BackToTop from "./components/BackToTop";
// // import Experience from "./components/Experience";
// import Gallery from "./components/Gallery";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <About />

//       <Skill />
//       <Tesimonials />

//       <Projects />

//       {/* <Experience /> */}

//       <Gallery />

//       <Contact />

//       <Footer />
//       <BackToTop />
//     </div>
//   );
// }

// export default App;

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

// Import your new pages
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUsPage from "./pages/ContactUsPage"; // (if you created a separate "Contact Us" policy page)

function App() {
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
                <Contact />
              </>
            }
          />

          {/* Policy Pages Routes */}
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-delivery" element={<ShippingAndDelivery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
