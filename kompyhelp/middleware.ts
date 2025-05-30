import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Paths that require authentication
const protectedPaths = ["/dashboard", "/admin/dashboard", "/profile"]

// Paths that should redirect to dashboard if already authenticated
const authPaths = ["/login", "/register"]

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl

  // Get the token from cookies
  const token = request.cookies.get("auth_token")?.value
  const isAuthenticated = !!token

  // Check if the path is protected and user is not authenticated
  const isProtectedPath = protectedPaths.some(
    (path) => pathname.startsWith(`/${locale}${path}`) || pathname.startsWith(path),
  )

  if (isProtectedPath && !isAuthenticated) {
    const url = new URL(`/${locale}/login`, request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // Check if the path is an auth path and user is already authenticated
  const isAuthPath = authPaths.some((path) => pathname.startsWith(`/${locale}${path}`) || pathname.startsWith(path))

  if (isAuthPath && isAuthenticated) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except for static files, api routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}

