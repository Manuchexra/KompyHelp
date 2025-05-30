// app/api/auth/login/route.ts
import { NextResponse } from "next/server"
import { BACKEND_URL } from "@/lib/constants"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // 1. Ma'lumotlarni tekshirish
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email va parol kiritilishi shart" },
        { status: 400 }
      )
    }

    // 2. Django backendga so'rov yuborish
    const response = await fetch(`${BACKEND_URL}/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include"
    })

    const responseData = await response.json()

    // 3. Xatolikni qaytarish
    if (!response.ok) {
      return NextResponse.json(
        { 
          message: responseData.detail || "Kirish muvaffaqiyatsiz", 
          errors: responseData.errors 
        },
        { status: response.status }
      )
    }

    // 4. Muvaffaqiyatli javob
    return NextResponse.json(
      { 
        token: responseData.token, 
        user: responseData.user,
        message: "Kirish muvaffaqiyatli" 
      },
      { 
        status: 200,
        headers: {
          "Set-Cookie": response.headers.get("Set-Cookie") || ""
        } 
      }
    )

  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { message: "Server ichki xatosi" },
      { status: 500 }
    )
  }
}