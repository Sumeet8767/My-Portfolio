
import { Navbar, Hero, About, Skills, Education, Experience, Projects, Contact, Footer } from './components'
import CustomCursor from "./components/CustomCursor"
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* 🔥 CUSTOM CURSOR (ADD HERE) */}
      <CustomCursor />

     <Footer />
    </BrowserRouter>
  )
}

export default App