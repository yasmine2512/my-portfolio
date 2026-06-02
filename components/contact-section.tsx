"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
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
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <p className="text-primary font-mono text-sm mb-2">Get in touch</p>
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I&apos;m currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate on a project, or just want 
            to say hi, I&apos;ll try my best to get back to you!
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <a href="mailto:yasmineseddari32@gmail.com">
                <Send className="h-4 w-4 mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-sm mb-4">Or find me on</p>
            <div className="flex items-center justify-center gap-6">
              <SocialLink
                href="https://github.com/yasmine2512"
                icon={<Github className="h-6 w-6" />}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/yasmine-s-6b4721206"
                icon={<Linkedin className="h-6 w-6" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:yasmineseddari32@gmail.com"
                icon={<Mail className="h-6 w-6" />}
                label="Email"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </motion.a>
  )
}
