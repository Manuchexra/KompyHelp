import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function ResponsiveSection({ children, className, id, ...props }: ResponsiveSectionProps) {
  return (
    <section id={id} className={cn("py-8 sm:py-12 md:py-16 lg:py-20", className)} {...props}>
      {children}
    </section>
  )
}

export function ResponsiveSectionTitle({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6", className)} {...props}>
      {children}
    </h2>
  )
}

export function ResponsiveSectionDescription({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl", className)} {...props}>
      {children}
    </p>
  )
}
