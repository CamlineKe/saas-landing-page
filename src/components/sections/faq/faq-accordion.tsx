"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FAQ } from "@/lib/data/faqs"
import { cn } from "@/lib/utils"

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

const categoryColors = {
  general: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  billing: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  technical: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  account: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="text-left hover:no-underline group">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs capitalize",
                      categoryColors[faq.category]
                    )}
                  >
                    {faq.category}
                  </Badge>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <div className="pl-0 pt-2">
              <p>{faq.answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
