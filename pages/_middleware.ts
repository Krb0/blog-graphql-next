import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req: any | NextRequest) {
  // token is the JWT token and exists if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  const { pathname } = req.nextUrl
  // if it's an api request it must have a token so as to prevent unathorized access to the api
  if (
    pathname.includes('/api') &&
    !pathname.includes('/auth') &&
    !pathname.includes('/comments') &&
    !pathname.includes('/postcomment')
  ) {
    if (req.headers.get('blogtoken') == process.env.SECRET) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect('https://krb0-blog-graphql.vercel.app')
    }
  }

  // if token doesn't exist must redirect to login page
  if (token && pathname === '/login') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
}
