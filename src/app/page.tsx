import { MainNav } from "@/components/layout/navigation/main-nav"
import { MainFooter } from "@/components/layout/footer/main-footer"
import { PricingSection } from "@/components/sections/pricing/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section"
import { FAQSection } from "@/components/sections/faq/faq-section"
import { ResourcesSection } from "@/components/sections/resources/resources-section"
import { ContactSection } from "@/components/sections/contact/contact-section"
import { FinalCTA } from "@/components/sections/cta/final-cta"
import { AnimatedHero } from "@/components/sections/hero/animated-hero"
import { FadeIn, StaggerChildren } from "@/components/shared/animations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section with Animations */}
        <AnimatedHero />

        {/* Feature Cards with Animations */}
        <FadeIn>
          <div id="features" className="max-w-6xl mx-auto mb-20 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything you need to <span className="text-teal-600 dark:text-teal-400">succeed</span>
            </h2>
            
            <StaggerChildren className="grid md:grid-cols-3 gap-8">
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
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Resources Section */}
        <ResourcesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
