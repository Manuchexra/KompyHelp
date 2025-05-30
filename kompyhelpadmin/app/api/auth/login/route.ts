import { type NextRequest, NextResponse } from "next/server"
import { mockUsers } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email va parol talab qilinadi" }, { status: 400 })
    }

    // Find user by email
    const user = mockUsers.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json({ success: false, error: "Foydalanuvchi topilmadi" }, { status: 401 })
    }

    // In a real app, you would verify the password hash
    // For demo purposes, we accept any password or check against mock password
    if (user.password && password !== user.password && password !== "demo123") {
      return NextResponse.json({ success: false, error: "Noto'g'ri parol" }, { status: 401 })
    }

    // Generate mock token
    const token = `mock_token_${user.id}_${Date.now()}`

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token,
      message: "Muvaffaqiyatli kirildi",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
