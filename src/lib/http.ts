export function buildUrlEncodedRequest(request: object): string {
  let queryString = "";
  for (const [key, value] of Object.entries(request)) {
    queryString += `${queryString ? "&" : ""}${key}=${encodeURIComponent(value)}`;
  }

  return queryString;
}

export async function postWithXForm(
  url: string,
  request: object,
): Promise<Response> {
  return fetch(url, {
    method: "POST",
    body: buildUrlEncodedRequest(request),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(async (response: Response) => {
    if (!response.ok) {
      const responseBody = await response.json();
      console.error(response.status, response.statusText, responseBody);
      return Promise.reject(responseBody);
    }
    return response;
  });
}
