"use client"

import { useState } from "react"
import { PricingToggle } from "./pricing-toggle"
import { PricingCard } from "./pricing-card"
import { pricingTiers } from "@/lib/data/pricing"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
          
          <PricingToggle 
            onToggle={setBillingPeriod} 
            defaultValue={billingPeriod}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              {...tier}
              isAnnual={billingPeriod === "annual"}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            All prices in USD. Taxes may apply.{" "}
            <a href="#" className="text-primary hover:underline">
              See full pricing terms
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
