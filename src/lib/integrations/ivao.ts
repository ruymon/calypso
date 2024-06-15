import { IVAO_INTEGRATION_REDIRECT_URI } from "@/config/integrations";
import { env } from "@/env";
import { IvaoTokenResponse } from "@/types/integrations";
import { postWithXForm } from "../http";

const IVAO_OAUTH_OPTIONS = {
  clientId: env.NEXT_PUBLIC_IVAO_CLIENT_ID,
  clientSecret: env.NEXT_PUBLIC_IVAO_CLIENT_SECRET,
  redirectUri: IVAO_INTEGRATION_REDIRECT_URI,
};

export async function getIvaoIntegrationAuthorizationUrl() {
  const authorizationEndpoint = "https://sso.ivao.aero/authorize";

  const responseType = "code";
  const scopes = ["profile", "configuration", "email"].join(" ");
  const state = "546587231365786";

  const url = `${authorizationEndpoint}?response_type=${responseType}&client_id=${IVAO_OAUTH_OPTIONS.clientId}&scope=${scopes}&redirect_uri=${IVAO_OAUTH_OPTIONS.redirectUri}&state=${state}`;

  return url;
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
