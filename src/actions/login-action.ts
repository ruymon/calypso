'use server'

import { LoginFormType } from "@/components/auth/login-form";
import { firebaseAuth } from "@/lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { cookies } from 'next/headers';

export async function signInAction({ email, password }: LoginFormType) {
  const cookieStore = cookies()

  const userCredentials = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  console.log(userCredentials.user)

  const userAccessToken = await userCredentials.user.getIdTokenResult()
  const accessTokenMaxAge = userAccessToken.expirationTime
  const userRefreshToken = await userCredentials.user.refreshToken

  cookieStore.set('accessToken', userAccessToken.token, {
    httpOnly: true,
    domain: 'localhost',
    expires: new Date(accessTokenMaxAge).getTime(),
    sameSite: 'lax',
    // TODO Add only secure in production
    //secure: true,
  })

  cookieStore.set('refreshToken', userRefreshToken, {
    httpOnly: true,
    domain: 'localhost',
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).getTime(), // Refresh token doesn't expire
    sameSite: 'lax',
    // TODO Add only secure in production
    //secure: true,
  })

  return;
}