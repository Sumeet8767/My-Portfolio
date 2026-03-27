const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full px-6 md:px-16 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">
            S
          </div>
          <span className="text-white font-bold">
            Sumeet<span className="text-primary">.</span>
          </span>
        </div>

        {/* Center */}
        <p className="text-gray-500 text-sm text-center">
          © {currentYear} Sumeet Ghige. Built with React, Three.js & Tailwind.
        </p>

        {/* Right — Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Sumeet8767"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumeet-ghige-35069b274/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-primary text-sm transition-colors"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer