import { env } from "@/env.mjs";

const VATSIM_OAUTH_OPTIONS = {
  clientId: env.NEXT_PUBLIC_VATSIM_CLIENT_ID,
  clientSecret: env.NEXT_PUBLIC_VATSIM_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/auth/callback/vatsim", // TODO: change to production URL
};

export async function redirectToVatsimAuth() {
  const authorization_endpoint = "https://auth.vatsim.net/oauth/authorize";
  const responseType = "code";
  const scopes = ["full_name", "email", "vatsim_details", "country"].join(" ");
  const state = "546587231365786"; // TODO: generate random string

  const url = `${authorization_endpoint}?response_type=${responseType}&client_id=${VATSIM_OAUTH_OPTIONS.clientId}&scope=${scopes}&redirect_uri=${VATSIM_OAUTH_OPTIONS.redirectUri}&state=${state}`;
  window.location.href = url;
}
