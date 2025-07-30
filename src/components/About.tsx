import React from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import AnimatedText from './AnimatedText'
import profileimage from '../assets/profile_img.jpg'
interface AboutProps {
  darkMode: boolean
}
const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className={`py-20 w-full relative ${darkMode ? '' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? '' : 'text-gray-800'}`}
            >
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                About
              </span>{' '}
              Me
            </h2>
            <div
              className={`h-1 w-20 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mx-auto rounded-full`}
            ></div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            className="col-span-1 flex justify-center"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="relative w-64 h-64">
              <div
                className={`absolute inset-0 rounded-full border-2 ${darkMode ? 'border-blue-400' : 'border-blue-600'} animate-pulse`}
              ></div>
              <div
                className={`absolute inset-2 rounded-full overflow-hidden border-4 ${darkMode ? 'border-[#050A18]' : 'border-white/80'}`}
              >
                <img
                  src={profileimage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${darkMode ? '' : 'text-gray-800'}`}
            >
              Computer Science Undergraduate
            </h3>
            <p
              className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}
            >
              As a Computer Science undergraduate with a strong foundation in
              technologies such as SQL, Python, React.js, Java, HTML, CSS,
              JavaScript, Figma, Linux and WordPress, I am particularly
              passionate about mobile and web application development. I combine
              technical expertise with creativity and problem-solving skills to
              design and build intuitive, user-friendly digital solutions.
            </p>
            <p
              className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}
            >
              My experience working on collaborative projects has honed my
              abilities in teamwork, leadership, and effective communication. I
              am eager to apply my academic knowledge and technical skills in a
              professional software development environment, where I can
              continue learning and contribute to impactful, innovative
              projects.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2">
                <MapPinIcon
                  size={20}
                  className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                />
                <span className={darkMode ? '' : 'text-gray-800'}>
                  Colombo, Sri Lanka
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon
                  size={20}
                  className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                />
                <span className={darkMode ? '' : 'text-gray-800'}>
                  vibodhakasun01@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon
                  size={20}
                  className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                />
                <span className={darkMode ? '' : 'text-gray-800'}>
                  +94 (77) 528 8804
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default About
