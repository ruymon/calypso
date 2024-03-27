import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { COOKIE_PREFIX } from "./constants/cookies";
import { refreshAccessToken } from "./lib/auth";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export default async function middleware(request: NextRequest) {
  const response = I18nMiddleware(request);

  const accessToken = request.cookies.get(
    `${COOKIE_PREFIX}access-token`,
  )?.value;
  const refreshToken = request.cookies.get(
    `${COOKIE_PREFIX}refresh-token`,
  )?.value;

  if (!accessToken && refreshToken) {
    await refreshAccessToken(refreshToken, response);
    return response;
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
