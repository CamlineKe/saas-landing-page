"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  opacity: number
  type: "circle" | "blob" | "ring"
}

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Create different types of particles
    const newParticles: Particle[] = []
    
    // Large blobs (background)
    for (let i = 0; i < 4; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 200, // 200-500px
        color: i % 2 === 0 ? "rgba(0, 212, 170, 0.03)" : "rgba(10, 36, 99, 0.03)",
        duration: Math.random() * 40 + 60, // 60-100s
        delay: Math.random() * 20,
        opacity: Math.random() * 0.05 + 0.02,
        type: "blob"
      })
    }
    
    // Medium circles
    for (let i = 4; i < 12; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50, // 50-150px
        color: i % 3 === 0 ? "rgba(0, 212, 170, 0.05)" : "rgba(92, 225, 230, 0.04)",
        duration: Math.random() * 30 + 30, // 30-60s
        delay: Math.random() * 15,
        opacity: Math.random() * 0.08 + 0.03,
        type: "circle"
      })
    }
    
    // Small rings/particles
    for (let i = 12; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10, // 10-30px
        color: "rgba(255, 255, 255, 0.1)",
        duration: Math.random() * 20 + 10, // 10-30s
        delay: Math.random() * 10,
        opacity: Math.random() * 0.15 + 0.05,
        type: "ring"
      })
    }

    setParticles(newParticles)
  }, [])

  const getParticleStyle = (particle: Particle) => {
    const baseStyle = {
      width: particle.size,
      height: particle.size,
      backgroundColor: particle.type === "ring" ? "transparent" : particle.color,
      border: particle.type === "ring" ? `1px solid ${particle.color}` : "none",
      opacity: particle.opacity,
      filter: `blur(${particle.size * 0.02}px)`,
    }

    return baseStyle
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovering(true)
    // Reset hover state after delay
    setTimeout(() => setIsHovering(false), 1000)
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(10, 36, 99, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(92, 225, 230, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Moving grid pattern (very subtle) */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 170, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 170, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated particles */}
      {particles.map((particle) => {
        const xVariation = Math.sin(particle.id * 0.5) * 10
        const yVariation = Math.cos(particle.id * 0.3) * 15
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              ...getParticleStyle(particle),
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, xVariation, 0, -xVariation, 0],
              y: [0, yVariation, 0, -yVariation, 0],
              scale: [1, 1.1, 1, 0.9, 1],
              rotate: particle.type === "ring" ? [0, 180, 360] : 0,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Interactive mouse follow effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{
          background: isHovering 
            ? "radial-gradient(circle, rgba(0, 212, 170, 0.03) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 212, 170, 0) 0%, transparent 70%)",
          scale: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />

      {/* Light beams from corners */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-teal-500/5 to-transparent opacity-30"
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent opacity-30"
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Noise texture overlay (very subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
