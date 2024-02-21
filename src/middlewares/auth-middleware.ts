import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest
} from 'next/server'

import { refreshAccessToken } from '@/lib/auth'
import { COOKIE_PREFIX } from '@/lib/constants'
import { CustomMiddleware } from './chain'

// TODO: implement url callbacks
// TODO: Implement paths considering i18n
const loginPath = '/auth/login'
const protectedPath = '/app'

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next()

    const accessToken = request.cookies.get(`${COOKIE_PREFIX}access-token`)?.value
    const refreshToken = request.cookies.get(`${COOKIE_PREFIX}refresh-token`)?.value
    const pathname = request.nextUrl.pathname

    if (pathname.includes(protectedPath)) {
      if (!accessToken && !refreshToken) {
        const loginUrl = new URL(loginPath, request.url)
        return NextResponse.redirect(loginUrl)
      }

      if (!accessToken && refreshToken) {
        await refreshAccessToken(refreshToken, response)
      }
    }

    if (accessToken && refreshToken && pathname.includes(loginPath)) {
      const appUrl = new URL(protectedPath, request.url)
      return NextResponse.redirect(appUrl)
    }

    if (!accessToken && refreshToken && pathname.includes(protectedPath)) {
      await refreshAccessToken(refreshToken, response)
    }

    return middleware(request, event, response)
  }
}