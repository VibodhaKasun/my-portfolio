import React from 'react'
import { motion } from 'framer-motion'
import { LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react'
interface FooterProps {
  darkMode: boolean
}
const Footer = ({ darkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2
            className={`text-2xl font-bold ${darkMode ? '' : 'text-gray-800'}`}
          >
            V.K.
          </h2>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href="#"
            whileHover={{
              y: -3,
            }}
            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
          >
            <LinkedinIcon size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{
              y: -3,
            }}
            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
          >
            <GithubIcon size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{
              y: -3,
            }}
            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
          >
            <TwitterIcon size={20} />
          </motion.a>
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} - V. K.'s Portfolio</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
