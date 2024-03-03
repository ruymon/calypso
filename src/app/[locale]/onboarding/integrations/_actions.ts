"use server";

import { API_BASE_URL } from "@/constants/api";
import { getAccessToken } from "@/lib/auth";

export async function syncNetworkAccount(formData: FormData) {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/users/profile`;

  const ivaoId = formData.get("ivaoId");
  const vatsimId = formData.get("vatsimId");

  const body = JSON.stringify({
    ivaoId,
    vatsimId,
  });

  const options: RequestInit = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body,
  };

  const res = await fetch(url, options);
  const data = await res.text();

  if (!res.ok) {
    throw new Error(data);
  }
}