"use client"

import { useState } from "react"
import { CheckCircle, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // In a real app, you would submit to your backend here
      console.log("Email submitted:", email)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-purple-500/5" />
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-teal-50/50 dark:to-teal-950/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                  <Rocket className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to transform your workflow?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of teams who are already building better products, faster.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-teal-600" />
                    What you get
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Full access to all Professional features",
                      "14-day free trial, no credit card required",
                      "Priority onboarding support",
                      "Cancel anytime with no hassle",
                      "Early access to new features",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  {isSubmitted ? (
                    <div className="text-center p-8 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                      <p className="text-muted-foreground">
                        We've sent a confirmation email. Check your inbox to get started.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Start your free trial</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Work email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@company.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="h-12"
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full h-12 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                          >
                            Start Free Trial
                          </Button>
                        </form>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          By signing up, you agree to our{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t">
                <Button variant="outline" className="px-8">
                  Schedule a Demo
                </Button>
                <Button variant="ghost" className="px-8">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
