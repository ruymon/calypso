'use server'

import { LoginFormType } from "@/components/auth/login-form"
import { env } from "@/env"
import { BASE_URL_WITHOUT_PROTOCOL } from "@/lib/constants"
import { firebaseAuth } from "@/lib/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { cookies } from 'next/headers'

export async function login({ email, password }: LoginFormType) {
  const cookieStore = cookies()

  const useSecureCookies = env.NODE_ENV === "production"
  const cookiePrefix = useSecureCookies ? '__Secure-' : ''
  const cookieDomain = useSecureCookies ? BASE_URL_WITHOUT_PROTOCOL : undefined

  const userCredentials = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  )

  const userAccessToken = await userCredentials.user.getIdTokenResult()
  const accessTokenMaxAge = userAccessToken.expirationTime

  const userRefreshToken = await userCredentials.user.refreshToken

  cookieStore.set(`${cookiePrefix}access-token`, userAccessToken.token, {
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(accessTokenMaxAge).getTime(),
    path: '/',
    domain: cookieDomain,
    secure: useSecureCookies,
  })

  cookieStore.set(`${cookiePrefix}refresh-token`, userRefreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    path: '/',
    domain: cookieDomain,
    secure: useSecureCookies,
  })

  return
}