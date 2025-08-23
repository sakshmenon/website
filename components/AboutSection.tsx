import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Database, TrendingUp, Users, Target, ArrowRight, Download, GraduationCap } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { motion } from 'framer-motion'

export function AboutSection() {
  const languages = [
    'Python', 'JavaScript', 'HTML', 'React.js', 'Typescript', 'C', 'C++', 'C#', 'CSS', 'Golang', 'MATLAB', 'Assembly', 'Haskell'
  ]

  const Technologies = [
    'GitHub', 'AWS', 'Kubernetes', 'Azure', 'Google Cloud', 'REST APIs', 'PyTorch', 'Tensorflow', 'Bash', 'Jira', 'DynamoDB', 'MySQL', 'HuggingFace', 
  ]

  const skills = [
    'Cloud Computing', 'Transformers', 'Computer Vision', 'Full-Stack', 'Neural Networks', 'Data Modeling', 
  ]

  //   
  //   'Machine Learning',
  //   'MySQL', 'NoSQL', 'Hugging Face',
  //   'Docker', 'Git', 'NPM'
  // ]



  const values = [
    {
      icon: Database,
      title: 'Data-Driven Design',
      description: 'I leverage insights from studies to inform design decisions and validate product assumptions.'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'I focus on building products that scale and drive meaningful business outcomes.'
    },
    {
      icon: Users,
      title: 'User-Centered Approach',
      description: 'I balance quantitative data with qualitative user insights to create meaningful experiences.'
    },
    {
      icon: Target,
      title: 'Strategic Thinking',
      description: 'I approach product development holistically, considering technical feasibility and market needs.'
    }
  ]

  const education = {
    title: 'B.S. in Computer Science',
    school: 'University of Cincinnati',
    location: 'Cincinnati, OH',
    period: 'Aug 2021 - May 2026 (Expected)',
    description: 'Current senior with a focus on Deep Learning, Data Modeling, and Statistics.',
    highlights: [
      'GPA: 3.8/4.0 - National Society of Leadership and Success Honor Society',
      'Honors: 7x Dean\'s List Recipient, CEAS International Scholarship, and UC Global Scholarship',
      'Relevant Coursework: Deep Learning, Applied AI & Machine Learning, Data Structures, Discrete Mathematics, Statistics & Probability, Linear Algebra'
    ]
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const skillBadgeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.05,
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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            About Me
          </h2>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="mb-16" delay={0.4}>
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a senior at the University of Cincinnati studying Computer Science.
                    I am driven by responsible innovation in tech and take joy in creating applications 
                    that challenge me.
                  </p>
                  <p>
                    My journey in tech started when I needed to submit a high school project. 
                    The experience slowly went from a dreadful one to a fascinating one. I was 
                    impressed by how data could tell stories and the ability to create anything. This led me to 
                    where I am now.
                  </p>
                  <p>
                    Over the past four years, I've worked on various projects and participated in various internships
                    that combine technical data skills with design thinking. From building predictive models for medical
                    conditions to query optimizers for more effective search sessions, I just wanted to keep building.
                  </p>
                  <p>
                    As I approach graduation, I'm excited to bring my unique blend of data modeling and product 
                    development to product teams that are building the tools that can empower the next 
                    generation of developers and applications. I believe the future belongs to products 
                    that are both intelligent and human-centered.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-16" delay={0.5}>
          <h3 className="text-2xl font-medium text-center mb-8">Education</h3>
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 mb-4">
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(var(--primary), 0.15)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium">{education.title}</h4>
                      {/* <Badge variant="default">Education</Badge> */}
                    </div>
                    <div className="text-primary font-medium mb-1">{education.school}</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {education.location} • {education.period}
                    </div>
                    <p className="text-muted-foreground mb-4">{education.description}</p>
                    <ul className="space-y-2">
                      {education.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-16" delay={0.6}>
          <h3 className="text-2xl font-medium text-center mb-8">My Approach</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: "rgba(var(--primary), 0.15)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <value.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Languages */}
        <AnimatedSection className="mb-16" delay={0.8}>
          <h3 className="text-2xl font-medium text-center mb-8">Languages</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                variants={skillBadgeVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="px-4 py-2 cursor-pointer">
                  {language}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Technologies */}
        <AnimatedSection className="mb-16" delay={0.8}>
          <h3 className="text-2xl font-medium text-center mb-8">Technologies</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {Technologies.map((Technology, index) => (
              <motion.div
                key={index}
                variants={skillBadgeVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="px-4 py-2 cursor-pointer">
                  {Technology}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-16" delay={0.8}>
          <h3 className="text-2xl font-medium text-center mb-8">Methodologies</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillBadgeVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="px-4 py-2 cursor-pointer">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Call to Action Buttons */}
        <AnimatedSection className="text-center" delay={1.0}>
          <div className="bg-gradient-to-r from-accent/50 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Ready to explore my work?
            </h3>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button onClick={scrollToProjects} size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a href="/assets/Saksh Menon – Resume 2025.pdf" download>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform"/>
                  Download Resume
                </Button>
                </a>
                {/* <a  download>text</a> */}
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}