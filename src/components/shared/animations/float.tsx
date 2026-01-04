"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatProps {
  children: ReactNode
  intensity?: number
  duration?: number
  className?: string
}

export function Float({ 
  children, 
  intensity = 10,
  duration = 6,
  className = ""
}: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
