import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: true });

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: [
    '/write',
    '/write/update/:path*',
    '/api/posts/add',
    '/api/posts/remove/:path*',
    '/api/posts/update/:path*',
    '/api/posts/sitemap',
    '/api/reply/add',
    '/api/reply/remove/:path*',
    '/api/reply/update/:path*',
  ],
};
