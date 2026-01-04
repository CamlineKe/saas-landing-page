"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SnowflakeProps {
  size: number
  left: number
  delay: number
  duration: number
  opacity: number
}

function Snowflake({ size, left, delay, duration, opacity }: SnowflakeProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        opacity,
      }}
      initial={{ y: -20, x: 0 }}
      animate={{ 
        y: ["0vh", "100vh"],
        x: ["0vw", Math.sin(left * 0.1) * 20 + "vw"],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-white/80 to-white/40 rounded-full blur-[1px]" />
    </motion.div>
  )
}

export function Snowflakes() {
  const [isWinterTheme, setIsWinterTheme] = useState(false)
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number
    size: number
    left: number
    delay: number
    duration: number
    opacity: number
  }>>([])

  useEffect(() => {
    // Check if it's December for automatic winter theme
    const isDecember = new Date().getMonth() === 11 // December is month 11
    setIsWinterTheme(isDecember)
    
    // Create snowflakes
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2-6px
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10, // 10-20 seconds
      opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
    }))
    
    setSnowflakes(flakes)
  }, [])

  // Toggle winter theme manually
  const toggleWinterTheme = () => {
    setIsWinterTheme(!isWinterTheme)
  }

  if (!isWinterTheme) return null

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <Snowflake key={flake.id} {...flake} />
        ))}
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/10 dark:to-blue-950/10 pointer-events-none" />
      </div>

      {/* Optional: Add a subtle button to toggle snow (for testing) */}
      <button
        onClick={toggleWinterTheme}
        className="fixed bottom-4 right-4 z-50 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border text-xs hover:bg-background transition-colors"
        title="Toggle snow effect"
      >
        ❄️
      </button>
    </>
  )
}
