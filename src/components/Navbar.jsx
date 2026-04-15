import { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Auto active link on scroll
  useEffect(() => {
    const handleScrollActive = () => {
      let current = ''

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = link.id
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScrollActive)
    return () => window.removeEventListener('scroll', handleScrollActive)
  }, [])

  return (
    <nav className="w-full flex items-center py-4 px-6 md:px-16 fixed top-0 z-50 
    bg-black/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300">

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <button
          onClick={() => {
            setActive('')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center 
          font-bold text-white text-lg shadow-lg shadow-primary/40">
            S
          </div>

          <span className="text-white font-bold text-lg hidden sm:block">
            Sumeet<span className="text-primary">.</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.id} className="group">
              <button 
                // onClick={() => handleScroll(link.id)}
                onClick={() => navigate(link.path)}
                className={`relative text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${
                  active === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.title}

                {/* Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] w-full bg-primary transform transition-transform duration-300 origin-left ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
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
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 md:hidden">
          <ul className="flex flex-col p-6 gap-5 list-none">
            {navLinks.map((link) => (
              <li key={link.path}>
                <button
                  // 
                  // onClick={() => handleScroll(link.path)}
                  onClick={() => navigate(link.path)}
                  className={`text-sm font-medium w-full text-left transition ${
                    active === link.id
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar