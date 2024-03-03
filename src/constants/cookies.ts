import { BASE_URL_WITHOUT_PROTOCOL } from "./url";
import { IS_IN_DEVELOPMENT } from "./workspace";

export const IS_SECURE_COOKIE = !IS_IN_DEVELOPMENT
export const COOKIE_PREFIX = IS_SECURE_COOKIE ? '__Secure-' : ''
export const COOKIE_DOMAIN = IS_SECURE_COOKIE ? BASE_URL_WITHOUT_PROTOCOL : undefined
