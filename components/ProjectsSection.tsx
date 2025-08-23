import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { AnimatedSection } from './AnimatedSection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Yank - Search Query Optimizer',
      description: 'A tool that bridges the gap between vague search queries and search engine results while keeping the user in control.',
      image: 'https://raw.githubusercontent.com/sakshmenon/website/refs/heads/main/yank.png',
      tags: ['AWS', 'Node.js', 'Flask', 'Docker', 'LLMs', 'JavaScript', 'Python', 'HTML', 'CSS'],
      duration: 'May 2025 - July 2025',
    },
    {
      title: 'MarketMatch - Commercial Matchmaking',
      description: 'Created a platform for buyers and sellers to connect with a swipe feature to guage interest.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      tags: ['Swift', 'Go/Golang', 'React', 'Typescript', 'DynamoDB', 'HTML', 'CSS'],
      duration: 'Apr 2025 - June 2025'
    },
    {
      title: 'SafEE - Personalized Video Player',
      description: 'A video streaming app that warns users for sudden spikes in audio/brightness helping those sensitive to such spikes such as epileptic users.',
      image: '/img/video.png',
      tags: ['HTML', 'JavaScript', 'OpenCV', 'PyAudio', 'PyQt'],
      duration: 'Jan 2025 - Feb 2025'
    }
  ]

  const projectCardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const tagVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      y: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-accent/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that demonstrate my approach to combining 
            data modeling, product strategy, and user experience to solve complex problems.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { 
              once: true, 
              amount: 0.2,
              margin: "0px 0px -100px 0px"
            })

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={projectCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Project Image */}
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <motion.div
                          variants={imageVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 lg:h-full object-cover"
                            />
                          </motion.div>
                        </motion.div>
                        
                        {/* Overlay gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Project Content */}
                      <motion.div 
                        className="p-8 lg:p-12"
                        variants={contentVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        <CardHeader className="p-0 mb-6">
                          <motion.div 
                            className="flex flex-wrap gap-2 mb-4"
                            variants={itemVariants}
                          >
                            {project.tags.map((tag, tagIndex) => (
                              <motion.div
                                key={tagIndex}
                                variants={tagVariants}
                                transition={{ delay: tagIndex * 0.1 }}
                                whileHover={{ 
                                  scale: 1.1,
                                  y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">
                                  {tag}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          </motion.div>
                          
                          <motion.div 
                            className="text-sm text-muted-foreground mb-4"
                            variants={itemVariants}
                          >
                            {project.duration}
                          </motion.div>
                        </CardHeader>

                        <CardContent className="p-0 space-y-4">
                          <motion.p 
                            className="text-muted-foreground"
                            variants={itemVariants}
                          >
                            {project.description}
                          </motion.p>

                          <motion.div 
                            className="flex gap-4 pt-4"
                            variants={itemVariants}
                          >                            
                            <motion.div
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <a href='https://github.com/total-shambles/yank'>
                              <Button variant="outline" size="sm" className="group">
                                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                View Code
                              </Button>
                              </a>
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <motion.div
            className="bg-gradient-to-r from-primary/5 to-accent/30 rounded-2xl p-8"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights. I have more projects and case studies 
              that showcase different aspects of my data modeling and product development skills.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href='https://github.com/sakshmenon'>
              <Button size="lg" className="group">
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                View Full Portfolio
              </Button>
              </a>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
