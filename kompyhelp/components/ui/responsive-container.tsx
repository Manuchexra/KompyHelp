import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  fluid?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  fluid = false,
  ...props
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 md:px-8",
        {
          "max-w-7xl": !fluid,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
