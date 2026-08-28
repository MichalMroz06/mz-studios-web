import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import * as argon2 from 'argon2';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const JWT_EXPIRES_IN = '7d';
const COOKIE_NAME = 'auth_token';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier, password } = body as { identifier: string; password: string };

    // Basic input validation
    if (!identifier?.trim() || !password?.trim()) {
      return NextResponse.json(
        { error: 'Adres e-mail/login oraz hasło są wymagane.' },
        { status: 400 }
      );
    }

    // Query user by email OR username
    const user = await db.user.findFirst({
      where: {
        OR: [
          { email: identifier.trim().toLowerCase() },
          { username: identifier.trim() },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Nieprawidłowy login lub hasło.' },
        { status: 401 }
      );
    }

    // Check if account is blocked
    if (user.isBlocked) {
      return NextResponse.json(
        { error: 'Konto zostało zablokowane. Skontaktuj się z administratorem.' },
        { status: 403 }
      );
    }

    // Verify Argon2id password hash
    const isPasswordValid = await argon2.verify(user.passwordHash, password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Nieprawidłowy login lub hasło.' },
        { status: 401 }
      );
    }

    // Sign JWT token
    const token = await new SignJWT({
      sub: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(JWT_EXPIRES_IN)
      .sign(JWT_SECRET);

    // Build response with HTTP-only cookie
    const response = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
      },
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error('[POST /api/auth/login] Error:', error);
    return NextResponse.json(
      { error: 'Błąd serwera. Spróbuj ponownie później.' },
      { status: 500 }
    );
  }
}
