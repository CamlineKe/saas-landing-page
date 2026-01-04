export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "SaaSPro",
  description: "A modern SaaS platform for building better products faster.",
  url: "https://saaspro.example.com",
  ogImage: "https://saaspro.example.com/og.jpg",
  links: {
    twitter: "https://twitter.com/saaspro",
    github: "https://github.com/saaspro",
  },
}

export const mainNavItems: MainNavItem[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Resources",
    href: "#resources",
  },
  {
    title: "Contact",
    href: "#contact",
  }
]
