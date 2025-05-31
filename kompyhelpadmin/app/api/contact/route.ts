import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json(
        {
          success: false,
          error: "Ism, email va xabar talab qilinadi",
        },
        { status: 400 },
      )
    }

    // In a real app, you would save this to a database or send an email
    console.log("Contact form submission:", contactData)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beramiz!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
