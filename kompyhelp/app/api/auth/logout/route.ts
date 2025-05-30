import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();

  try {
    // 1. Backenddan chiqish
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/logout/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${cookieStore.get('auth_token')?.value || ''}`,
        'Content-Type': 'application/json',
      },
    });

    // 2. Cookie'ni tozalash
    const res = NextResponse.json({ success: true });
    res.cookies.set({
      name: 'auth_token',
      value: '',
      expires: new Date(0),
      path: '/',
    });

    return res;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}