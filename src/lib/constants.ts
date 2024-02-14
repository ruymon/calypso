import { env } from "@/env";

export const BASE_URL = env.NEXT_PUBLIC_BASE_URL ? `https://${env.NEXT_PUBLIC_BASE_URL}` : 'http://localhost:3000';
export const BASE_URL_WITHOUT_PROTOCOL = env.NEXT_PUBLIC_BASE_URL || 'localhost';