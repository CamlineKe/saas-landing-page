"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.5,
  className = "",
  once = true
}: FadeInProps) {
  const directionOffset = 20
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
      x: direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",  // Fixed: Changed from number array to string
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
