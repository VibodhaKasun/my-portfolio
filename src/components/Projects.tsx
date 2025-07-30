import React from 'react'
import { motion } from 'framer-motion'
import {
  EyeIcon,
  DownloadIcon,
  CodeIcon,
  DatabaseIcon,
  PenToolIcon,
  GlobeIcon,
  ServerIcon,
  BarChart2Icon,
  MapPinIcon,
} from 'lucide-react'
import type { JSX } from 'react'
import AnimatedText from './AnimatedText'

interface ProjectsProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const projects = [
    {
      id: 1,
      title: 'Tech Plus Energy',
      description:
        'Created a website for a company using React.js and Firebase, featuring responsive design and interactive elements.',
      image:
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop',
      tags: ['React.js', 'Firebase', 'Responsive Design'],
      demoUrl: 'https://techplusenergy.lk',
      repoUrl: 'https://github.com/VibodhaKasun/tech-plus-energy',
    },
    
  ]

  const tagIcons: Record<string, JSX.Element> = {
    'React.js': <CodeIcon size={16} />,
    React: <CodeIcon size={16} />,
    'React Native': <CodeIcon size={16} />,
    Firebase: <ServerIcon size={16} />,
    'Responsive Design': <PenToolIcon size={16} />,
    HTML: <GlobeIcon size={16} />,
    CSS: <PenToolIcon size={16} />,
    JavaScript: <CodeIcon size={16} />,
    Java: <ServerIcon size={16} />,
    Database: <DatabaseIcon size={16} />,
    'UI Design': <PenToolIcon size={16} />,
    Python: <CodeIcon size={16} />,
    'Data Visualization': <BarChart2Icon size={16} />,
    Twitter: <GlobeIcon size={16} />,
    'Node.js': <ServerIcon size={16} />,
    MongoDB: <DatabaseIcon size={16} />,
    Charts: <BarChart2Icon size={16} />,
    'Maps API': <MapPinIcon size={16} />,
  }

  return (
    <section id="projects" className="py-20 w-full relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? '' : 'text-gray-800'}`}>
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>My</span> Projects
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mx-auto rounded-full`}></div>
          </motion.div>
        </div>
        <div className="mb-8 text-center">
          <AnimatedText
            text="A showcase of my recent work, demonstrating my skills in web development, application design, and problem-solving."
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
            once={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${darkMode ? 'bg-[#111827]/50' : 'bg-white/70 shadow-md'} backdrop-blur-sm rounded-lg overflow-hidden group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full`}
                    >
                      <EyeIcon size={20} />
                    </motion.a>
                  )}
                  {project.repoUrl && (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full`}
                    >
                      <DownloadIcon size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? '' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className={`${darkMode ? 'bg-[#1a2234]' : 'bg-blue-100'} text-xs px-3 py-1 rounded-full flex items-center gap-1`}
                    >
                      {tagIcons[tag]}
                      <span className={darkMode ? '' : 'text-gray-800'}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects