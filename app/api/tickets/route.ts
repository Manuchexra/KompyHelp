import { type NextRequest, NextResponse } from "next/server"
import { mockTickets } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const status = searchParams.get("status")
    const priority = searchParams.get("priority")

    let filteredTickets = [...mockTickets]

    // Filter by user ID
    if (userId) {
      filteredTickets = filteredTickets.filter((ticket) => ticket.userId === userId)
    }

    // Filter by status
    if (status) {
      filteredTickets = filteredTickets.filter((ticket) => ticket.status === status)
    }

    // Filter by priority
    if (priority) {
      filteredTickets = filteredTickets.filter((ticket) => ticket.priority === priority)
    }

    return NextResponse.json({
      success: true,
      tickets: filteredTickets,
      total: filteredTickets.length,
    })
  } catch (error) {
    console.error("Get tickets error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ticketData = await request.json()

    // Validate required fields
    if (!ticketData.title || !ticketData.description || !ticketData.userId) {
      return NextResponse.json(
        {
          success: false,
          error: "Sarlavha, tavsif va foydalanuvchi ID talab qilinadi",
        },
        { status: 400 },
      )
    }

    // Create new ticket
    const newTicket = {
      id: `T-${String(mockTickets.length + 1).padStart(3, "0")}`,
      title: ticketData.title,
      description: ticketData.description,
      priority: ticketData.priority || "medium",
      status: "open",
      userId: ticketData.userId,
      category: ticketData.category || "Umumiy",
      department: ticketData.department,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Add to mock database
    mockTickets.push(newTicket)

    return NextResponse.json({
      success: true,
      ticket: newTicket,
      message: "Tiket muvaffaqiyatli yaratildi",
    })
  } catch (error) {
    console.error("Create ticket error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
