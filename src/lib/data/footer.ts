export type FooterColumn = {
  title: string
  links: {
    title: string
    href: string
    external?: boolean
  }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Use Cases", href: "#use-cases" },
      { title: "Integrations", href: "#integrations" },
      { title: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api" },
      { title: "Guides", href: "/guides" },
      { title: "Community", href: "/community" },
      { title: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Cookie Policy", href: "/cookies" },
      { title: "GDPR", href: "/gdpr" },
      { title: "Security", href: "/security" },
    ],
  },
]

export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { name: "GitHub", href: "https://github.com", icon: "GitHub" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "LinkedIn" },
  { name: "Discord", href: "https://discord.com", icon: "MessageSquare" },
]
