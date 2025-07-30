import React from 'react'
import { motion } from 'framer-motion'
import {
  CalendarIcon,
  GraduationCapIcon,
  AwardIcon,
  ClipboardCheckIcon,
} from 'lucide-react'
import AnimatedText from './AnimatedText'
interface EducationProps {
  darkMode: boolean
}
const Education = ({ darkMode }: EducationProps) => {
  const educationData = [
    {
      institution: 'University of Westminster - London, UK',
      degree: 'BSc in Computer Science - Undergraduate',
      duration: '2023 - Present',
      icon: (
        <GraduationCapIcon
          size={24}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      institution: 'Informatics Institute of Technology - Colombo 06',
      degree: 'Foundation Certificate in Higher Education - IT',
      duration: '2022 - 2023',
      icon: (
        <GraduationCapIcon
          size={24}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      institution: 'OKI International School - Wattala, Gampaha',
      degree: "G.C.E. Ordinary Level Examination - 2018 | 5 C's and 3B's",
      duration: '2007 - 2018',
      icon: (
        <GraduationCapIcon
          size={24}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
  ]
  const certificationData = [
    {
      title: 'Professional Certificate in Web Development',
      issuer: 'Informatics Institute of Technology - Colombo 06',
      year: '2022',
      icon: (
        <AwardIcon
          size={24}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      title: 'Certificate of Course Completion | Learning Java 17',
      issuer: 'LinkedIn Learning',
      year: '2023',
      icon: (
        <AwardIcon
          size={24}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
  ]
  const extraCurricularData = [
    {
      title: 'Member | Club of Informatics Institute of Technology',
      duration: '2024 - Present',
      icon: (
        <ClipboardCheckIcon
          size={18}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      title: 'Volunteering | Leo District 306 A1',
      duration: '2024 - Present',
      icon: (
        <ClipboardCheckIcon
          size={18}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      title:
        'Organizing Committee "Beyond 24" | Leo Club of Informatics Institute of Technology',
      duration: '2024',
      icon: (
        <ClipboardCheckIcon
          size={18}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
    {
      title:
        'Volunteering | Stage Craft 24 | Informatics Institute of Technology',
      duration: '2024',
      icon: (
        <ClipboardCheckIcon
          size={18}
          className={darkMode ? 'text-blue-400' : 'text-blue-600'}
        />
      ),
    },
  ]
  return (
    <section id="education" className="py-20 w-full relative">
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
                Education &
              </span>{' '}
              Certifications
            </h2>
            <div
              className={`h-1 w-20 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mx-auto rounded-full`}
            ></div>
          </motion.div>
        </div>
        <div className="mb-8 text-center">
          <AnimatedText
            text="My academic journey and professional qualifications that have shaped my knowledge and skills."
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
            once={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCapIcon
                size={24}
                className={darkMode ? 'text-blue-400' : 'text-blue-600'}
              />
              <h3
                className={`text-2xl font-bold ${darkMode ? '' : 'text-gray-800'}`}
              >
                Education
              </h3>
            </div>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:w-px before:h-full ${darkMode ? 'before:bg-blue-400/30' : 'before:bg-blue-600/30'}`}
                >
                  <span
                    className={`absolute left-0 top-0 w-6 h-6 rounded-full ${darkMode ? 'bg-[#111827]' : 'bg-white'} border-2 ${darkMode ? 'border-blue-400' : 'border-blue-600'} flex items-center justify-center`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    ></span>
                  </span>
                  <h4
                    className={`text-lg font-bold mb-1 ${darkMode ? '' : 'text-gray-800'}`}
                  >
                    {item.institution}
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {item.degree}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}
                  >
                    <CalendarIcon size={14} />
                    <span>{item.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <AwardIcon
                size={24}
                className={darkMode ? 'text-blue-400' : 'text-blue-600'}
              />
              <h3
                className={`text-2xl font-bold ${darkMode ? '' : 'text-gray-800'}`}
              >
                Certifications
              </h3>
            </div>
            <div className="space-y-8 mb-12">
              {certificationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`${darkMode ? 'bg-[#111827]/50' : 'bg-white/70 shadow-md'} backdrop-blur-sm p-6 rounded-lg`}
                >
                  <h4
                    className={`text-lg font-bold mb-1 ${darkMode ? '' : 'text-gray-800'}`}
                  >
                    {item.title}
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {item.issuer}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}
                  >
                    <CalendarIcon size={14} />
                    <span>{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ClipboardCheckIcon
                  size={24}
                  className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                />
                <h3
                  className={`text-xl font-bold ${darkMode ? '' : 'text-gray-800'}`}
                >
                  Extra-Curricular Activities
                </h3>
              </div>
              <div className="space-y-4">
                {extraCurricularData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1">{item.icon}</span>
                    <div>
                      <p
                        className={`text-sm ${darkMode ? '' : 'text-gray-800'}`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}
                      >
                        {item.duration}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Education
