"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Image Generator",
    description:
      "A web application that uses machine learning models to generate unique images from text prompts. Built with React and integrated with state-of-the-art AI APIs.",
    image: "/placeholder-project-1.jpg",
    tags: ["React", "TypeScript", "AI/ML", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with cart functionality, payment integration, and admin dashboard. Features real-time inventory management.",
    image: "/placeholder-project-2.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application with end-to-end encryption, file sharing, and group chat capabilities using WebSocket technology.",
    image: "/placeholder-project-3.jpg",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode, animations, and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecasting app with location-based data and interactive charts.",
    tags: ["React", "Chart.js", "Weather API"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with authentication and rate limiting.",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    github: "https://github.com",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

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
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My work</p>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <OtherProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:text-right"}`}
    >
      <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div
          className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 aspect-video"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Folder className="h-16 w-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Project Screenshot</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <div className="p-6 rounded-xl bg-card border border-border shadow-lg mb-4">
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? "" : "lg:justify-end"}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`flex gap-4 ${isEven ? "" : "lg:justify-end"}`}>
          {project.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {project.live && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function OtherProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4 + index * 0.1 }}
      whileHover={{ y: -8 }}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
    >
      <div className="flex items-center justify-between mb-4">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
