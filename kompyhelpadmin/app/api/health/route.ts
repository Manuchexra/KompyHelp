import { type NextRequest, NextResponse } from "next/server"
import { mockSystemHealth } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    // Simulate real-time system health data
    const health = {
      ...mockSystemHealth,
      serverUptime: 99.9 + Math.random() * 0.1,
      responseTime: 1.2 + Math.random() * 0.5,
      activeSessions: 1247 + Math.floor(Math.random() * 100),
      databaseLoad: 45 + Math.floor(Math.random() * 20),
      memoryUsage: 67 + Math.floor(Math.random() * 15),
      diskSpace: 23 + Math.floor(Math.random() * 10),
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      health,
    })
  } catch (error) {
    console.error("Health check error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
