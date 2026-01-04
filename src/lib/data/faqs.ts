export type FAQ = {
  id: number
  question: string
  answer: string
  category: "general" | "billing" | "technical" | "account"
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does the free trial work?",
    answer: "You get full access to all Professional plan features for 14 days. No credit card is required to start. At the end of the trial, you can choose a plan or your account will be automatically downgraded to the free Starter plan.",
    category: "general",
  },
  {
    id: 2,
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged a prorated amount for the remainder of your billing cycle. When downgrading, changes take effect at the start of your next billing cycle.",
    category: "billing",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.",
    category: "billing",
  },
  {
    id: 4,
    question: "Is there a discount for annual billing?",
    answer: "Yes! Choose annual billing and save 17% compared to monthly billing. This is equivalent to getting 2 months free every year.",
    category: "billing",
  },
  {
    id: 5,
    question: "How secure is my data?",
    answer: "We use enterprise-grade security including 256-bit SSL encryption, SOC 2 Type II compliance, regular security audits, and data is stored in secure AWS data centers. We never share your data with third parties.",
    category: "technical",
  },
  {
    id: 6,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel during a paid period, you'll retain access until the end of your billing cycle. We don't charge cancellation fees.",
    category: "account",
  },
  {
    id: 7,
    question: "Do you offer custom enterprise plans?",
    answer: "Yes, our Enterprise plan is customizable to meet specific business needs. This includes custom SLAs, dedicated support, on-premise deployment, and volume discounts. Contact our sales team for a custom quote.",
    category: "general",
  },
  {
    id: 8,
    question: "What kind of support do you offer?",
    answer: "All plans include email support with 24-hour response time. Professional and Enterprise plans include priority support with 4-hour response time. Enterprise also includes 24/7 phone support and a dedicated account manager.",
    category: "general",
  },
]
