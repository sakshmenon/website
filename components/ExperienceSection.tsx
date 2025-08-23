import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Briefcase, Award } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Machine Learning Intern – Bioinformatics',
      company: 'Cincinnati Children\'s Hospital',
      location: 'Cincinnati, OH',
      period: 'Aug 2024 - Dec 2024',
      description: 'Developed a tool that outperforms the industry standard for determining smiilarities between two organisms. ',
      achievements: [
        'Reduced computation times by 50%',
        'Leveraged Protein Language Model embeddings to create a new metric',
        'Created pipelines to predict fatal and non-fatal protein mutations'
      ],
      topSkills: ['Azure Kubernetes Service ', 'PyTorch', 'Python']
    },
    {
      title: 'Undergraduate Research Assistant – FaultHunter Devleopment',
      company: 'University of Cincinnati CEAS',
      location: 'Cincinnati, OH',
      period: 'Jan 2024 - April 2024',
      description: 'Integrated pattern recognition to detect vulnerabilities in embedded software.',
      achievements: [
        'Implemented solutions with highly skewed data',
        'Enhanced detection of over 7 insecure patterns',
        'Primarily worked with C and ARM Assembly systems'
      ],
      topSkills: ['C', 'TensorFlow', 'Java', 'ARM Assembly']
    },
    {
      title: 'Software Development Co-op',
      company: 'Cincinnati Children\'s Hospital',
      location: 'Cincinnati, OH',
      period: 'Jan 2023 - April 2023',
      description: 'Developed optimized data pipelines to gather information from fragile X syndrome patient interactions',
      achievements: [
        'Extracted insights from over 500,000 readings',
        'Reduced computation times by over 50% with parallel computing techniques',
        'Contributed to the development of 3 projects'
      ],
      topSkills: ['Parallel Computing', 'Cloud Computing', 'Python', 'MATLAB']
    }
  ]

  const certifications = [
    'Google Cloud Professional Data Engineer',
    'AWS Certified Solutions Architect',
    'Coursera Machine Learning Specialization',
    'Product Management Certificate (Stanford)'
  ]

  const timelineVariants = {
    hidden: { 
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top"
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
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

  const experienceCardVariants = {
    hidden: { 
      opacity: 0,
      x: (index) => index % 2 === 0 ? -100 : 100,
      y: 50,
      rotateY: (index) => index % 2 === 0 ? -10 : 10
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const dotVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      x: -20,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.2
      }
    }
  }

  const skillBadgeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      y: 20
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

  const certificationVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
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
    }
  }

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in data modeling and product development has been shaped by hands-on 
            experience in tech roles and academic research.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-px"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
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
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={experienceCardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-6 flex items-center justify-center z-10"
                    variants={dotVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Briefcase className="h-5 w-5 text-background" />
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                      {/* Hover gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <CardHeader className="relative z-10">
                        <motion.div 
                          className="flex justify-between items-start mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                        </motion.div>
                        
                        <motion.div 
                          className="text-primary font-medium"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          {exp.company}
                        </motion.div>
                        
                        <motion.div 
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          {exp.location} • {exp.period}
                        </motion.div>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <motion.p 
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                        >
                          {exp.description}
                        </motion.p>

                        {/* Top Skills */}
                        <motion.div 
                          className="mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.7 }}
                        >
                          <h5 className="text-sm font-medium text-foreground mb-2">Key Skills:</h5>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ staggerChildren: 0.1, delayChildren: index * 0.2 + 0.8 }}
                          >
                            {exp.topSkills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                variants={skillBadgeVariants}
                                whileHover={{ 
                                  scale: 1.1,
                                  y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge variant="outline" className="text-xs font-medium hover:bg-primary/10 transition-colors cursor-pointer">
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>

                        <motion.ul 
                          className="space-y-2"
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{ staggerChildren: 0.1, delayChildren: index * 0.2 + 0.9 }}
                        >
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li 
                              key={achIndex} 
                              className="flex items-start group/item"
                              variants={{
                                hidden: { opacity: 0, x: -20, y: 10 },
                                visible: {
                                  opacity: 1,
                                  x: 0,
                                  y: 0,
                                  transition: {
                                    duration: 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                  }
                                }
                              }}
                            >
                              <motion.span 
                                className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        {/* <AnimatedSection className="mt-20" delay={0.8}>
          <h3 className="text-2xl font-medium text-center mb-8">Certifications & Learning</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={certificationVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center">
                    <motion.div
                      className="bg-primary/10 p-2 rounded-lg mr-3"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        backgroundColor: "rgba(var(--primary), 0.15)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {cert}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection> */}
      </div>
    </section>
  )
}