'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(0, 0, 0, 0)'
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const menuItemVariants = {
    initial: { 
      opacity: 0.7,
      y: 0
    },
    hover: { 
      opacity: 1,
      y: -2,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 border-b"
      variants={navVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Saksh Menon
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative"
                variants={menuItemVariants}
                initial="initial"
                whileHover="hover"
                custom={index}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <div className="pb-4 pt-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  variants={mobileItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}