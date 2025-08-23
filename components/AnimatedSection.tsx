'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  stagger?: boolean
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  stagger = false
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -100px 0px"
  })

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 }
      case 'down': return { y: -50, x: 0 }
      case 'left': return { y: 0, x: 50 }
      case 'right': return { y: 0, x: -50 }
      default: return { y: 50, x: 0 }
    }
  }

  const offset = getDirectionOffset()

  const containerVariants = {
    hidden: { 
      opacity: 0,
      ...offset,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        ...(stagger && {
          staggerChildren: 0.1,
          delayChildren: delay
        })
      }
    }
  }

  const itemVariants = stagger ? {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: 'blur(5px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  } : {}

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  )
}