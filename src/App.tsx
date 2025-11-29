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
      <footer className="fixed bottom-2 left-0 right-0 flex justify-center z-[1000] pointer-events-auto">
        <div className="inline-flex items-center gap-2">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs rounded-full border shadow-sm backdrop-blur-sm transition-colors bg-white/80 border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-white dark:bg-gray-900/70 dark:border-white/10 dark:text-gray-300 dark:hover:text-white"
          >
            备案号：蜀ICP备2024097797号-2
          </a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=51170202000478"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-xs rounded-full border shadow-sm backdrop-blur-sm transition-colors bg-white/80 border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-white dark:bg-gray-900/70 dark:border-white/10 dark:text-gray-300 dark:hover:text-white"
          >
            <img src="/imgs/gonganbeian.png" alt="公安备案图标" className="w-4 h-4" loading="lazy" />
            川公网安备51170202000478号
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
