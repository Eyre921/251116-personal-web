import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Knowledge from './components/Knowledge'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Knowledge />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
