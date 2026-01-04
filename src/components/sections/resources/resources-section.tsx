"use client"

import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const resources = [
  {
    title: "Documentation",
    description: "Complete API reference and integration guides",
    icon: FileText,
    count: "150+ pages",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for all features",
    icon: Video,
    count: "45+ videos",
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
  },
  {
    title: "Case Studies",
    description: "Learn how other companies use our platform",
    icon: BookOpen,
    count: "20+ studies",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    title: "Templates",
    description: "Ready-to-use templates for common workflows",
    icon: Download,
    count: "15+ templates",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resources & Learning
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to get the most out of our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center mb-4", resource.color)}>
                  <resource.icon className="h-6 w-6" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{resource.count}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Explore
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-background border rounded-2xl">
            <h3 className="text-2xl font-semibold">Need more help?</h3>
            <p className="text-muted-foreground max-w-md">
              Check out our complete documentation or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="px-8">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Full Documentation
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 px-8">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
