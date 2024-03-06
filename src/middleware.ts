import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { authMiddleware } from "./middlewares/auth-middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
});

export default async function middleware(request: NextRequest) {
  let response = I18nMiddleware(request);
  response = await authMiddleware(request, response);

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
