import { motion as Motion } from 'framer-motion'
import { BallCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-dark to-dark" />

      {/* Purple glow behind sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 max-w-7xl mx-auto pt-20">

        {/* Left — Text */}
        <Motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              AI Developer • Full Stack Engineer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-300">
              Sumeet
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-5 max-w-xl leading-relaxed">
            I’m a developer passionate about building intelligent systems and modern web applications using AI, data, and design.
          </p>

          <div className="mt-4 text-gray-400 text-sm space-y-1">
            <p>✔ Built AI/ML and Brain-Computer Interface projects</p>
            <p>✔ Hands-on experience with React, Python, and real-world apps</p>
            <p>✔ Strong focus on problem-solving and learning by building</p>
          </div>
          <Motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="https://github.com/Sumeet8767"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/sumeet-ghige-35069b274/"
              target="_blank"
              rel="noreferrer"
              className="glass text-white font-semibold py-3 px-8 rounded-xl hover:border-primary/50 transition-all duration-200"
            >
              LinkedIn →
            </a>
            <a
              href="#contact"
              className="glass text-white font-semibold py-3 px-8 rounded-xl hover:border-primary/50 transition-all duration-200"
            >
              Hire Me →
            </a>
          </Motion.div>
        </Motion.div>

        {/* Right — 3D Canvas */}
        <Motion.div
          className="flex-1 w-full h-[400px] md:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <BallCanvas />
        </Motion.div>
      </div>

      {/* Scroll indicator */}
      <Motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <Motion.div
          className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent rounded-full"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Motion.div>

    </section>
  )
}

export default Hero
