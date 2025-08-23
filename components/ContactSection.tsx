import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Briefcase, Code } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'menonsv@mail.uc.edu',
      href: 'mailto:menonsv@mail.uc.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (513) 807 3403',
      href: 'tel:+15138073403'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cincinnati, OH',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/saksh-menon',
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sakshmenon',
      color: 'hover:bg-gray-50 hover:text-gray-800'
    }
  ]

  const availability = [
    {
      icon: Calendar,
      type: 'Full-time Positions',
      status: 'Available',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Briefcase,
      type: 'Full-time Internships',
      status: 'Available',
      statusColor: 'bg-red-100 text-green-800'
    },
    {
      icon: Code,
      type: 'Projects',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800'
    }
  ]

  const cardVariants = {
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

  const contactItemVariants = {
    hidden: { 
      opacity: 0,
      x: -30,
      y: 20
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

  const socialVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const availabilityVariants = {
    hidden: { 
      opacity: 0,
      x: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm graduating in May 2026 and actively seeking full-time opportunities in 
            product development, data engineering, or product management. I'd love to 
            discuss how I can contribute to your team's success.
          </p>
        </AnimatedSection>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <ContactCard
            title="Get In Touch"
            delay={0.3}
            variants={cardVariants}
          >
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <info.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </ContactCard>

          {/* Social Links */}
          <ContactCard
            title="Connect With Me"
            delay={0.5}
            variants={cardVariants}
          >
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.7 }}
            >
              <motion.div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-primary/10 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${social.color}`}
                    variants={socialVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <social.icon className="h-6 w-6 text-primary relative z-10" />
                    <motion.div
                      className="absolute -inset-1 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={contactItemVariants}
              >
                <p className="text-sm text-muted-foreground">
                  Follow my work and connect professionally
                </p>
              </motion.div>
            </motion.div>
          </ContactCard>

          {/* Availability */}
          <ContactCard
            title="Current Availability"
            delay={0.7}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-1"
          >
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.9 }}
            >
              {availability.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  variants={availabilityVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span className="font-medium">{item.type}</span>
                    </div>
                    <motion.span 
                      className={`px-4 py-1 rounded-full text-xs font-medium ${item.statusColor}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.status}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </ContactCard>
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16" delay={1.0}>
          <motion.div
            className="bg-gradient-to-r from-primary/5 to-accent/30 rounded-2xl p-8 md:p-12"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto"> 
              I'm excited to discuss opportunities and explore how we can work together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:alex.chen@berkeley.edu"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Contact Card Component
interface ContactCardProps {
  title: string
  children: React.ReactNode
  delay: number
  variants: any
  className?: string
}

function ContactCard({ title, children, delay, variants, className = '' }: ContactCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-full">
          {/* Hover gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          <CardHeader className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: delay + 0.2 }}
            >
              <CardTitle className="text-xl">{title}</CardTitle>
            </motion.div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            {children}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
