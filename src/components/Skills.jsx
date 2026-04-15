import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { skills } from '../constants'
import SectionWrapper from './SectionWrapper'

const Skills = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

      {/* Heading */}
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase opacity-80">
          What I Know
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">
          Skills.
        </h2>
      </Motion.div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {skills.map((group, i) => (

          <Motion.div
            key={group.category}
            variants={fadeIn('up', i * 0.1)}
            className={`rounded-2xl p-5 border border-white/10 transition-all duration-300
              ${group.category.includes("AI") ? "bg-primary/5 border-primary/20" : "bg-white/5"}
            `}
          >

            {/* Category */}
            <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">
              {group.category}
            </h3>

            <div className="w-full h-px bg-white/10 mb-4" />

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => (
                <Motion.div
                  key={skill}
                  variants={scaleIn(j * 0.05)}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="group bg-white/5 border border-white/10
                    hover:border-primary hover:bg-primary/10
                    text-gray-300 px-4 py-2 rounded-full text-sm
                    flex items-center gap-2
                    transition-all duration-200 cursor-default"
                >

                  {/* Dot indicator */}
                  <span className="w-2 h-2 rounded-full bg-primary opacity-70 group-hover:opacity-100" />

                  {/* Skill text */}
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