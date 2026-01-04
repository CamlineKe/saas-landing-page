"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Typewriter, Float } from "@/components/shared/animations"
import { DashboardPreview } from "./dashboard-preview"

export function AnimatedHero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  }

  return (
    <section id="hero" className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <Badge className="mb-4" variant="outline">
            <Float intensity={3} duration={2}>
              ✨
            </Float>
            New Feature Released
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Build Better Products
          <Typewriter delay={0.3} duration={1.2}>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mt-4">
              Faster Than Ever Before
            </span>
          </Typewriter>
        </motion.h1>

        <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          A modern SaaS platform that helps teams design, develop, and deploy products with incredible speed and precision.
        </motion.p>
        
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 px-8 py-6 text-lg relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative">Start Free Trial</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-lg border-2 relative overflow-hidden group"
          >
            <span className="relative flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Watch Demo
            </span>
          </Button>
        </motion.div>
        
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <motion.div 
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            No credit card required
          </span>
          <Separator orientation="vertical" className="h-4" />
          <span className="flex items-center gap-2">
            <motion.div 
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
            14-day free trial
          </span>
          <Separator orientation="vertical" className="h-4" />
          <span className="flex items-center gap-2">
            <motion.div 
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
            />
            Cancel anytime
          </span>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <DashboardPreview />
    </section>
  )
}
