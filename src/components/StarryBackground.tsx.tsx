import React, { useEffect, useRef } from 'react'
interface StarryBackgroundProps {
  darkMode: boolean
}
const StarryBackground = ({ darkMode }: StarryBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    // Create stars
    const stars: Array<{
      x: number
      y: number
      size: number
      speed: number
    }> = []
    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      life: number
      maxLife: number
    }> = []
    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: 0.1 + Math.random() * 0.3,
      })
    }
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Set star color based on mode
      const starColor = darkMode ? '#ffffff' : '#3b82f6' // White for dark mode, blue for light mode
      // Draw stars
      ctx.fillStyle = starColor
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        // Move stars slightly for twinkling effect
        star.x += (Math.random() - 0.5) * 0.3
        star.y += (Math.random() - 0.5) * 0.3
        // Reset if star moves too far
        if (star.x < 0 || star.x > canvas.width)
          star.x = Math.random() * canvas.width
        if (star.y < 0 || star.y > canvas.height)
          star.y = Math.random() * canvas.height
      })
      // Randomly create shooting stars
      if (Math.random() < 0.02 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: (Math.random() * canvas.height) / 3,
          length: 50 + Math.random() * 70,
          speed: 5 + Math.random() * 10,
          life: 0,
          maxLife: 100 + Math.random() * 50,
        })
      }
      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        ctx.save()
        ctx.translate(star.x, star.y)
        ctx.rotate(Math.PI / 4) // 45 degree angle
        // Create gradient for shooting star with appropriate color
        const gradient = ctx.createLinearGradient(0, 0, star.length, 0)
        if (darkMode) {
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        } else {
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)') // Blue color
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        }
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, star.length, 2)
        ctx.restore()
        // Move shooting star
        star.x += star.speed
        star.y += star.speed
        star.life++
        // Remove if it goes off screen or completes its life
        if (
          star.x > canvas.width ||
          star.y > canvas.height ||
          star.life > star.maxLife
        ) {
          shootingStars.splice(index, 1)
        }
      })
      requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [darkMode])
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}
export default StarryBackground
