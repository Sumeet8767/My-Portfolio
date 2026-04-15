import { motion as Motion } from 'framer-motion'
import { BallCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-dark to-dark" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 max-w-7xl mx-auto">

        {/* LEFT — TEXT */}
        <Motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Building Intelligent Systems • AI & Full Stack
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-[90px] font-serif leading-none text-white tracking-tight">
            Sumeet
          </h1>

          <h1 className="text-6xl md:text-7xl lg:text-[90px] font-serif leading-none tracking-tight
            text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Ghige
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl italic max-w-xl">
            "I build intelligent systems — across AI, data, and real-world applications."
          </p>

          <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
            Focused on Machine Learning, Computer Vision, and full-stack development,
            building impactful systems that solve real-world problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["AI Developer", "ML Engineer", "Full Stack", "Problem Solver"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm rounded-md border border-white/10 text-gray-300 hover:border-primary/40 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          <Motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/Sumeet8767"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-7 rounded-xl transition flex items-center gap-2"
            >
              GitHub →
            </a>
            <a
              href="#projects"
              className="glass text-white font-semibold py-3 px-7 rounded-xl border border-white/10 hover:border-primary/50 transition"
            >
              Projects →
            </a>
            <a
              href="#contact"
              className="glass text-white font-semibold py-3 px-7 rounded-xl border border-white/10 hover:border-primary/50 transition"
            >
              Contact →
            </a>
          </Motion.div>
        </Motion.div>

        {/* RIGHT — 3D */}
        <Motion.div
          className="flex-1 w-full h-[350px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <BallCanvas />
        </Motion.div>
      </div>

      {/* Scroll indicator */}
      <Motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <Motion.div
          className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent rounded-full"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Motion.div>

    </section>
  )
}

export default Hero