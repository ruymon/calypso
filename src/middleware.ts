import { withAuthMiddleware } from "./middlewares/auth-middleware"
import { chainedMiddlewares } from "./middlewares/chain"
import { withI18nMiddleware } from "./middlewares/i18n-middleware"

// const I18nMiddleware = createI18nMiddleware(i18nConfig)

// export function middleware(request: NextRequest) {
//   return I18nMiddleware(request)
// }

export default chainedMiddlewares([withAuthMiddleware, withI18nMiddleware])

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}