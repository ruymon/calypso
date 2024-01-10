import { VatsimData } from "@/types/vatsim";

export async function getVatsimData(options?: RequestInit): Promise<VatsimData | undefined> {
  const vatsimDataUrl = "https://data.vatsim.net/v3/vatsim-data.json";
  
  try {
    const response = await fetch(vatsimDataUrl, options);
    const data = await response.json();
    
    return data;
  }
  catch (error) {
    console.error(error); 
  }
}