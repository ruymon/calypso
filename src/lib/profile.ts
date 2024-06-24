"use server";

import { API_BASE_URL } from "@/constants/api";
import { UserProfile } from "@/types/profile";
import { getAccessToken } from "./auth";

export async function getProfile(): Promise<UserProfile | null> {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  const url = `${API_BASE_URL}/users/profile`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function updateProfileAvatar(file: File): Promise<any> {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/users/profile/image`;

  const formData = new FormData();
  formData.append("file", file);

  const options: RequestInit = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  };

  const result = await fetch(url, options);

  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(errorData.message);
  }
}
