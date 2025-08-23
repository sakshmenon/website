import React, { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { BackgroundBlobs } from './components/BackgroundBlobs'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove)

    // Set initial position to center of screen
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background blobs - positioned behind all content */}
      <BackgroundBlobs mousePosition={mousePosition} />
      
      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}