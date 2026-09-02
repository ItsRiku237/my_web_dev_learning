import { NextResponse } from 'next/server'

// method 1 (Matcher):

// This function can be marked `async` if using `await` inside
// export function middleware(request) {

//     // u can send json responce insted of about page
//     // return NextResponse.json({ message: 'Hello from the about page' })

//     return NextResponse.redirect(new URL('/', request.url))
// }

// // See "Matching Paths" below u can match a single path or multiple paths with an array syntax:
// export const config = {

//     //   matcher: '/about/:path*',
//     matcher: ['/about/:path*', '/dashboard/:path*'],

// }


//Method 2 (Conditional Statements):

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}