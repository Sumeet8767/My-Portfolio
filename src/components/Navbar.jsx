import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full flex items-center py-5 px-6 md:px-16 fixed top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(''); window.scrollTo(0, 0) }}
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-white text-lg">
            P
          </div>
          <span className="text-white font-bold text-lg hidden sm:block">
            Portfolio<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-sm font-medium cursor-pointer transition-colors duration-200 ${
                active === link.title ? 'text-primary' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/5 md:hidden">
          <ul className="flex flex-col p-6 gap-4 list-none">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  active === link.title ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => { setActive(link.title); setMenuOpen(false) }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar