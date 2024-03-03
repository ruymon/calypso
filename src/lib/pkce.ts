import * as crypto from 'crypto'

export function getRandomInteger(range: number): number {
  const max_range = 256 // Highest possible number in Uint8

  const byteArray = new Uint8Array(1) as Uint8Array
  crypto.getRandomValues(byteArray)

  if (byteArray[0] === undefined)  {
    return getRandomInteger(range)
  }

  if (byteArray[0] >= Math.floor(max_range / range) * range) {
    return getRandomInteger(range)
  }

  return byteArray[0] % range
}

export function generateRandomString(length: number): string {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(getRandomInteger(possible.length - 1))
  }

  return text
}

export async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  if (!crypto.subtle?.digest) {
    throw new Error(
      "The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details"
    )
  }
  
  const encoder = new TextEncoder()
  const bytes: Uint8Array = encoder.encode(codeVerifier)
  const hash: ArrayBuffer = await crypto.subtle.digest('SHA-256', bytes)
  const hashString: string = String.fromCharCode(...new Uint8Array(hash))
  const base64 = btoa(hashString)

  const formattedBase64 = base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

  return formattedBase64
}