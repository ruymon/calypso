import { withAuthMiddleware } from "./middlewares/auth-middleware"
import { chainedMiddlewares } from "./middlewares/chain"
import { withI18nMiddleware } from "./middlewares/i18n-middleware"


export default chainedMiddlewares([withAuthMiddleware, withI18nMiddleware])

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}

// middleware.ts
// import { createI18nMiddleware } from 'next-international/middleware'
 
// const I18nMiddleware = createI18nMiddleware({
//   locales: ['en', 'pt'],
//   defaultLocale: 'en'
// })
 
// export function middleware(request: NextRequest) {
//   return I18nMiddleware(request)
// }
 
// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
// }