import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { CodeIcon, GlobeIcon, PenToolIcon } from 'lucide-react'
interface HeroProps {
  darkMode: boolean
}
const Hero = ({ darkMode }: HeroProps) => {
  return (
    <section
      id="home"
      className={`min-h-screen w-full flex flex-col justify-center items-center relative pt-16 ${darkMode ? '' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="mb-4"
        >
          <p
            className={`text-lg md:text-xl mb-2 ${darkMode ? '' : 'text-gray-700'}`}
          >
            Hello, I'm
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
              Vibodha
            </span>{' '}
            Kasun
          </h1>
          <h2
            className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Computer Science Undergraduate
          </h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="max-w-2xl mx-auto mb-8"
        >
          <AnimatedText
            text="Passionate about mobile and web application development, combining technical expertise with creativity and problem-solving skills to build intuitive, user-friendly digital solutions."
            className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg`}
          />
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          <div
            className={`${darkMode ? 'bg-[#111827]/50' : 'bg-white/70 shadow-md'} backdrop-blur-sm px-5 py-2 rounded-full flex items-center gap-2`}
          >
            <CodeIcon
              size={18}
              className={darkMode ? 'text-blue-400' : 'text-blue-600'}
            />
            <span className={darkMode ? '' : 'text-gray-800'}>React.js</span>
          </div>
          <div
            className={`${darkMode ? 'bg-[#111827]/50' : 'bg-white/70 shadow-md'} backdrop-blur-sm px-5 py-2 rounded-full flex items-center gap-2`}
          >
            <GlobeIcon
              size={18}
              className={darkMode ? 'text-blue-400' : 'text-blue-600'}
            />
            <span className={darkMode ? '' : 'text-gray-800'}>
              Web Development
            </span>
          </div>
          <div
            className={`${darkMode ? 'bg-[#111827]/50' : 'bg-white/70 shadow-md'} backdrop-blur-sm px-5 py-2 rounded-full flex items-center gap-2`}
          >
            <PenToolIcon
              size={18}
              className={darkMode ? 'text-blue-400' : 'text-blue-600'}
            />
            <span className={darkMode ? '' : 'text-gray-800'}>
              UI/UX Design
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
        >
            <a
                href="#projects"
                className={`cursor-target ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-md transition-all transform hover:scale-105`}
            >
                View My Work
            </a>
            <a
                href="#contact"
                className={`cursor-target bg-transparent ${darkMode ? 'border border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border border-blue-600 text-blue-600 hover:bg-blue-100'} px-6 py-3 rounded-md transition-all transform hover:scale-105`}
            >
                Contact Me
            </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <p
          className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          * Scroll Down *
        </p>
        <div className="mt-2 flex justify-center">
          <div
            className={`w-5 h-9 border-2 ${darkMode ? 'border-gray-400' : 'border-gray-600'} rounded-full flex justify-center`}
          >
            <div
              className={`w-1 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-600'} rounded-full mt-2 animate-bounce`}
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Hero
