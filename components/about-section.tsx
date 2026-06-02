"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Brain, Sparkles } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-4xl font-bold">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a Computer Science student with a strong interest in Artificial Intelligence, Web Development, and Software Engineering. I enjoy building practical applications that solve real problems and help me learn new technologies along the way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I&apos;m 3rd year AI Engineering student, diving deep into machine learning, neural networks, and the fascinating world of artificial intelligence. I love combining my web development skills with AI to build intelligent, modern applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
               I&apos;m always looking for opportunities to learn, improve, and take on new challenges that help me grow as a developer and future AI engineer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6">
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title="Web Development"
                description="Building responsive, accessible web applications with modern frameworks like React and Next.js."
              />
              <FeatureCard
                icon={<Brain className="h-6 w-6" />}
                title="AI & Machine Learning"
                description="Exploring neural networks, deep learning, and implementing AI solutions in real-world applications."
              />
              <FeatureCard
                icon={<Sparkles className="h-6 w-6" />}
                title="Creative Solutions"
                description="Combining technical skills with creative thinking to solve complex problems elegantly."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
