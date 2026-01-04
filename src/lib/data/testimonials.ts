export type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content: "This platform has transformed how our team collaborates. We've reduced our development cycle by 40% and the interface is incredibly intuitive.",
    rating: 5,
    avatar: "/images/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CTO",
    company: "StartupXYZ",
    content: "The best investment we've made this year. The analytics alone have helped us make data-driven decisions that increased our conversion rate by 25%.",
    rating: 5,
    avatar: "/images/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Engineering Lead",
    company: "InnovateLabs",
    content: "As a developer, I appreciate the clean API and comprehensive documentation. It's rare to find a tool that balances power with simplicity so well.",
    rating: 4,
    avatar: "/images/testimonials/avatar3.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "GrowthDigital",
    content: "We tried three other platforms before settling on this one. The difference in customer support and feature set is night and day.",
    rating: 5,
    avatar: "/images/testimonials/avatar4.jpg",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "CreativeMinds",
    content: "The design system integration saved us hundreds of hours. Our designers and developers are finally speaking the same language.",
    rating: 5,
    avatar: "/images/testimonials/avatar5.jpg",
  },
  {
    id: 6,
    name: "James Kim",
    role: "Operations Manager",
    company: "ScaleFast",
    content: "Implementation was seamless and the ROI was immediate. Our team adopted it with minimal training and now can't imagine working without it.",
    rating: 4,
    avatar: "/images/testimonials/avatar6.jpg",
  },
]
