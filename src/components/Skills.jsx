import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { skills } from '../constants'
import SectionWrapper from './SectionWrapper'

const Skills = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">What I Know</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Skills.</h2>
      </Motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((group, i) => (
          <Motion.div key={group.category} variants={fadeIn('up', i * 0.1)}>
            <h3 className="text-white font-bold text-lg mb-1">{group.category}</h3>
            <div className="w-full h-px bg-white/10 mb-4" />
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => (
                <Motion.div
                  key={skill}
                  variants={scaleIn(j * 0.05)}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="bg-white/5 border border-white/10 hover:border-primary/50
                    hover:text-primary text-gray-300 px-5 py-2 rounded-full text-sm
                    font-medium transition-colors duration-200 cursor-default"
                >
                  {skill}
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Skills, 'skills')