import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/admin/users/`, {
      headers: {
        'Authorization': request.headers.get('Authorization') || ''
      }
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
    
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}