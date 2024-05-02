import { IVAO_INTEGRATION_REDIRECT_URI } from "@/config/integrations";
import { API_BASE_URL } from "@/constants/api";
import { env } from "@/env.mjs";
import { IvaoTokenResponse } from "@/types/integrations";
import { getAccessToken } from "../auth";
import { postWithXForm } from "../http";

const IVAO_OAUTH_OPTIONS = {
  clientId: env.NEXT_PUBLIC_IVAO_CLIENT_ID,
  clientSecret: env.NEXT_PUBLIC_IVAO_CLIENT_SECRET,
  redirectUri: IVAO_INTEGRATION_REDIRECT_URI,
};

export async function redirectToIvaoAuth() {
  const authorizationEndpoint = "https://sso.ivao.aero/authorize";

  const responseType = "code";
  const scopes = ["profile", "configuration", "email"].join(" ");
  const state = "546587231365786";

  const url = `${authorizationEndpoint}?response_type=${responseType}&client_id=${IVAO_OAUTH_OPTIONS.clientId}&scope=${scopes}&redirect_uri=${IVAO_OAUTH_OPTIONS.redirectUri}&state=${state}`;
  window.location.href = url;
}

export async function exchangeTemporaryCodeForIvaoToken(code: string) {
  const tokenEndpoint = "https://api.ivao.aero/v2/oauth/token";

  const requestData = {
    grant_type: "authorization_code",
    code,
    client_id: IVAO_OAUTH_OPTIONS.clientId,
    client_secret: IVAO_OAUTH_OPTIONS.clientSecret,
    redirect_uri: IVAO_OAUTH_OPTIONS.redirectUri,
  };

  const response = await postWithXForm(tokenEndpoint, requestData);
  const data: IvaoTokenResponse = await response.json();

  return data;
}

export async function storeIntegrationCredentials(
  credentials: IvaoTokenResponse,
) {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/integrations`;

  const requestData = {
    provider: "ivao",
    accessToken: credentials.access_token,
    refreshToken: credentials.refresh_token,
    expiresIn: credentials.expires_in,
  };

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(requestData),
  };

  const response = await fetch(url, options);

  if (response.status !== 201) {
    throw new Error("Failed to store integration credentials");
  }

  return;
}
