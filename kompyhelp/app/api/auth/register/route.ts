import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Registration request:", body);

    // Validate required fields
    if (!body.email || !body.name || !body.password || !body.confirmPassword) {
      return NextResponse.json(
        { success: false, message: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    // Password match validation
    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { success: false, message: "Parollar mos kelmadi" },
        { status: 400 }
      );
    }

    const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        name: body.name,
        password: body.password,
        password_confirm: body.confirmPassword,
        role: body.role || "INDIVIDUAL",
        language: body.language || "uz",
      }),
    });

    const responseData = await backendResponse.json();
    console.log("Backend response data:", responseData);

    if (!backendResponse.ok) {
      return NextResponse.json(
        { 
          success: false,
          message: responseData.detail || 
                  responseData.message || 
                  "Ro'yxatdan o'tishda xatolik" 
        },
        { status: backendResponse.status }
      );
    }

    // Token mavjud bo'lsa cookiega o'rnatamiz, bo'lmasa ham davom etamiz
    const token = responseData.token || responseData.access_token;
    const apiResponse = NextResponse.json({
      success: true,
      user: responseData.user,
      message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi",
      hasToken: !!token, // Token bor-yo'qligini bildiradi
    });

    if (token) {
      apiResponse.cookies.set({
        name: "auth_token",
        value: token,
        httpOnly: true,
        path: "/uz/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
    }

    return apiResponse;

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Ichki server xatosi" },
      { status: 500 }
    );
  }
}