import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./config/internationalization";
import { COOKIE_PREFIX } from "./constants/cookies";
import { refreshAccessTokenInMiddleware } from "./lib/auth";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
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

  const isPublicAuthRoute = request.nextUrl.pathname.includes("/auth");
  const isInLoginPage = request.nextUrl.pathname.includes("/auth/login");

  if (!accessToken && !refreshToken && !isPublicAuthRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (!accessToken && refreshToken) {
    try {
      await refreshAccessTokenInMiddleware(refreshToken, response);
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  if (accessToken && refreshToken && isInLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
