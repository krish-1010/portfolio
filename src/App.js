import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </div>
  );
}

export default App;
