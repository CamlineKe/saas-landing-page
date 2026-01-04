export type PricingTier = {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  featured?: boolean
  cta: string
  color: "default" | "teal" | "blue"
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    monthlyPrice: 29,
    annualPrice: 290, // 2 months free
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "1GB storage",
      "Community access",
    ],
    cta: "Get Started",
    color: "default",
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    monthlyPrice: 79,
    annualPrice: 790, // 2 months free
    features: [
      "Up to 20 projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "API access",
      "Custom integrations",
      "Team collaboration",
    ],
    featured: true,
    cta: "Try Free for 14 Days",
    color: "teal",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 199,
    annualPrice: 1990, // 2 months free
    features: [
      "Unlimited projects",
      "Enterprise analytics",
      "24/7 phone support",
      "Unlimited storage",
      "Advanced API",
      "Custom SLAs",
      "Dedicated account manager",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    color: "blue",
  },
]
