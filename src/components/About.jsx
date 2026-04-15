import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import SectionWrapper from './SectionWrapper'
import profileImg from '../assets/profile.jpg'

const About = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

      {/* Heading */}
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">
          Introduction
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">
          About Me.
        </h2>
      </Motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">

        {/* IMAGE*/}
        <Motion.div
          variants={fadeIn('right', 0.2)}
          className="flex-shrink-0"
        >
          <div className="relative w-72 h-62 md:w-54 md:h-84">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-300 blur-lg opacity-30" />
            <img
              src={profileImg}
              alt="Sumeet Ghige"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/40"
            />
          </div>
        </Motion.div>

        {/* TEXT */}
        <Motion.div className="flex-1" variants={fadeIn('left', 0.2)}>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Sumeet Ghige</span>, an AI Developer and
            Full Stack Engineer specializing in
            <span className="text-primary"> Machine Learning, Computer Vision, and intelligent systems</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            I’ve built real-world applications including a Brain-Computer Interface using EEG + ML
            and a TB detection system using deep learning. I enjoy solving meaningful problems and
            turning ideas into functional, impactful products.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Completed an internship at <span className="text-white font-semibold">IS360 Technologies</span>, 
          gaining hands-on experience in signal processing and system-level integration.
          </p>

          {/* STATS */}
          <Motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            variants={fadeIn('up', 0.3)}
          >
            {[
              { title: "5+", subtitle: "Projects Built" },
              { title: "7.40", subtitle: "CGPA" },
              { title: "2+", subtitle: "Certifications" },
              { title: "1+", subtitle: "Internship" },
            ].map((stat, i) => (
              <Motion.div
                key={stat.subtitle}
                variants={scaleIn(i * 0.1)}
                className="glass rounded-2xl p-4 text-center border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <h3 className="text-primary font-bold text-2xl">{stat.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{stat.subtitle}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

      </div>

      {/* 🔥 WHY HIRE ME (NEW SECTION) */}
      <Motion.div
        variants={fadeIn('up', 0.4)}
        className="mt-16 glass p-8 rounded-2xl border border-white/10"
      >
        <h3 className="text-white text-2xl font-semibold mb-6">
          Why Hire Me
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 text-gray-300 text-sm">

          <p>✔ Built real-world AI & ML systems</p>
          <p>✔ Strong full-stack development skills</p>
          <p>✔ Experience with end-to-end project development</p>
          <p>✔ Focus on solving real-world problems</p>
          <p>✔ Quick learner with strong adaptability</p>
          <p>✔ Passionate about building impactful products</p>

        </div>
      </Motion.div>

    </div>
  )
}

export default SectionWrapper(About, 'about')