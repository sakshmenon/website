'use client'

import { useEffect, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax effect for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: 'blur(20px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/30 rounded-full blur-3xl"></div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-accent rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-medium text-foreground mb-6"
              variants={itemVariants}
            >
              <center>Hi, I'm</center>
              {/* <br></br> */}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-semibold">Saksh Menon</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              CS @ University of Cincinnati
            </motion.h2>
          </motion.div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              variants={imageVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <motion.div 
                className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent border-4 border-background shadow-2xl overflow-hidden relative"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="/img/self.jpeg"
                  alt="Saksh Menon - Photo"
                  className="w-full h-full object-cover"
                />
                
                {/* Animated overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Floating elements with animation */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full blur-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              />
              
              {/* Additional decorative elements */}
              <motion.div
                className="absolute top-10 -left-8 w-4 h-4 bg-primary rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2
                }}
              />
              <motion.div
                className="absolute bottom-16 -right-6 w-3 h-3 bg-accent rounded-full opacity-80"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 3
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center relative cursor-pointer"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}