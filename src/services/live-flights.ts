import { VatsimData, VatsimDataPilot } from "@/types/vatsim";

export async function getLiveFlights(): Promise<VatsimData | undefined> {
  const vatsimApiUrl = "https://data.vatsim.net/v3/vatsim-data.json";

  try {
    const response = await fetch(vatsimApiUrl);
    const data = await response.json();
    
    return data;
  }
  catch (error) {
    console.error(error);
    return;
  }
}

export async function getFlight(callsign: string): Promise<VatsimDataPilot | undefined> {
  const vatsimData = await getLiveFlights();
  const pilot = vatsimData?.pilots.find(pilot => pilot.callsign === callsign);

  if (pilot) {
    return pilot;
  }
  else {
    throw new Error(`No pilot with callsign ${callsign} found`);
  }

}