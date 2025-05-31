import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ success: false, error: "Xabar talab qilinadi" }, { status: 400 })
    }

    // Simple chatbot responses
    const responses = {
      greeting: [
        "Salom! KompyHelp chatbotiga xush kelibsiz! Sizga qanday yordam bera olaman?",
        "Assalomu alaykum! Men sizga texnik masalalar bo'yicha yordam bera olaman.",
        "Salom! Kompyuter muammolaringizni hal qilishda yordam kerakmi?",
      ],
      help: [
        "Men sizga quyidagi mavzularda yordam bera olaman:\n• Kompyuter muammolari\n• Internet ulanish\n• Dasturiy ta'minot\n• Xavfsizlik masalalari\n• Umumiy texnik yordam",
        "Qanday muammo bor? Menga batafsil aytib bering, men sizga eng yaxshi yechimni taklif qilaman.",
      ],
      computer: [
        "Kompyuter muammosi bormi? Quyidagilarni sinab ko'ring:\n1. Kompyuterni qayta ishga tushiring\n2. Barcha kabellar to'g'ri ulanganini tekshiring\n3. Agar muammo davom etsa, bizga qo'ng'iroq qiling: +998 90 123 45 67",
        "Kompyuter sekin ishlayaptimi? Disk tozalash va viruslarni tekshirishni tavsiya qilaman.",
      ],
      internet: [
        "Internet muammosi bormi? Quyidagilarni sinab ko'ring:\n1. Wi-Fi routerni qayta ishga tushiring\n2. Tarmoq kabellarini tekshiring\n3. Internet provayderingiz bilan bog'laning",
        "Internet tezligi sekinmi? Speedtest.net orqali tezlikni tekshiring va natijani bizga yuboring.",
      ],
      price: [
        "Bizning xizmat narxlari:\n• Asosiy yordam: 50,000 so'm/oy\n• Professional: 100,000 so'm/oy\n• Korporativ: 200,000 so'm/oy\n\nBatafsil ma'lumot uchun: +998 90 123 45 67",
        "Narxlar haqida batafsil ma'lumot olish uchun bizning savdo bo'limi bilan bog'laning.",
      ],
      contact: [
        "Biz bilan bog'lanish:\n📞 Telefon: +998 90 123 45 67\n📧 Email: support@kompyhelp.uz\n🕒 Ish vaqti: 9:00-18:00 (Dush-Juma)\n📍 Manzil: Toshkent, Chilonzor tumani",
        "Shoshilinch yordam kerakmi? 24/7 qo'ng'iroq qiling: +998 90 123 45 67",
      ],
      security: [
        "Xavfsizlik masalalari jiddiy! Quyidagilarni bajaring:\n1. Antivirusni yangilang\n2. Shubhali fayllarni ochmang\n3. Parollaringizni mustahkamlang\n4. Tizimni muntazam yangilang",
        "Virus topildimi? Darhol internetni uzib, bizga qo'ng'iroq qiling: +998 90 123 45 67",
      ],
      emergency: [
        "Shoshilinch yordam kerakmi? Darhol qo'ng'iroq qiling:\n📞 +998 90 123 45 67\n\nYoki telegram orqali: @kompyhelp_support",
        "24/7 shoshilinch yordam xizmati mavjud. Bizga darhol murojaat qiling!",
      ],
      default: [
        "Kechirasiz, bu savolni tushunmadim. Iltimos, boshqacha so'zlar bilan yozing yoki bizga qo'ng'iroq qiling: +998 90 123 45 67",
        "Bu mavzu bo'yicha aniq javob bera olmayman. Mutaxassislarimiz bilan bog'laning: support@kompyhelp.uz",
        "Batafsil yordam uchun bizning operatorlarimiz bilan gaplashing: +998 90 123 45 67",
      ],
    }

    // Determine response type based on message content
    const messageLower = message.toLowerCase()
    let responseType = "default"

    if (messageLower.includes("salom") || messageLower.includes("assalom") || messageLower.includes("hello")) {
      responseType = "greeting"
    } else if (messageLower.includes("yordam") || messageLower.includes("help")) {
      responseType = "help"
    } else if (
      messageLower.includes("kompyuter") ||
      messageLower.includes("computer") ||
      messageLower.includes("sekin")
    ) {
      responseType = "computer"
    } else if (messageLower.includes("internet") || messageLower.includes("wifi") || messageLower.includes("tarmoq")) {
      responseType = "internet"
    } else if (messageLower.includes("narx") || messageLower.includes("price") || messageLower.includes("pul")) {
      responseType = "price"
    } else if (
      messageLower.includes("telefon") ||
      messageLower.includes("aloqa") ||
      messageLower.includes("contact") ||
      messageLower.includes("manzil")
    ) {
      responseType = "contact"
    } else if (
      messageLower.includes("virus") ||
      messageLower.includes("xavfsizlik") ||
      messageLower.includes("security") ||
      messageLower.includes("hack")
    ) {
      responseType = "security"
    } else if (
      messageLower.includes("shoshilinch") ||
      messageLower.includes("emergency") ||
      messageLower.includes("tez")
    ) {
      responseType = "emergency"
    }

    // Get random response from the selected type
    const responseArray = responses[responseType as keyof typeof responses]
    const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)]

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    return NextResponse.json({
      success: true,
      response: randomResponse,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
