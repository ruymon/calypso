import { RequestCookies, ResponseCookies } from 'next/dist/server/web/spec-extension/cookies';
import { NextMiddlewareResult } from 'next/dist/server/web/types';
import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server';

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>

type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware

function applySetCookie(request: NextRequest, response: NextResponse) {
  const setCookies = new ResponseCookies(response.headers);

  const newRequestHeaders = new Headers(request.headers);
  const newRequestCookies = new RequestCookies(newRequestHeaders);
  setCookies.getAll().forEach((cookie) => newRequestCookies.set(cookie));

  const dummyResponse = NextResponse.next({ request: { headers: newRequestHeaders } });

  dummyResponse.headers.forEach((value, key) => {
    if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
      response.headers.set(key, value);
    }
  });
}

export function chainedMiddlewares(
  functions: MiddlewareFactory[],
  index = 0
): CustomMiddleware {
  const current = functions[index]

  if (current) {
    const next = chainedMiddlewares(functions, index + 1)
    return current(next)
  }

  return (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    applySetCookie(request, response)

    return response
  }
}