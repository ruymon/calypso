import { env } from "@/env";

export const IS_IN_DEVELOPMENT = env.NEXT_PUBLIC_NODE_ENV === "development"

export const BASE_URL = env.NEXT_PUBLIC_BASE_URL ? `https://${env.NEXT_PUBLIC_BASE_URL}` : 'http://localhost:3000';
export const BASE_URL_WITHOUT_PROTOCOL = env.NEXT_PUBLIC_BASE_URL || 'localhost';

export const IS_SECURE_COOKIE = !IS_IN_DEVELOPMENT
export const COOKIE_PREFIX = IS_SECURE_COOKIE ? '__Secure-' : ''
export const COOKIE_DOMAIN = IS_SECURE_COOKIE ? BASE_URL_WITHOUT_PROTOCOL : undefined
