import { NAVIGRAPH_INTEGRATION_REDIRECT_URI } from "@/config/integrations";
import { env } from "@/env";
import { NavigraphTokenResponse } from "@/types/integrations";
import { postWithXForm } from "../http";
import { pkceChallenge } from "../pkce";

const NAVIGRAPH_OAUTH_OPTIONS = {
  clientId: env.NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID,
  clientSecret: env.NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET,
  redirectUri: NAVIGRAPH_INTEGRATION_REDIRECT_URI,
};

export async function getNavigraphIntegrationAuthorizationUrl() {
  const authorizationEndpoint =
    "https://identity.api.navigraph.com/connect/authorize";

  const pkce = await pkceChallenge();

  const responseType = "code";
  const scopes = ["openid", "offline_access", "fmsdata"].join(" ");

  const pkceCodeVerifier = pkce.code_verifier;
  const pkceCodeChallenge = pkce.code_challenge;

  const state = pkceCodeVerifier;
  const codeChallengeMethod = "S256";

  const url = `${authorizationEndpoint}?response_type=${responseType}&client_id=${NAVIGRAPH_OAUTH_OPTIONS.clientId}&scope=${scopes}&redirect_uri=${NAVIGRAPH_OAUTH_OPTIONS.redirectUri}&code_challenge=${pkceCodeChallenge}&code_challenge_method=${codeChallengeMethod}&state=${state}`;

  return url;
}

export async function exchangeTemporaryCodeForNavigraphToken(
  code: string,
  codeVerifier: string,
) {
  const tokenEndpoint = "https://identity.api.navigraph.com/connect/token";

  const requestData = {
    grant_type: "authorization_code",
    code,
    client_id: NAVIGRAPH_OAUTH_OPTIONS.clientId,
    client_secret: NAVIGRAPH_OAUTH_OPTIONS.clientSecret,
    redirect_uri: NAVIGRAPH_OAUTH_OPTIONS.redirectUri,
    code_verifier: codeVerifier,
  };

  const response = await postWithXForm(tokenEndpoint, requestData);
  const data = await response.json();

  return data as NavigraphTokenResponse;
}
