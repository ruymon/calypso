"use server";

import { ForgotPasswordFormType } from "@/app/[locale]/(public)/auth/_components/forgot-password-form";
import { LoginFormType } from "@/app/[locale]/(public)/auth/_components/login-form";
import {
  COOKIE_DOMAIN,
  COOKIE_PREFIX,
  IS_SECURE_COOKIE,
} from "@/constants/cookies";
import { env } from "@/env.mjs";
import { firebaseAuth } from "@/lib/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { decodeJwt } from "jose";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function login({ email, password }: LoginFormType) {
  const userCredentials = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  );

  const userAccessToken = await userCredentials.user.getIdTokenResult();
  const accessTokenMaxAge = userAccessToken.expirationTime;
  const userRefreshToken = await userCredentials.user.refreshToken;

  cookies().set(`${COOKIE_PREFIX}access-token`, userAccessToken.token, {
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(accessTokenMaxAge).getTime(),
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });

  cookies().set(`${COOKIE_PREFIX}refresh-token`, userRefreshToken, {
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });
}

export async function logout() {
  cookies().delete(`${COOKIE_PREFIX}access-token`);
  cookies().delete(`${COOKIE_PREFIX}refresh-token`);

  try {
    await signOut(firebaseAuth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
}

export async function passwordReset({ email }: ForgotPasswordFormType) {
  sendPasswordResetEmail(firebaseAuth, email);
}

function getAccessTokenFromHeaders() {
  const setCookieHeaderValue = headers().get("set-cookie");
  const accessTokenFromSetCookieHeader = setCookieHeaderValue
    ?.split(";")
    .find((cookie) => cookie.startsWith(`${COOKIE_PREFIX}access-token`))
    ?.replace(`${COOKIE_PREFIX}access-token=`, "");

  return accessTokenFromSetCookieHeader;
}
export async function getAccessToken() {
  const accessToken =
    cookies().get(`${COOKIE_PREFIX}access-token`)?.value ||
    getAccessTokenFromHeaders();

  return accessToken;
}

export async function getRefreshToken() {
  const refreshToken =
    cookies().get(`${COOKIE_PREFIX}refresh-token`)?.value ||
    headers().get(`${COOKIE_PREFIX}refresh-token`);
  return refreshToken;
}

export async function exchangeRefreshTokenForAccessToken(
  refreshToken: string,
): Promise<{
  access_token: string;
  expires_in: number;
  refresh_token: string;
}> {
  const firebaseApiKey = env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const firebaseApiBaseUrl = `https://securetoken.googleapis.com/v1/token?key=${firebaseApiKey}`;

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  };

  const result = await fetch(firebaseApiBaseUrl, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error(data.error.message);
  }

  return data;
}

export async function refreshAccessTokenInMiddleware(
  refreshToken: string,
  response: NextResponse,
) {
  const data = await exchangeRefreshTokenForAccessToken(refreshToken).catch(
    (error) => {
      throw new Error(error.message);
    },
  );

  response.cookies.set({
    name: `${COOKIE_PREFIX}access-token`,
    value: data.access_token,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + data.expires_in * 1000).getTime(),
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
    priority: "high",
  });

  response.cookies.set({
    name: `${COOKIE_PREFIX}refresh-token`,
    value: data.refresh_token,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
    priority: "high",
  });

  console.log("accessToken in middleware", `${COOKIE_PREFIX}access-token`);

  return response;
}

export async function refreshAccessTokenInServer() {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) {
    await logout();
    return null;
  }

  const data = await exchangeRefreshTokenForAccessToken(refreshToken).catch(
    async (error) => {
      await logout();
      throw new Error(error.message);
    },
  );

  cookies().set({
    name: `${COOKIE_PREFIX}access-token`,
    value: data.access_token,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + data.expires_in * 1000).getTime(),
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });

  cookies().set({
    name: `${COOKIE_PREFIX}refresh-token`,
    value: data.refresh_token,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: "/",
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });
}

export async function getUserIdFromAccessToken(accessToken: string) {
  const jwtClaims = decodeJwt(accessToken);
  return jwtClaims.user_id;
}
