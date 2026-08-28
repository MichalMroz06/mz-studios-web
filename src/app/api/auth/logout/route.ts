import { NextResponse } from 'next/server';

const COOKIE_NAME = 'auth_token';

export async function POST() {
  const response = NextResponse.json({ ok: true, message: 'Wylogowano pomyślnie.' });

  // Clear the auth cookie
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
