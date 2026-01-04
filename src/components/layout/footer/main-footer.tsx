import Link from "next/link"
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { footerColumns, socialLinks } from "@/lib/data/footer"
import { cn } from "@/lib/utils"

export function MainFooter() {
  const currentYear = new Date().getFullYear()

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Twitter":
        return <Twitter className="h-4 w-4" />
      case "GitHub":
        return <Github className="h-4 w-4" />
      case "LinkedIn":
        return <Linkedin className="h-4 w-4" />
      case "Facebook":
        return <Facebook className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600" />
              <span className="text-xl font-bold">SaaSPro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A modern SaaS platform that helps teams design, develop, and deploy products with incredible speed and precision.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-medium">Stay up to date</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border rounded-lg bg-background"
                />
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} SaaSPro. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {getIcon(social.icon)}
                  </a>
                </Button>
              ))}
            </div>

            <Separator orientation="vertical" className="h-4" />

            {/* Language selector */}
            <select className="text-sm bg-transparent border-0 focus:outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
