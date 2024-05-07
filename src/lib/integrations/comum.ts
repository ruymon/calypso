import { API_BASE_URL } from "@/constants/api";
import {
  IntegrationProvider,
  IvaoTokenResponse,
  NavigraphTokenResponse,
  VatsimTokenResponse,
} from "@/types/integrations";
import { getAccessToken } from "../auth";

export async function storeIntegrationCredentials(
  credentials: IvaoTokenResponse | VatsimTokenResponse | NavigraphTokenResponse,
  provider: IntegrationProvider,
) {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/integrations`;

  const requestData = {
    provider: provider,
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
}
