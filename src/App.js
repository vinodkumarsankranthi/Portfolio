import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Experiance from "./components/experiance/experiance";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About />
     <Skills />
     <Experiance />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
