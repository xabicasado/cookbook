import { type NextRequest, NextResponse } from 'next/server'

import { getServerInjection } from '@/di/server/container'

const shouldExclude = (request: NextRequest) =>
  request.nextUrl.pathname === '/sign-in' ||
  request.nextUrl.pathname === '/' ||
  (request.nextUrl.pathname.startsWith('/recipes') &&
    !request.nextUrl.pathname.startsWith('/recipes/new'))

export default async function proxy(request: NextRequest) {
  const isExcludedPath = shouldExclude(request)

  if (!isExcludedPath) {
    try {
      const authenticationService = getServerInjection('IAuthenticationService')
      await authenticationService.getUser()
    } catch (error) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.icon (favicon file)
     * - .svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .bmp, .avif (images)
     * - sitemap.xml, robots.txt, .webmanifest files (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*.(?:svg|png|jpg|jpeg|gif|webp|ico|bmp|avif|webmanifest)$|sitemap.xml|robots.txt$).*)',
  ],
}
