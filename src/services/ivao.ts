import { IvaoData } from "@/types/ivao";

export async function getIvaoData(options?: RequestInit): Promise<IvaoData | undefined> {
  const ivaoDataUrl = "https://api-stage.ivao.aero/v2/tracker/whazzup";

  try {
    const response = await fetch(ivaoDataUrl, options);
    const data = await response.json();

    return data;
  }
  catch (error) {
    console.error(error);
  }
}