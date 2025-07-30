import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

interface HomeProps {
  darkMode: boolean
}

const Home = ({ darkMode }: HomeProps) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement || !(targetElement instanceof HTMLElement)) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
        })
      })
    })
  }, [])

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} origin-left z-50`}
        style={{
          scaleX,
        }}
      />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default Home