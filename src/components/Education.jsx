import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { education } from '../constants'
import SectionWrapper from './SectionWrapper'

const Education = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">Academic Background</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Education.</h2>
      </Motion.div>

      <div className="mt-12 flex flex-col gap-4">
        {education.map((edu, i) => (
          <Motion.div
            key={edu.degree}
            variants={scaleIn(i * 0.1)}
            className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                <p className="text-primary font-medium mt-1">{edu.institution}</p>
              </div>
              <div className="md:text-right">
                <p className="text-gray-400 text-sm">{edu.duration}</p>
                <p className="text-white font-semibold text-sm mt-1">{edu.grade}</p>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Education, 'education')