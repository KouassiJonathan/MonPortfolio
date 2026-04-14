
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import Footer from "./pages/footer"
import Hero from "./pages/hero"
import Navbar from "./components/navbar"
import Project from "./pages/project"
import Skills from "./pages/skills"

import{BrowserRouter,Routes,Route} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PagesNotFound from "./pages/PagesNotFound"

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
