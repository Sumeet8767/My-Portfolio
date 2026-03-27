import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { projects } from '../constants'
import SectionWrapper from './SectionWrapper'

const ProjectCard = ({ project, index }) => (
  <Motion.div
    variants={scaleIn(index * 0.15)}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="glass rounded-2xl p-6 flex flex-col gap-4
      border border-white/10 hover:border-primary/40 transition-all duration-300"
  >
    <h3 className="text-white font-bold text-xl">{project.name}</h3>
    <p className="text-gray-400 text-sm flex-1 leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-4 mt-2">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
      >
        GitHub →
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-primary hover:text-white transition-colors font-medium"
      >
        Live Demo →
      </a>
    </div>
  </Motion.div>
)

const Projects = () => {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">My Work</p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Projects.</h2>
      </Motion.div>

      <Motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={fadeIn('up', 0.2)}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </Motion.div>
    </div>
  )
}

export default SectionWrapper(Projects, 'projects')