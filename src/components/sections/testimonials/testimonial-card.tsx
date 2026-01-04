import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/shared/icons/star-rating"
import { Testimonial } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

interface TestimonialCardProps extends Testimonial {
  className?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full hover:shadow-lg transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="mb-4">
          <StarRating rating={rating} />
        </div>
        
        <blockquote className="mb-6">
          <p className="text-lg italic text-muted-foreground">"{content}"</p>
        </blockquote>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div className="ml-4">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role} • {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
