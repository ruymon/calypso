import { NextResponse, type NextRequest } from "next/server";

import { Locales } from "@/config/i18n";
import { COOKIE_PREFIX } from "@/constants/cookies";
import { refreshAccessToken } from "@/lib/auth";

// TODO: implement url callbacks

const publicPaths = [
  "/home",
  "/legal/tos",
  "/legal/privacy",
  "/auth/login",
  "/auth/forgot-password",
];

function getPublicRoutes(publicPaths: string[], locales: string[]) {
  let publicPathsWithLocale = [...publicPaths];

  publicPaths.forEach((path) => {
    locales.forEach((locale) => {
      publicPathsWithLocale.push(`/${locale}${path}`);
    });
  });

  return publicPathsWithLocale;
}

export async function authMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const accessToken = request.cookies.get(
    `${COOKIE_PREFIX}access-token`,
  )?.value;
  const refreshToken = request.cookies.get(
    `${COOKIE_PREFIX}refresh-token`,
  )?.value;

  const pathname = request.nextUrl.pathname;

  const publicPathsWithLocale = getPublicRoutes(publicPaths, Locales);

  if (!publicPathsWithLocale.includes(pathname)) {
    if (!accessToken && !refreshToken) {
      const homeUrl = new URL("/home", request.url);
      return NextResponse.redirect(homeUrl);
    }

    if (!accessToken && refreshToken) {
      await refreshAccessToken(refreshToken, response);
    }
  }

  return response;
}
