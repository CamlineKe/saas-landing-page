import { MainNav } from "@/components/layout/navigation/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <MainNav />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 animate-pulse-glow" variant="outline">✨ New Feature Released</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Build Better Products
            <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mt-4">
              Faster Than Ever Before
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern SaaS platform that helps teams design, develop, and deploy products with incredible speed and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 px-8 py-6 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Watch Demo
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              No credit card required
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              14-day free trial
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Cancel anytime
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl border bg-card p-2 shadow-2xl">
            <div className="rounded-xl overflow-hidden border">
              <div className="h-6 bg-muted flex items-center px-4 gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg font-medium">Interactive Dashboard Preview</p>
                  <p className="text-sm text-muted-foreground">Hover over elements to see features</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-teal-500 animate-pulse"></div>
            <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything you need to <span className="text-teal-600 dark:text-teal-400">succeed</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  Lightning Fast
                </CardTitle>
                <CardDescription>Optimized for performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with Next.js 15 and Tailwind CSS for exceptional speed and SEO performance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-teal-500/20 dark:border-teal-400/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-teal-500 hover:bg-teal-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  Modular Design
                </CardTitle>
                <CardDescription>Component-based architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with shadcn/ui for complete customization and consistency across your application.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  Fully Responsive
                </CardTitle>
                <CardDescription>Works on all devices</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfectly responsive design that works seamlessly on mobile, tablet, and desktop.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Next: Building the pricing section and testimonials
          </p>
          <div className="flex gap-2 justify-center">
            <div className="h-2 w-8 rounded-full bg-teal-600"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
