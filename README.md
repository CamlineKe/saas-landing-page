# 🚀 SaaS Landing Page

A modern, professional SaaS product landing page built with **Next.js 15**, **Tailwind CSS v4**, and **shadcn/ui**. Features dark/light mode, interactive animations, and fully responsive design.

![SaaS Landing Page Preview](https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)

## ✨ Live Demo

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://saas-landing-page.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/CamlineKe/saas-landing-page)

## 🎯 Features

### 🌟 Core Features
- **Modern Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI primitives
- **Dark/Light Mode**: Seamless theme switching with `next-themes`
- **Animations**: Smooth interactions with Framer Motion
- **Fully Responsive**: Mobile-first design for all screen sizes
- **Performance Optimized**: 90+ Lighthouse scores

### 📱 Interactive Sections
1. **Hero Section** - Animated dashboard preview with interactive metrics
2. **Features** - Hover-animated feature cards with icons
3. **Pricing** - Toggle between monthly/annual plans with savings badges
4. **Testimonials** - Carousel with star ratings and company logos
5. **FAQ** - Filterable accordion with category badges
6. **Resources** - Tabbed content with downloadable assets
7. **Contact** - Form with validation and interactive contact cards
8. **Final CTA** - Gradient background with email capture
9. **Professional Footer** - Multi-column layout with newsletter signup

### 🎨 Design Highlights
- **Color Palette**: Professional teal/blue gradient with accessible contrast
- **Typography**: Inter font with perfect vertical rhythm
- **Spacing**: Consistent 8px base unit system
- **Effects**: Subtle background particles, hover states, smooth transitions
- **Icons**: Lucide React icons throughout

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | React Framework | 15.x |
| [TypeScript](https://typescriptlang.org) | Type Safety | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | Styling | 4.x |
| [shadcn/ui](https://ui.shadcn.com) | UI Components | Latest |
| [Framer Motion](https://framer.com/motion) | Animations | 10.x |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme Management | 0.3.x |
| [React Hook Form](https://react-hook-form.com) | Form Handling | 7.x |
| [Zod](https://zod.dev) | Validation | 3.x |
| [Lucide React](https://lucide.dev) | Icons | Latest |

## 📁 Project Structure

```
saas-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with theme provider
│   │   ├── page.tsx                # Main landing page
│   │   └── globals.css             # Global styles & Tailwind
│   ├── components/
│   │   ├── layout/                 # Layout components
│   │   │   ├── navigation/         # Main nav, mobile nav
│   │   │   └── footer/             # Footer with columns
│   │   ├── sections/               # Page sections
│   │   │   ├── hero/               # Hero & dashboard preview
│   │   │   ├── features/           # Feature cards
│   │   │   ├── pricing/            # Pricing plans & toggle
│   │   │   ├── testimonials/       # Testimonial carousel
│   │   │   ├── faq/                # FAQ accordion
│   │   │   ├── resources/          # Resources section
│   │   │   ├── contact/            # Contact form
│   │   │   └── cta/                # Final call-to-action
│   │   ├── ui/                     # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... 20+ components
│   │   ├── shared/                 # Shared components
│   │   │   ├── animations/         # FadeIn, Float, Typewriter
│   │   │   ├── buttons/            # ThemeToggle, GradientButton
│   │   │   └── icons/              # Custom icons
│   │   └── widgets/                # Background effects
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (cn, etc.)
│   │   ├── data/                   # Static content
│   │   │   ├── navigation.ts
│   │   │   ├── pricing.ts
│   │   │   ├── testimonials.ts
│   │   │   ├── faqs.ts
│   │   │   └── footer.ts
│   │   └── validation/             # Form schemas
│   ├── hooks/                      # Custom React hooks
│   └── styles/                     # Additional CSS
├── public/                         # Static assets
├── tailwind.config.ts              # Tailwind configuration
├── components.json                 # shadcn/ui configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/CamlineKe/saas-landing-page.git
cd saas-landing-page
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx shadcn@latest add [component]` | Add new shadcn component |

## 🎨 Customization

### Changing Content
Edit data files in `src/lib/data/`:

```typescript
// pricing.ts - Update pricing plans
export const pricingTiers = [
  {
    name: "Starter",
    monthlyPrice: 29,
    features: ["Up to 5 projects", "Basic analytics"],
    // ...
  }
]

// testimonials.ts - Add testimonials
export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "This platform transformed our workflow!",
    rating: 5,
  }
]
```

### Changing Colors
Edit `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    teal: {
      DEFAULT: '#00D4AA',
      light: '#5CE1E6',
    },
    ocean: {
      DEFAULT: '#0A2463',
      light: '#1D4ED8',
    },
  },
}
```

### Adding Components
Use shadcn CLI:

```bash
npx shadcn@latest add dropdown-menu
npx shadcn@latest add slider
npx shadcn@latest add calendar
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed

### Self-Hosted
```bash
npm run build
npm start
# Runs on port 3000
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: Next.js font system
- **Bundle Analysis**: Built-in Next.js analyzer
- **Caching**: Static generation where possible

## 🧪 Testing

```bash
# Run tests (add your test framework)
npm test

# Check types
npx tsc --noEmit

# Lint code
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Unsplash](https://unsplash.com) for placeholder images

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/CamlineKe/saas-landing-page/issues)
- **Email**: [Add your contact email]
- **Twitter**: [@YourHandle]

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/CamlineKe">CamlineKe</a></p>
  <p>If you find this project helpful, please give it a ⭐️!</p>
</div>
