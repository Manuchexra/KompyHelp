import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if user is accessing dashboard routes
  if (pathname.startsWith("/dashboard/")) {
    // In a real app, you would check authentication here
    // For now, we'll allow access to all dashboard routes
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
