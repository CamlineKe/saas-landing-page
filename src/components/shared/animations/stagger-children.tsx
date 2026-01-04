"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
  once?: boolean
}

export function StaggerChildren({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  childDelay = 0.05,
  once = true
}: StaggerChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",  // Fixed: Changed from number array to string
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}
