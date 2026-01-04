"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TypewriterProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function Typewriter({ 
  children, 
  delay = 0,
  duration = 1,
  className = ""
}: TypewriterProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration, delay, ease: [0.9, 0, 0.3, 1] }}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      {children}
    </motion.div>
  )
}
