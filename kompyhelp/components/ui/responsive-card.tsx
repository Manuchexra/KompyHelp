import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ResponsiveCardProps {
  children: ReactNode
  className?: string
  fullWidthOnMobile?: boolean
}

export function ResponsiveCard({ children, className, fullWidthOnMobile = true, ...props }: ResponsiveCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200",
        {
          "sm:rounded-lg rounded-none sm:border border-x-0 sm:mx-0 -mx-4": fullWidthOnMobile,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  )
}

export function ResponsiveCardHeader({ children, className, ...props }: { children: ReactNode; className?: string }) {
  return (
    <CardHeader className={cn("px-4 sm:px-6", className)} {...props}>
      {children}
    </CardHeader>
  )
}

export function ResponsiveCardTitle({ children, className, ...props }: { children: ReactNode; className?: string }) {
  return (
    <CardTitle className={cn("text-xl sm:text-2xl", className)} {...props}>
      {children}
    </CardTitle>
  )
}

export function ResponsiveCardDescription({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <CardDescription className={cn("text-sm sm:text-base", className)} {...props}>
      {children}
    </CardDescription>
  )
}

export function ResponsiveCardContent({ children, className, ...props }: { children: ReactNode; className?: string }) {
  return (
    <CardContent className={cn("px-4 sm:px-6", className)} {...props}>
      {children}
    </CardContent>
  )
}

export function ResponsiveCardFooter({ children, className, ...props }: { children: ReactNode; className?: string }) {
  return (
    <CardFooter className={cn("px-4 sm:px-6 flex-col sm:flex-row gap-2 sm:gap-0", className)} {...props}>
      {children}
    </CardFooter>
  )
}
