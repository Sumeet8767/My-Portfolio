import { motion as Motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../utils/motion'
import { projects } from '../constants'
import SectionWrapper from './SectionWrapper'
import { ExternalLink } from 'lucide-react'

/* 🔹 SMALL CARD */
const ProjectCard = ({ project, index }) => (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="block group h-full"
  >
    <Motion.div
      variants={scaleIn(index * 0.15)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative glass rounded-2xl p-5 flex flex-col gap-3
        border border-white/10 hover:border-primary/40 transition-all duration-300 h-full"
    >
      {/* 🔗 ICON */}
      <ExternalLink
        size={16}
        className="absolute top-3 right-3 text-gray-400 group-hover:text-white transition"
      />

      <p className="text-gray-500 text-xs">0{index + 1}</p>
      <p className="text-gray-400 text-xs">{project.category}</p>

      <h3 className="text-white font-medium text-lg">
        {project.name}
      </h3>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 border border-white/10 rounded-md text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Motion.div>
  </a>
)

const Projects = () => {

  // ✅ AUTO LOGIC
  const hasMultiple = projects.length > 1
  const featured = hasMultiple ? projects[0] : null
  const others = hasMultiple ? projects.slice(1) : projects

  return (
    <div className="px-6 md:px-16 py-20 max-w-6xl xl:max-w-7xl mx-auto">

      {/* Heading */}
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">
          My Work
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">
          Projects.
        </h2>
      </Motion.div>

      {/* 🔥 RESPONSIVE GRID */}
      <Motion.div
        className="mt-10 grid gap-4 sm:gap-6 lg:gap-8
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        variants={fadeIn('up', 0.2)}
      >

        {/* 🔥 FEATURED (ONLY IF MULTIPLE PROJECTS) */}
        {featured && (
          <a
            href={featured.github}
            target="_blank"
            rel="noreferrer"
            className="block group relative glass rounded-2xl p-6 md:p-8
            border border-white/10 hover:border-primary/40
            transition-all duration-300 hover:scale-[1.01]
            col-span-1 md:col-span-2 lg:col-span-2"
          >

            <ExternalLink
              size={18}
              className="absolute top-4 right-4 text-gray-400 group-hover:text-white transition"
            />

            <p className="text-gray-500 text-sm mb-2">01</p>

            <p className="text-gray-400 text-sm mb-4">
              {featured.category}
            </p>

            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              {featured.name}
            </h3>

            <p className="text-gray-400 max-w-full md:max-w-xl leading-relaxed mb-6">
              {featured.shortDescription}
            </p>

            <div className="flex gap-2 flex-wrap">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-md border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

          </a>
        )}

        {/* 🔹 OTHER PROJECTS (OR ALL IF ONLY ONE) */}
        {others.map((project, index) => (
          <div key={project.name} className="col-span-1">
            <ProjectCard project={project} index={index} />
          </div>
        ))}

      </Motion.div>
    </div>
  )
}

export default SectionWrapper(Projects, 'projects')