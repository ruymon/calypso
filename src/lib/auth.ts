'use server'

import { LoginFormType } from "@/app/[locale]/auth/_components/login-form"
import { COOKIE_DOMAIN, COOKIE_PREFIX, IS_SECURE_COOKIE } from "@/constants/cookies"
import { env } from "@/env"
import { firebaseAuth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { cookies } from 'next/headers'
import { NextResponse } from "next/server"

export async function login({ email, password }: LoginFormType) {
  const userCredentials = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  )

  const userAccessToken = await userCredentials.user.getIdTokenResult()
  const accessTokenMaxAge = userAccessToken.expirationTime
  const userRefreshToken = await userCredentials.user.refreshToken

  cookies().set(`${COOKIE_PREFIX}access-token`, userAccessToken.token, {
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(accessTokenMaxAge).getTime(),
    path: '/',
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  })

  cookies().set(`${COOKIE_PREFIX}refresh-token`, userRefreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: '/',
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  })
}

export async function logout() {
  cookies().set(`${COOKIE_PREFIX}access-token`, "", { expires: new Date(0) });
  cookies().set(`${COOKIE_PREFIX}refresh-token`, "", { expires: new Date(0) });
}

export async function getAccessToken() {
  const accessToken = cookies().get(`${COOKIE_PREFIX}access-token`)?.value;

  return accessToken
}

export async function refreshAccessToken(refreshToken: string, response: NextResponse) {
  if (!refreshToken) return;

  const firebaseApiKey = env.NEXT_PUBLIC_FIREBASE_API_KEY
  const firebaseApiBaseUrl = `https://securetoken.googleapis.com/v1/token?key=${firebaseApiKey}`

  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }),
    cache: 'no-cache',
    next: {
      revalidate: 0
    }
  };

  const result = await fetch(firebaseApiBaseUrl, options)
  const data = await result.json()

  if (data.error) {
    console.log('Error refreshing access token:', data.error)
    return logout()
  }

  response.cookies.set({
    name: `${COOKIE_PREFIX}access-token`,
    value: data.access_token,
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(Date.now() + data.expires_in * 1000).getTime(),
    path: '/',
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });

  response.cookies.set({
    name: `${COOKIE_PREFIX}refresh-token`,
    value: data.refresh_token,
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: '/',
    domain: COOKIE_DOMAIN,
    secure: IS_SECURE_COOKIE,
  });


  return response;
}

// export async function getUser() {
//   const accessToken = await getAccessToken();

//   const result = await fetch(`https://api.skyscope.app/api/v1/users/profile`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   });
//   const user = await result.json();

//   console.log(user);

//   return user
// }