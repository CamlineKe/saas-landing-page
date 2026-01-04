"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FAQAccordion } from "./faq-accordion"
import { faqs } from "@/lib/data/faqs"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "billing", label: "Billing" },
  { id: "technical", label: "Technical" },
  { id: "account", label: "Account" },
]

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  )

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our product and plans
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                activeCategory === category.id && 
                "bg-teal-600 hover:bg-teal-700"
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={filteredFaqs} />
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-muted/30 rounded-2xl">
            <h3 className="text-2xl font-semibold">Still have questions?</h3>
            <p className="text-muted-foreground max-w-md">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="px-8">
                Contact Support
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 px-8">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
