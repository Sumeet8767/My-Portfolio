import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, About, Skills, Education, Experience, Projects, Contact, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-dark overflow-x-hidden">

        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 bg-transparent">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-10">
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App