import { type NextRequest, NextResponse } from "next/server"
import { mockAnalytics, mockTickets, mockUsers } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const period = searchParams.get("period") || "month"

    // Calculate real-time analytics from mock data
    const totalUsers = mockUsers.length
    const businessUsers = mockUsers.filter((u) => u.role === "business").length
    const regularUsers = mockUsers.filter((u) => u.role === "user").length
    const adminUsers = mockUsers.filter((u) => u.role === "admin").length

    const totalTickets = mockTickets.length
    const openTickets = mockTickets.filter((t) => t.status === "open").length
    const inProgressTickets = mockTickets.filter((t) => t.status === "in-progress").length
    const resolvedTickets = mockTickets.filter((t) => t.status === "resolved").length

    // Calculate resolution rate
    const resolutionRate = totalTickets > 0 ? (resolvedTickets / totalTickets) * 100 : 0

    const analytics = {
      ...mockAnalytics,
      totalUsers,
      businessUsers,
      regularUsers,
      adminUsers,
      totalTickets,
      openTickets,
      inProgressTickets,
      resolvedTickets,
      resolutionRate: Math.round(resolutionRate * 10) / 10,
      period,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      analytics,
    })
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
