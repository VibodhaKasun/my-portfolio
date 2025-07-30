import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react'
interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}
const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Determine which section is currently in view
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'education',
        'contact',
      ]
      const currentPosition = window.scrollY + 300 // Offset to trigger earlier
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= currentPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i])
          }
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])
  const navItems = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Education',
      href: '#education',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]
  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-[#050A18]/80 backdrop-blur-md py-3' : 'bg-white/80 backdrop-blur-md shadow-sm py-3') : 'py-5'}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-bold text-2xl`}
        >
          KASUN.
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors ${activeSection === item.href.substring(1) ? (darkMode ? 'text-blue-400' : 'text-blue-600') : darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'} transition-colors`}
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`p-2 mr-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'} transition-colors`}
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'} transition-colors`}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className={`md:hidden ${darkMode ? 'bg-[#050A18]/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'}`}
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`py-2 transition-colors ${activeSection === item.href.substring(1) ? (darkMode ? 'text-blue-400' : 'text-blue-600') : darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
export default Navbar
