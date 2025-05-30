import { type NextRequest, NextResponse } from "next/server"

// Mock authentication data
const users = [
  {
    id: 1,
    email: "user@example.com",
    password: "password123",
    role: "User",
    name: "Aziz Karimov",
  },
  {
    id: 2,
    email: "admin@kompyhelp.uz",
    password: "admin123",
    role: "Admin",
    name: "Sardor Usmonov",
  },
  {
    id: 3,
    email: "business@techcorp.com",
    password: "business123",
    role: "Business",
    name: "TechCorp Solutions",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password, action } = await request.json()

    if (action === "login") {
      const user = users.find((u) => u.email === email && u.password === password)

      if (user) {
        return NextResponse.json({
          success: true,
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
          },
          redirectUrl: `/dashboard/${user.role.toLowerCase()}`,
        })
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid credentials",
          },
          { status: 401 },
        )
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Invalid action",
      },
      { status: 400 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 },
    )
  }
}
