import { type NextRequest, NextResponse } from "next/server"
import { mockUsers } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const role = searchParams.get("role")
    const search = searchParams.get("search")

    let filteredUsers = [...mockUsers]

    // Filter by role
    if (role) {
      filteredUsers = filteredUsers.filter((user) => user.role === role)
    }

    // Search by name or email
    if (search) {
      const searchLower = search.toLowerCase()
      filteredUsers = filteredUsers.filter(
        (user) => user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower),
      )
    }

    // Remove passwords from response
    const usersWithoutPasswords = filteredUsers.map(({ password, ...user }) => user)

    return NextResponse.json({
      success: true,
      users: usersWithoutPasswords,
      total: usersWithoutPasswords.length,
    })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json()

    // Validate required fields
    if (!userData.email || !userData.name || !userData.role) {
      return NextResponse.json(
        {
          success: false,
          error: "Email, ism va rol talab qilinadi",
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
          error: "Bu email allaqachon mavjud",
        },
        { status: 400 },
      )
    }

    // Create new user
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role,
      password: userData.password || "default123",
      createdAt: new Date().toISOString(),
      phone: userData.phone,
      address: userData.address,
      notifications: userData.notifications,
      // Business specific fields
      ...(userData.role === "business" && {
        employees: userData.employees,
        plan: userData.plan,
      }),
      // Admin specific fields
      ...(userData.role === "admin" && {
        permissions: userData.permissions,
      }),
    }

    // Add to mock database
    mockUsers.push(newUser)

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      message: "Foydalanuvchi muvaffaqiyatli yaratildi",
    })
  } catch (error) {
    console.error("Create user error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
