import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest
} from 'next/server'

import { COOKIE_PREFIX } from '@/constants/cookies'
import { refreshAccessToken } from '@/lib/auth'
import { CustomMiddleware } from './chain'
import { i18nMiddlewareConfig } from './i18n-middleware'

// TODO: implement url callbacks

const publicPaths = ['/home', '/legal', '/auth/login', '/auth/forgot-password']

function getPublicRoutes(publicPaths: string[], locales: string[]) {
  let publicPathsWithLocale = [...publicPaths]

  publicPaths.forEach(path => {
    locales.forEach(locale => {
      publicPathsWithLocale.push(`/${locale}${path}`)
    })
  })

  return publicPathsWithLocale
}

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next()

    const accessToken = request.cookies.get(`${COOKIE_PREFIX}access-token`)?.value
    const refreshToken = request.cookies.get(`${COOKIE_PREFIX}refresh-token`)?.value

    const pathname = request.nextUrl.pathname

    const publicPathsWithLocale = getPublicRoutes(publicPaths, i18nMiddlewareConfig.locales)

    // Protected routes
    if(!(publicPathsWithLocale.includes(pathname))) {
      if (!accessToken && !refreshToken) {
        const loginUrl = new URL('auth/login', request.url)
        return NextResponse.redirect(loginUrl)
      }

      if (!accessToken && refreshToken) {
        await refreshAccessToken(refreshToken, response)
      }
    }

    return middleware(request, event, response)
  }
}