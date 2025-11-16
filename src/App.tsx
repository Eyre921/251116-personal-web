import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Knowledge from './components/Knowledge'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
