import { motion as Motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  const HOC = () => (
    <div id={idName} style={{ scrollMarginTop: '80px' }}>
      <Motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-0"
      >
        <Component />
      </Motion.section>
    </div>
  )

  HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`
  return HOC
}

export default SectionWrapper