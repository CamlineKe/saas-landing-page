"use client"

import { useState } from "react"
import { motion, AnimatePresence, Easing } from "framer-motion"
import { BarChart3, Users, TrendingUp, Zap, Target, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Float } from "@/components/shared/animations/float"
import { cn } from "@/lib/utils"

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "team">("overview")
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  const metrics = [
    { label: "Active Users", value: "2,847", change: "+12.5%", icon: Users, color: "text-blue-600" },
    { label: "Revenue", value: "$48,920", change: "+18.2%", icon: TrendingUp, color: "text-green-600" },
    { label: "Conversion Rate", value: "4.7%", change: "+2.3%", icon: Target, color: "text-purple-600" },
    { label: "Avg. Response Time", value: "2.4s", change: "-0.8s", icon: Clock, color: "text-amber-600" },
  ]

  const chartData = [65, 59, 80, 81, 56, 55, 40]

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as Easing
      }
    })
  }

  const chartBarVariants = {
    hidden: { height: 0 },
    visible: (height: number) => ({
      height: `${height}%`,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut" as Easing
      }
    })
  }

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl border bg-card p-2 shadow-2xl"
      >
        {/* Browser header */}
        <div className="rounded-t-xl overflow-hidden border-b bg-muted">
          <div className="h-8 flex items-center px-4 gap-2">
            <motion.div 
              className="h-3 w-3 rounded-full bg-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            />
            <motion.div 
              className="h-3 w-3 rounded-full bg-yellow-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
            <motion.div 
              className="h-3 w-3 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
            />
            <div className="ml-4 flex-1 h-6 bg-background rounded-md flex items-center px-3 text-xs text-muted-foreground">
              https://app.saaspro.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-gray-900 dark:to-gray-800">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold"
              >
                Dashboard Overview
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm text-muted-foreground"
              >
                Real-time insights and analytics
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Badge 
                variant={activeTab === "overview" ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all",
                  activeTab === "overview" && "bg-teal-600 hover:bg-teal-700"
                )}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Badge>
              <Badge 
                variant={activeTab === "analytics" ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all",
                  activeTab === "analytics" && "bg-teal-600 hover:bg-teal-700"
                )}
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </Badge>
              <Badge 
                variant={activeTab === "team" ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all",
                  activeTab === "team" && "bg-teal-600 hover:bg-teal-700"
                )}
                onClick={() => setActiveTab("team")}
              >
                Team
              </Badge>
            </motion.div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={metricVariants}
              >
                <Card 
                  className={cn(
                    "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                    hoveredElement === `metric-${index}` && "ring-2 ring-teal-500"
                  )}
                  onMouseEnter={() => setHoveredElement(`metric-${index}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={cn("h-5 w-5", metric.color)} />
                      <Badge variant="outline" className="text-xs">
                        {metric.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Chart and progress sections */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart */}
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">Performance Trends</h4>
                    <p className="text-sm text-muted-foreground">Last 7 days</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-teal-600" />
                </div>
                
                {/* Animated chart bars */}
                <div className="h-40 flex items-end justify-between gap-1 mt-6">
                  {chartData.map((height, index) => (
                    <motion.div 
                      key={index}
                      custom={height}
                      initial="hidden"
                      animate="visible"
                      variants={chartBarVariants}
                      className="flex-1 flex flex-col items-center group"
                      onMouseEnter={() => setHoveredElement(`chart-${index}`)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      <div 
                        className={cn(
                          "w-full rounded-t-md transition-all duration-300 group-hover:opacity-100",
                          hoveredElement === `chart-${index}` 
                            ? "bg-gradient-to-t from-teal-600 to-teal-400" 
                            : "bg-gradient-to-t from-teal-500/70 to-teal-300/70"
                        )}
                      />
                      <div className="text-xs text-muted-foreground mt-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </div>
                      <AnimatePresence>
                        {hoveredElement === `chart-${index}` && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded"
                          >
                            {height}%
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress and tasks */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">Project Progress</h4>
                      <p className="text-sm text-muted-foreground">Overall completion</p>
                    </div>
                    <div className="text-2xl font-bold">78%</div>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>12/15 tasks</span>
                    <span>Due in 3 days</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">Active Features</h4>
                      <p className="text-sm text-muted-foreground">Currently enabled</p>
                    </div>
                    <Zap className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="space-y-3">
                    {["Analytics", "Team Collaboration", "API Access", "Custom Reports"].map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        className={cn(
                          "flex items-center justify-between p-2 rounded-md transition-colors",
                          hoveredElement === `feature-${index}` && "bg-muted"
                        )}
                        onMouseEnter={() => setHoveredElement(`feature-${index}`)}
                        onMouseLeave={() => setHoveredElement(null)}
                      >
                        <span className="text-sm">{feature}</span>
                        <Badge variant="outline" className="text-xs">
                          Active
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Animated tooltip */}
          <AnimatePresence>
            {hoveredElement && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-4 left-4 bg-background border rounded-lg p-3 shadow-lg"
              >
                <p className="text-sm font-medium">Interactive Demo</p>
                <p className="text-xs text-muted-foreground">
                  Hover over different elements to see details
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated decorative elements */}
        <Float intensity={5} duration={3}>
          <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg" />
        </Float>
        
        <Float intensity={8} duration={4}>
          <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg" />
        </Float>
        
        <Float intensity={6} duration={3.5}>
          <div className="absolute top-1/2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
        </Float>
      </motion.div>
    </div>
  )
}
