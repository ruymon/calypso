"use server";

import * as crypto from "crypto";

function getRandomValues(size: number) {
  return crypto.getRandomValues(new Uint8Array(size));
}

function random(size: number) {
  const mask =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
  let result = "";
  const randomUnits = getRandomValues(size);
  for (let i = 0; i < size; i++) {
    // cap the value of the randomIndex to mask.length - 1
    const randomIndex = (randomUnits[i]! % mask.length) as number;
    result += mask[randomIndex];
  }
  return result;
}

function generateVerifier(length: number): string {
  return random(length);
}

export async function generateChallenge(code_verifier: string) {
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(code_verifier),
  );
  // Generate base64url string
  // btoa is deprecated in Node.js but is used here for web browser compatibility
  // (which has no good replacement yet, see also https://github.com/whatwg/html/issues/6811)
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=/g, "");
}

export async function pkceChallenge(length?: number): Promise<{
  code_verifier: string;
  code_challenge: string;
}> {
  if (!length) length = 43;

  if (length < 43 || length > 128) {
    throw `Expected a length between 43 and 128. Received ${length}.`;
  }

  const verifier = generateVerifier(length);
  const challenge = await generateChallenge(verifier);

  return {
    code_verifier: verifier,
    code_challenge: challenge,
  };
}
