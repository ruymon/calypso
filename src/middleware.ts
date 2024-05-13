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
  const nextUrl = request.nextUrl;

  const pathnameLocale = nextUrl.pathname.split("/", 2)?.[1];
  const pathnameWithoutLocale = nextUrl.pathname.slice(
    pathnameLocale!.length + 1,
  );

  const newUrl = new URL(pathnameWithoutLocale || "/", request.url);

  const accessToken = request.cookies.get(
    `${COOKIE_PREFIX}access-token`,
  )?.value;
  const refreshToken = request.cookies.get(
    `${COOKIE_PREFIX}refresh-token`,
  )?.value;

  if (!accessToken && refreshToken) {
    await refreshAccessTokenInMiddleware(refreshToken, response);
    return response;
  }

  if (
    !accessToken &&
    !refreshToken &&
    newUrl.pathname !== "/auth/login" &&
    newUrl.pathname !== "/auth/forgot-password"
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
