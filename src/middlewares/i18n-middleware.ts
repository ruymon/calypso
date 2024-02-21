import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest
} from 'next/server';

import { CustomMiddleware } from './chain';

export type I18nMiddlewareConfig<Locales extends readonly string[]> = {
  locales: Locales;
  defaultLocale: Locales[number];
  urlMappingStrategy?: 'redirect' | 'rewrite' | 'rewriteDefault'; // Not implemented yet.
  resolveLocaleFromRequest?: (request: NextRequest) => Locales[number] | null;
};

export const LOCALE_COOKIE = 'Next-Locale';
export const LOCALE_HEADER = 'X-Next-Locale';

export const i18nMiddlewareConfig: I18nMiddlewareConfig<string[]> = {
  locales: ['en', 'pt'],
  defaultLocale: 'en'
}

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const locale = localeFromRequest(i18nMiddlewareConfig.locales, request) ?? i18nMiddlewareConfig.defaultLocale;
    const nextUrl = request.nextUrl;
    const pathname = request.nextUrl.pathname;

    if (noLocalePrefix(i18nMiddlewareConfig.locales, pathname)) {
      const redirectPath = `/${locale}${nextUrl.pathname}`
      const redirectUrl = new URL(redirectPath, request.url)
      return NextResponse.redirect(redirectUrl)
    }

    const pathnameLocale = nextUrl.pathname.split('/', 2)?.[1];

    if (!pathnameLocale || i18nMiddlewareConfig.locales.includes(pathnameLocale)) {
      response.headers.set(LOCALE_HEADER, locale);

      if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
        response.cookies.set(LOCALE_COOKIE, locale, { sameSite: 'strict' });
      }
    }

    return middleware(request, event, response)
  }
}


function localeFromRequest(
  locales: string[],
  request: NextRequest,
  resolveLocaleFromRequest: (request: NextRequest) => string | null = defaultResolveLocaleFromRequest
) {
  const locale = request.cookies.get(LOCALE_COOKIE)?.value ?? resolveLocaleFromRequest(request);

  if (!locale || !locales.includes(locale)) return null;

  return locale;
}

const defaultResolveLocaleFromRequest: NonNullable<I18nMiddlewareConfig<any>['resolveLocaleFromRequest']> = request => {
  const header = request.headers.get('Accept-Language');
  const locale = header?.split(',', 1)?.[0]?.split('-', 1)?.[0];
  return locale ?? null;
};

function noLocalePrefix(locales: string[], pathname: string) {
  return locales.every(locale => {
    return !(pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  });
}
