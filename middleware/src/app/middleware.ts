// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// //This function can be marked 'async' if using await inside
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/home',request.url))
// }

// //see mactching path below to learn more
// export const config={
//     matcher: '/about/:path'
// }

import {NextResponse} from 'next/server'
import {NextRequest} from 'next/server'

// This function can be marked 'async' if using 'await' inside

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/about-2', request.url))
}

// See 'Matching path" below to learn more

export const config = {
    matcher: '/about/:path*',
}