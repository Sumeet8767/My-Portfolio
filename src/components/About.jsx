import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import SectionWrapper from './SectionWrapper'
import profileImg from '../assets/profile.jpg'

const About = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">Introduction</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">About Me.</h2>
      </Motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">

        {/* Photo */}
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

        {/* Text */}
        <Motion.div className="flex-1" variants={fadeIn('left', 0.2)}>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Sumeet Ghige</span>, a Computer Science
            student at MIT-ADT University (B.Tech CSE - AI & Applications), with a strong focus on
            <span className="text-primary"> AI, Machine Learning, and software development</span>.
            I've built real-world systems like a Brain-Computer Interface using EEG + ML,
            and a TB detection model using deep learning.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Currently interning at <span className="text-white font-semibold">IS360 Technologies</span>,
            working on signal processing and hardware integration. Actively looking for
            opportunities to grow as a developer and engineer.
          </p>

          <Motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            variants={fadeIn('up', 0.3)}
          >
            {[
              { title: "2+", subtitle: "Projects Built" },
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
    </div>
  )
}

export default SectionWrapper(About, 'about')