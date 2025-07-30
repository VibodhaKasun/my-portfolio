import React from 'react'
import { motion } from 'framer-motion'
import {
  DatabaseIcon,
  CodeIcon,
  Globe2Icon,
  ServerIcon,
  LayoutIcon,
  PenToolIcon,
  UsersIcon,
  BrainIcon,
  BarChartIcon,
  Users2Icon,
  PuzzleIcon,
  MessageSquareIcon,
} from 'lucide-react'
import AnimatedText from './AnimatedText'

interface SkillsProps {
  darkMode: boolean
}

const Skills = ({ darkMode }: SkillsProps) => {
  const technicalSkills = [
    { name: 'SQL', icon: <DatabaseIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Python', icon: <CodeIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'React.js', icon: <CodeIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Java', icon: <ServerIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'HTML', icon: <Globe2Icon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'CSS', icon: <LayoutIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'JavaScript', icon: <CodeIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Figma', icon: <PenToolIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'WordPress', icon: <Globe2Icon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Linux', icon: <ServerIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Firebase', icon: <ServerIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
  ]

  const softSkills = [
    { name: 'Creativity', icon: <PenToolIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Leadership', icon: <UsersIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Management', icon: <BarChartIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Team Work', icon: <Users2Icon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Problem Solving', icon: <PuzzleIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
    { name: 'Communication', icon: <MessageSquareIcon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> },
  ]

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section id="skills" className="py-20 w-full relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? '' : 'text-gray-800'}`}>
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>My</span> Skills
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mx-auto rounded-full`} />
          </motion.div>
        </div>

        <div className="mb-8 text-center">
          <AnimatedText
            text="A comprehensive set of technical and soft skills that I've developed through education, projects, and experiences."
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
            once={true}
          />
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? '' : 'text-gray-800'}`}>Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`cursor-target ${darkMode ? 'bg-[#111827]/50 hover:bg-[#1a2234]/70' : 'bg-white/70 hover:bg-white/90 shadow-md'} backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center transition-colors`}
              >
                <div className="mb-4">{skill.icon}</div>
                <p className={darkMode ? '' : 'text-gray-800'}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? '' : 'text-gray-800'}`}>Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`cursor-target ${darkMode ? 'bg-[#111827]/50 hover:bg-[#1a2234]/70' : 'bg-white/70 hover:bg-white/90 shadow-md'} backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center transition-colors`}
              >
                <div className="mb-4">{skill.icon}</div>
                <p className={darkMode ? '' : 'text-gray-800'}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills