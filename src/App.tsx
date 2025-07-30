import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import StarryBackground from './components/StarryBackground.tsx'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import TargetCursor from './components/TargetCursor' // adjust path if needed

export function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Apply dark/light mode to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div
        className={`relative w-full min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-[#050A18] text-white' : 'bg-[#f0f4f8] text-[#333]'
        } overflow-x-hidden font-jetbrains`}
      >
        {/* 🎯 Custom Cursor */}
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <StarryBackground darkMode={darkMode} />
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTop darkMode={darkMode} />
      </div>
    </Router>
  )
}