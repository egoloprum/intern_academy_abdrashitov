import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// need to use DB to deny and accept paths
export async function middleware(request: NextRequest) {
  // const session = await getServerSession(authOptions);

  // // if (!session && request.nextUrl.pathname === '/') {
  // //   return NextResponse.redirect(new URL('/login', request.url));
  // // }

  // // if (session && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
  // //   return NextResponse.redirect(new URL('/', request.url));
  // // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
