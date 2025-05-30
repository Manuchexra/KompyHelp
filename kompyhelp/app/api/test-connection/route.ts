import { NextResponse } from "next/server"
import { BACKEND_URL } from "@/lib/constants"

/**
 * A simple endpoint to test the connection to the backend
 */
export async function GET() {
  try {
    // Try to connect to the Django backend
    const response = await fetch(`${BACKEND_URL}/api/health-check/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Set a timeout to avoid hanging if the backend is down
      signal: AbortSignal.timeout(5000),
    })

    if (response.ok) {
      return NextResponse.json({
        status: "connected",
        message: "Successfully connected to the backend",
        backendUrl: BACKEND_URL,
      })
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: `Backend responded with status: ${response.status}`,
          backendUrl: BACKEND_URL,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Backend connection test failed:", error)
    return NextResponse.json(
      {
        status: "error",
        message: `Failed to connect to backend: ${error.message}`,
        backendUrl: BACKEND_URL,
      },
      { status: 500 },
    )
  }
}
