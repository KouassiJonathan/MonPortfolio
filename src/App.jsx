
import About from "./components/about"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Project from "./components/project"
import Skills from "./components/skills"
import Accueil  from "./pages/accueil"
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
} 

export default App
