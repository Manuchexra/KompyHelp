import { type NextRequest, NextResponse } from "next/server"
import { mockUsers } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json()

    // Validate required fields
    if (!userData.email || !userData.password || !userData.name) {
      return NextResponse.json(
        {
          success: false,
          error: "Email, parol va ism talab qilinadi",
        },
        { status: 400 },
      )
    }

    // Check if email already exists
    const existingUser = mockUsers.find((user) => user.email === userData.email)
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "Bu email allaqachon ro'yxatdan o'tgan",
        },
        { status: 400 },
      )
    }

    // Create new user
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role || "user",
      password: userData.password,
      createdAt: new Date().toISOString(),
      phone: userData.phone,
      address: userData.address,
      notifications: userData.notifications || {
        email: true,
        sms: false,
        marketing: false,
      },
      // Business specific fields
      ...(userData.role === "business" && {
        employees: userData.employees || 1,
        plan: userData.plan || "Asosiy",
      }),
    }

    // Add to mock database
    mockUsers.push(newUser)

    // Generate mock token
    const token = `mock_token_${newUser.id}_${Date.now()}`

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token,
      message: "Muvaffaqiyatli ro'yxatdan o'tdingiz",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server xatosi",
      },
      { status: 500 },
    )
  }
}
