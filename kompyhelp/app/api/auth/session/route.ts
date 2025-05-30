import { NextResponse } from "next/server"
import { BACKEND_URL, API_ENDPOINTS } from "@/lib/constants"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("auth_token")?.value

  // 1. Handle missing token case
  if (!token) {
    return createUnauthorizedResponse()
  }

  try {
    // 2. Fetch user data from Django backend
    const response = await fetch(`${BACKEND_URL}${API_ENDPOINTS.USER}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      cache: 'no-store' // Important for sensitive data
    })

    // 3. Handle invalid/expired token
    if (!response.ok) {
      return createUnauthorizedResponse()
    }

    // 4. Return user data
    const userData = await response.json()
    return NextResponse.json({ 
      user: userData 
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    })

  } catch (error) {
    console.error("Session error:", error)
    return NextResponse.json(
      { message: "Internal server error", user: null }, 
      { status: 500 }
    )
  }
}

// Helper function for unauthorized responses
function createUnauthorizedResponse() {
  const response = NextResponse.json(
    { user: null, message: "Unauthorized" }, 
    { status: 401 }
  )
  
  // Clear the auth cookie
  response.cookies.set({
    name: "auth_token",
    value: "",
    httpOnly: true,
    path: "/",
    expires: new Date(0),
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  })

  return response
}