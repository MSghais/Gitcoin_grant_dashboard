import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }

export function middleware(req: NextRequest) {

    const url = req.nextUrl
    const { pathname } = url

    if (pathname.startsWith(`/api/`)) {
        if (!req.headers.get("referer")?.includes(process.env.APP_URL as string)) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
      }

     return NextResponse.next()

}

export const config = {
  matcher: ['/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)'],
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }