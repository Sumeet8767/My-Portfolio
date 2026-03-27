import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { experience, certifications } from '../constants'
import SectionWrapper from './SectionWrapper'

const Experience = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">What I've Done</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Experience.</h2>
      </Motion.div>

      <div className="mt-12 flex flex-col gap-4">
        {experience.map((exp, i) => (
          <Motion.div
            key={exp.company}
            variants={scaleIn(i * 0.1)}
            className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                <p className="text-primary font-medium mt-1">{exp.company}</p>
              </div>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {exp.points.map((point, j) => (
                <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </div>

      <Motion.div variants={fadeIn('up', 0.2)} className="mt-16">
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">Achievements</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Certifications.</h2>
        <div className="mt-6 flex flex-col gap-3">
          {certifications.map((cert, i) => (
            <Motion.div
              key={cert}
              variants={scaleIn(i * 0.1)}
              className="glass rounded-xl px-6 py-4 border border-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-gray-300 text-sm">
                <span className="text-primary mr-2">✓</span>
                {cert}
              </p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </div>
  )
}

export default SectionWrapper(Experience, 'experience')