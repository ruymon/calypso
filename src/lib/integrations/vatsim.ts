import {
  VATSIM_INTEGRATION_BASE_URL,
  VATSIM_INTEGRATION_REDIRECT_URI,
} from "@/config/integrations";
import { env } from "@/env";
import { VatsimTokenResponse } from "@/types/integrations";
import { postWithXForm } from "../http";

const VATSIM_OAUTH_OPTIONS = {
  clientId: env.NEXT_PUBLIC_VATSIM_CLIENT_ID,
  clientSecret: env.NEXT_PUBLIC_VATSIM_CLIENT_SECRET,
  redirectUri: VATSIM_INTEGRATION_REDIRECT_URI,
};

export async function getVatsimIntegrationAuthorizeUrl() {
  const authorization_endpoint = `${VATSIM_INTEGRATION_BASE_URL}/oauth/authorize`;
  const responseType = "code";
  const scopes = ["full_name", "email", "vatsim_details", "country"].join(" ");
  const state = "546587231365786"; // TODO: generate random string

  const url = `${authorization_endpoint}?response_type=${responseType}&client_id=${VATSIM_OAUTH_OPTIONS.clientId}&scope=${scopes}&redirect_uri=${VATSIM_OAUTH_OPTIONS.redirectUri}&state=${state}`;

  return url;
}

export async function exchangeTemporaryCodeForVatsimToken(code: string) {
  const tokenEndpoint = `${VATSIM_INTEGRATION_BASE_URL}/oauth/token`;

  const requestData = {
    grant_type: "authorization_code",
    code,
    client_id: VATSIM_OAUTH_OPTIONS.clientId,
    client_secret: VATSIM_OAUTH_OPTIONS.clientSecret,
    redirect_uri: VATSIM_OAUTH_OPTIONS.redirectUri,
  };

  const response = await postWithXForm(tokenEndpoint, requestData);
  const data: VatsimTokenResponse = await response.json();

  return data;
}
