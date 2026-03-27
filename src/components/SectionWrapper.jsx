import { motion as Motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  const HOC = () => (
    <Motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative z-0"
      id={idName}
    >
      <Component />
    </Motion.section>
  )

  HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`
  return HOC
}

export default SectionWrapper