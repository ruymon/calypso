import { NextResponse, type NextRequest } from "next/server";

import { COOKIE_PREFIX } from "@/constants/cookies";
import { refreshAccessToken } from "@/lib/auth";

// TODO: implement url callbacks
const publicPathsPattern = /\/(home|legal|auth|blog)\b/;

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

  const isPublic = publicPathsPattern.test(pathname);

  if (!isPublic && !accessToken && !refreshToken) {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!accessToken && refreshToken) {
    await refreshAccessToken(refreshToken, response);
    return response;
  }

  return response;
}
