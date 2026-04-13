
import About from "./components/about"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Project from "./components/project"
import Skills from "./components/skills"
import Accueil from "./pages/accueil"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PagesNotFound from "./components/PagesNotFound"

function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });

    AOS.refresh();
  }, []);
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills />} />
            <Route path="/*" element={<PagesNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
