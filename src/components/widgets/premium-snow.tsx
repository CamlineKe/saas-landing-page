"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Snowflake {
  id: number
  size: number
  left: number
  delay: number
  duration: number
  opacity: number
  blur: number
  shape: "circle" | "star" | "cross"
  depth: number // for parallax effect
}

export function PremiumSnow() {
  const [isActive, setIsActive] = useState(false)
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for winter theme preference in localStorage
    const savedTheme = localStorage.getItem("winter-theme")
    const isDecember = new Date().getMonth() === 11
    
    // Enable by default in December, or if saved preference exists
    setIsActive(savedTheme === "enabled" || (savedTheme === null && isDecember))

    // Create different types of snowflakes
    const flakes: Snowflake[] = []
    
    // Small fast flakes (30%)
    for (let i = 0; i < 15; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 2 + 1, // 1-3px
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 5 + 5, // 5-10 seconds
        opacity: Math.random() * 0.3 + 0.4, // 0.4-0.7
        blur: 0.5,
        shape: "circle",
        depth: 1,
      })
    }
    
    // Medium flakes (50%)
    for (let i = 15; i < 40; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 3 + 2, // 2-5px
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 8 + 8, // 8-16 seconds
        opacity: Math.random() * 0.3 + 0.3, // 0.3-0.6
        blur: 1,
        shape: Math.random() > 0.7 ? "star" : "circle",
        depth: 2,
      })
    }
    
    // Large slow flakes (20%)
    for (let i = 40; i < 50; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 4 + 4, // 4-8px
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 12 + 12, // 12-24 seconds
        opacity: Math.random() * 0.2 + 0.2, // 0.2-0.4
        blur: 1.5,
        shape: Math.random() > 0.5 ? "cross" : "circle",
        depth: 3,
      })
    }

    setSnowflakes(flakes)

    // Animate the entire container for subtle movement
    controls.start({
      opacity: [0, 1],
      transition: { duration: 2 }
    })
  }, [controls])

  const toggleSnow = () => {
    const newState = !isActive
    setIsActive(newState)
    localStorage.setItem("winter-theme", newState ? "enabled" : "disabled")
  }

  const getSnowflakeShape = (shape: Snowflake["shape"], size: number) => {
    const baseSize = size / 2
    
    switch (shape) {
      case "star":
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-white/40 rotate-45 rounded-sm" />
          </div>
        )
      case "cross":
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
              <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>
          </div>
        )
      default: // circle
        return (
          <div 
            className="w-full h-full bg-gradient-to-br from-blue-100/60 to-white/40 rounded-full"
            style={{ filter: `blur(${size * 0.2}px)` }}
          />
        )
    }
  }

  if (!isActive) return null

  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={controls}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {snowflakes.map((flake) => {
          const horizontalMovement = Math.sin(flake.left * 0.1) * (20 * flake.depth)
          const windEffect = Math.sin(Date.now() * 0.001 + flake.id) * (2 * flake.depth)
          
          return (
            <motion.div
              key={flake.id}
              className="absolute pointer-events-none"
              style={{
                left: `${flake.left}%`,
                width: flake.size,
                height: flake.size,
                opacity: flake.opacity,
                filter: `blur(${flake.blur}px)`,
                zIndex: flake.depth,
              }}
              initial={{ 
                y: -50,
                x: 0,
                rotate: 0,
              }}
              animate={{ 
                y: ["-10vh", "110vh"],
                x: [0, horizontalMovement + windEffect],
                rotate: [0, 360],
              }}
              transition={{
                duration: flake.duration,
                delay: flake.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {getSnowflakeShape(flake.shape, flake.size)}
            </motion.div>
          )
        })}
        
        {/* Subtle overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/5 dark:to-blue-950/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-50/5 dark:to-blue-950/5" />
        
        {/* Optional: Wind effect lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Snow toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggleSnow}
        className={cn(
          "fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg border",
          "bg-background/90 backdrop-blur-sm hover:bg-background",
          "transition-all duration-300 hover:scale-110",
          "group"
        )}
        title={isActive ? "Disable snow effect" : "Enable snow effect"}
        aria-label="Toggle snow effect"
      >
        <div className="relative">
          <div className={cn(
            "text-xl transition-all duration-300",
            isActive ? "text-blue-500" : "text-muted-foreground"
          )}>
            ❄️
          </div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {isActive ? "Snow: On" : "Snow: Off"}
          <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-gray-900" />
        </div>
      </motion.button>
    </>
  )
}
