import { API_BASE_URL } from "@/constants/api";
import { getAccessToken } from "./auth";

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
