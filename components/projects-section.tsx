"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const projects = [
  {
    title: "InsightFlow",
    description:"InsightFlow is a multi-tenant Business Intelligence SaaS that enables organizations to import operational data and transform it into actionable analytics, dashboards, and business insights.",
    image: "/images/insightflow.png",
    tags: ["React", "NodeJs", "Express", "MongoDB","RestAPI"],
    github: "https://github.com/yasmine2512/InsightFlow",
    featured: true,
  },{
    title: "ThesisHub",
    description:
      "ThesisHub, a .NET/Blazor web application for managing and discovering Master’s and Doctoral thesis topics, featuring advanced search, keyword filtering, favorites, and student-professor interaction.",
    image: "/images/ThesisHub.png",
    tags: ["C#", ".NET", "Blazor", "Bootstrap CSS","MySQL"],
    github: "https://github.com/yasmine2512/ThesisHub",
    featured: true,
  },
  
  {
    title: "TaskFlow",
    description:
      "A Java desktop application built with JavaFX to help you manage your tasks efficiently. This Task Manager allows you to organize, track, and prioritize your daily activities with a user-friendly interface.",
    image: "/images/TaskFlow.png",
    tags: ["Java", "JavaFX", "CSS", "SQL"],
    github: "https://github.com/yasmine2512/TaskFlow",
    featured: true,
  },
  {
    title: "LearnHive",
    description:
      "LearnHive is an interactive Node.js and JavaScript web application that transforms any text or PDF into a personalized quiz using the OpenAI API. Perfect for learners who want to test their knowledge, track progress, and revisit quizzes for better retention.",
    image: "/images/LearnHive1.png",
    tags: ["React", "NodeJs", "Express", "MongoDB","RestAPI"],
    github: "https://github.com/yasmine2512/LearnHive",
    featured: true,
  },
  {
    title: "OthelloGame",
    description: "A Classic Othello (Reversi) board Game in Python featuring 1v1 and AI modes.",
    tags: ["Pyhton", "pyGame"],
    github: "https://github.com/yasmine2512/Othello_Game",
  },
  {
    title: "Meta-Heuristic Optimization",
    description: "A Python project implementing and comparing multiple metaheuristic algorithms to solve the Traveling Salesman Problem (TSP), with visualization using real Algerian city coordinates.",
    tags: ["Python", "matplotlib", "pandas"],
    github: "https://github.com/yasmine2512/meta-heuristic",
  },{
    title: "Neural Network Classification",
    description: "Implementation and visualization of a 1D neural network with ReLU hidden units, decision boundary analysis, and likelihood-based optimization from scratch.",
    tags: ["Python", "numpy", "matplotlib"],
    github: "https://github.com/yasmine2512/Neural-Network-Classification",
  }
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
            {project.image ? (
            <Image
            src= {project.image}
            alt= {project.title}
            fill
            className="w-full h-full object-fill"
          />):(<div className="text-center items-center justify-center">
              <Folder className="h-16 w-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Project Screenshot</p>
            </div>)}
            {/* <div className="text-center">
              <Folder className="h-16 w-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Project Screenshot</p>
            </div> */}
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
          {/* {project.live && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </a>
            </Button>
          )} */}
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
          {/* {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          )} */}
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
