"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PricingTier } from "@/lib/data/pricing"
import { cn } from "@/lib/utils"

interface PricingCardProps extends PricingTier {
  isAnnual: boolean
}

export function PricingCard({
  name,
  description,
  monthlyPrice,
  annualPrice,
  features,
  featured = false,
  cta,
  color = "default",
  isAnnual,
}: PricingCardProps) {
  const price = isAnnual ? annualPrice : monthlyPrice
  const period = isAnnual ? "year" : "month"

  const colorClasses = {
    default: "border-border",
    teal: "border-teal-500/30 dark:border-teal-400/30",
    blue: "border-blue-500/30 dark:border-blue-400/30",
  }

  const buttonClasses = {
    default: "bg-primary hover:bg-primary/90",
    teal: "bg-teal-600 hover:bg-teal-700",
    blue: "bg-blue-600 hover:bg-blue-700",
  }

  return (
    <Card
      className={cn(
        "h-full transition-all duration-300 hover:shadow-xl",
        featured && "border-2 shadow-lg relative",
        colorClasses[color]
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-teal-500 hover:bg-teal-600 px-4 py-1.5 text-sm">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className={cn(featured ? "pt-8" : "pt-6")}>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        <div className="mt-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-muted-foreground ml-2">/{period}</span>
          </div>
          {isAnnual && annualPrice < monthlyPrice * 12 && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
              Save ${monthlyPrice * 12 - annualPrice} per year
            </p>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-teal-500 dark:text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button
          className={cn(
            "w-full py-6 text-lg",
            buttonClasses[color],
            featured && "shadow-md"
          )}
          size="lg"
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
