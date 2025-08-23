import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface BlobAnimationProps {
  className?: string
  size?: number
  colors?: string[]
  duration?: number
  delay?: number
  intensity?: 'subtle' | 'medium' | 'prominent'
  orbitalRadius?: number
  startAngle?: number
  mousePosition?: { x: number; y: number }
}

export function BlobAnimation({ 
  className = "", 
  size = 600, 
  colors = ["rgb(59 130 246)", "rgb(168 85 247)"],
  duration = 15,
  delay = 0,
  intensity = 'medium',
  orbitalRadius = 300,
  startAngle = 0,
  mousePosition = { x: 0, y: 0 }
}: BlobAnimationProps) {
  const [screenCenter, setScreenCenter] = useState({ x: 0, y: 0 })
  const [currentGlowOpacity, setCurrentGlowOpacity] = useState({ primary: 0, secondary: 0 })
  const animationFrameRef = useRef<number>()

  // More irregular blob shapes with complex curves
  const irregularBlobShapes = [
    "M60.2,-71.8C76.8,-58.4,87.2,-38.2,92.1,-15.8C97,6.6,96.4,31.2,87.6,52.4C78.8,73.6,61.8,91.4,41.2,98.6C20.6,105.8,-3.6,102.4,-26.4,95.2C-49.2,88,-70.6,77,-84.4,59.8C-98.2,42.6,-104.4,19.2,-102.8,-5.2C-101.2,-29.6,-91.8,-55,-77.2,-68.4C-62.6,-81.8,-42.8,-84.2,-22.4,-89.2C-2,-94.2,18.8,-101.8,36.4,-95.6C54,-89.4,68.4,-69.4,60.2,-71.8Z",
    "M74.2,-87.6C91.8,-69.8,100.2,-44.4,104.2,-17.2C108.2,10,107.8,39,98.6,63.8C89.4,88.6,71.4,109.2,48.8,118.6C26.2,128,0,126.2,-25.8,119.4C-51.6,112.6,-77,100.8,-94.4,81.4C-111.8,62,-121.2,35,-118.4,9.2C-115.6,-16.6,-100.6,-41.2,-81.8,-58.8C-63,-76.4,-40.4,-87,-16.6,-92.2C7.2,-97.4,32.6,-97.2,54.8,-88.4C77,-79.6,96,-62.2,74.2,-87.6Z",
    "M52.8,-67.4C68.2,-54.8,79.6,-35.4,85.4,-13.8C91.2,7.8,91.4,31.6,83.8,52.2C76.2,72.8,60.8,90.2,41.6,99.8C22.4,109.4,-0.6,111.2,-22.8,105.6C-45,100,-66.4,87,-81.2,68.6C-96,50.2,-104.2,26.4,-104.8,2.2C-105.4,-22,-98.4,-46.6,-84.6,-64.8C-70.8,-83,-50.2,-94.8,-28.4,-99.2C-6.6,-103.6,16.4,-100.6,37.2,-91.8C58,-83,76.6,-68.4,52.8,-67.4Z",
    "M45.6,-58.2C58.8,-47.2,68.2,-31.8,73.4,-14.6C78.6,2.6,79.6,21.6,74.2,38.8C68.8,56,57,71.4,41.8,81.2C26.6,91,8,95.2,-11.2,92.8C-30.4,90.4,-50.2,81.4,-65.8,67.6C-81.4,53.8,-92.8,35.2,-96.4,15.2C-100,-4.8,-95.8,-26.2,-86.2,-44.4C-76.6,-62.6,-61.6,-77.6,-44.2,-84.8C-26.8,-92,-7,-91.4,10.2,-86.4C27.4,-81.4,42,-71.8,45.6,-58.2Z",
    "M38.4,-49.2C48.6,-39.8,55.2,-26.2,59.8,-11.4C64.4,3.4,67,19.4,63.2,33.8C59.4,48.2,49.2,61,36.4,70.2C23.6,79.4,8.2,85,-8.4,85.8C-25,86.6,-42.8,82.6,-56.4,74.2C-70,65.8,-79.4,53,-83.2,38.6C-87,24.2,-85.2,8.2,-81.8,-6.8C-78.4,-21.8,-73.4,-35.8,-64.2,-45.2C-55,-54.6,-41.6,-59.4,-27.8,-62.8C-14,-66.2,0.2,-68.2,15.8,-66.4C31.4,-64.6,48.4,-58.8,38.4,-49.2Z"
  ]

  // Update screen center on mount and resize
  useEffect(() => {
    const updateScreenCenter = () => {
      setScreenCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      })
    }

    updateScreenCenter()
    window.addEventListener('resize', updateScreenCenter)
    return () => window.removeEventListener('resize', updateScreenCenter)
  }, [])

  // Generate unique gradient ID for each blob instance
  const gradientId = `blob-gradient-${Math.random().toString(36).substr(2, 9)}`
  const gradientId2 = `blob-gradient-2-${Math.random().toString(36).substr(2, 9)}`

  // Get center opacity based on intensity
  const getCenterOpacity = () => {
    switch (intensity) {
      case 'subtle': return { primary: 0.25, secondary: 0.15 }
      case 'medium': return { primary: 0.35, secondary: 0.2 }
      case 'prominent': return { primary: 0.45, secondary: 0.25 }
      default: return { primary: 0.35, secondary: 0.2 }
    }
  }

  // Adjust floating movement intensity (additional micro-movements)
  const getFloatingMovement = () => {
    switch (intensity) {
      case 'subtle': return { y: [-8, 8, -8], x: [-5, 5, -5] }
      case 'medium': return { y: [-12, 12, -12], x: [-8, 8, -8] }
      case 'prominent': return { y: [-15, 15, -15], x: [-10, 10, -10] }
      default: return { y: [-12, 12, -12], x: [-8, 8, -8] }
    }
  }

  // Get orbital duration based on intensity
  const getOrbitalDuration = () => {
    switch (intensity) {
      case 'subtle': return 140 // Slower orbital motion
      case 'medium': return 120 
      case 'prominent': return 100 // Faster orbital motion
      default: return 120
    }
  }

  // Calculate target opacity based on mouse proximity
  const calculateTargetMouseProximityOpacity = () => {
    // Calculate current orbital position
    const currentAngle = (startAngle + (Date.now() / (getOrbitalDuration() * 10)) * 360) % 360
    const radian = (currentAngle * Math.PI) / 180
    const blobX = screenCenter.x + Math.cos(radian) * orbitalRadius
    const blobY = screenCenter.y + Math.sin(radian) * orbitalRadius
    
    // Calculate distance from mouse to blob center
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - blobX, 2) + 
      Math.pow(mousePosition.y - blobY, 2)
    )
    
    // Keep reduced glow radius (smaller detection area)
    const glowRadius = intensity === 'prominent' ? 180 : intensity === 'medium' ? 150 : 120
    
    // Calculate glow intensity
    const maxGlowBoost = intensity === 'prominent' ? 0.4 : intensity === 'medium' ? 0.3 : 0.2
    const glowBoost = distance < glowRadius 
      ? (1 - distance / glowRadius) * maxGlowBoost
      : 0
    
    const baseOpacity = getCenterOpacity()
    
    return {
      primary: Math.min(0.85, baseOpacity.primary + glowBoost),
      secondary: Math.min(0.65, baseOpacity.secondary + glowBoost * 0.7)
    }
  }

  // Smooth interpolation function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  // Gradual glow animation loop
  useEffect(() => {
    const animateGlow = () => {
      const targetOpacity = calculateTargetMouseProximityOpacity()
      
      setCurrentGlowOpacity(prev => ({
        primary: lerp(prev.primary, targetOpacity.primary, 0.08), // Smooth interpolation factor
        secondary: lerp(prev.secondary, targetOpacity.secondary, 0.08)
      }))
      
      animationFrameRef.current = requestAnimationFrame(animateGlow)
    }
    
    animationFrameRef.current = requestAnimationFrame(animateGlow)
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition, screenCenter, orbitalRadius, intensity, startAngle])

  const opacityLevels = getCenterOpacity()
  const floatingMovement = getFloatingMovement()
  const orbitalDuration = getOrbitalDuration()

  // Calculate orbital position using trigonometry (no mouse influence)
  const calculateOrbitalPosition = (angle: number) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: Math.cos(radian) * orbitalRadius,
      y: Math.sin(radian) * orbitalRadius
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
      {/* Orbital motion container - pure orbital motion without mouse influence */}
      <motion.div
        className="absolute"
        style={{ width: size, height: size }}
        initial={calculateOrbitalPosition(startAngle)}
        animate={{
          x: [
            calculateOrbitalPosition(startAngle).x,
            calculateOrbitalPosition(startAngle + 90).x,
            calculateOrbitalPosition(startAngle + 180).x,
            calculateOrbitalPosition(startAngle + 270).x,
            calculateOrbitalPosition(startAngle + 360).x,
          ],
          y: [
            calculateOrbitalPosition(startAngle).y,
            calculateOrbitalPosition(startAngle + 90).y,
            calculateOrbitalPosition(startAngle + 180).y,
            calculateOrbitalPosition(startAngle + 270).y,
            calculateOrbitalPosition(startAngle + 360).y,
          ]
        }}
        transition={{
          duration: orbitalDuration,
          repeat: Infinity,
          ease: "linear", // Constant orbital speed
          delay: delay * 0.3 // Stagger orbital start times
        }}
      >
        {/* Floating micro-movements container */}
        <motion.div
          className="w-full h-full"
          animate={floatingMovement}
          transition={{
            duration: duration + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="-120 -120 240 240"
            className="overflow-visible"
          >
            {/* Enhanced gradient definitions with smooth mouse proximity glow effects */}
            <defs>
              <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={colors[0]} stopOpacity={currentGlowOpacity.primary} />
                <stop offset="20%" stopColor={colors[0]} stopOpacity={currentGlowOpacity.primary * 0.8} />
                <stop offset="40%" stopColor={colors[0]} stopOpacity={currentGlowOpacity.primary * 0.6} />
                <stop offset="60%" stopColor={colors[0]} stopOpacity={currentGlowOpacity.primary * 0.4} />
                <stop offset="80%" stopColor={colors[0]} stopOpacity={currentGlowOpacity.primary * 0.2} />
                <stop offset="100%" stopColor={colors[0]} stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id={gradientId2} cx="40%" cy="60%" r="60%">
                <stop offset="0%" stopColor={colors[1] || colors[0]} stopOpacity={currentGlowOpacity.secondary} />
                <stop offset="25%" stopColor={colors[1] || colors[0]} stopOpacity={currentGlowOpacity.secondary * 0.7} />
                <stop offset="50%" stopColor={colors[1] || colors[0]} stopOpacity={currentGlowOpacity.secondary * 0.4} />
                <stop offset="75%" stopColor={colors[1] || colors[0]} stopOpacity={currentGlowOpacity.secondary * 0.2} />
                <stop offset="100%" stopColor={colors[1] || colors[0]} stopOpacity="0" />
              </radialGradient>
              
              {/* Blur filter for softer edges */}
              <filter id={`blur-${gradientId}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
              </filter>
            </defs>

            {/* Primary blob with gradient fill and morphing animation */}
            <motion.path
              d={irregularBlobShapes[0]}
              fill={`url(#${gradientId})`}
              filter={`url(#blur-${gradientId})`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                d: irregularBlobShapes,
                scale: [0.8, 1.2, 0.9, 1.1, 0.8],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                delay: delay
              }}
            />
            
            {/* Secondary blob layer with different gradient and morphing */}
            <motion.path
              d={irregularBlobShapes[1]}
              fill={`url(#${gradientId2})`}
              filter={`url(#blur-${gradientId})`}
              animate={{
                d: [...irregularBlobShapes.slice(2), ...irregularBlobShapes.slice(0, 2)],
                scale: [1, 1.3, 0.7, 1.2, 1],
              }}
              transition={{
                duration: duration + 8,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                delay: delay + 2
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}