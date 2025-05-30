import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: string
}

export function ResponsiveGrid({ children, className, cols, gap = "gap-4 md:gap-6", ...props }: ResponsiveGridProps) {
  const getGridCols = () => {
    if (!cols) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

    const { default: defaultCols, sm, md, lg, xl } = cols

    let classes = `grid-cols-${defaultCols}`
    if (sm) classes += ` sm:grid-cols-${sm}`
    if (md) classes += ` md:grid-cols-${md}`
    if (lg) classes += ` lg:grid-cols-${lg}`
    if (xl) classes += ` xl:grid-cols-${xl}`

    return classes
  }

  return (
    <div className={cn("grid", getGridCols(), gap, className)} {...props}>
      {children}
    </div>
  )
}
