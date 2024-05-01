export type IntegrationProvider = "ivao" | "navigraph" | "vatsim";

export interface IvaoTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export interface NavigraphTokenResponse {
  id_token: string;
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
}
