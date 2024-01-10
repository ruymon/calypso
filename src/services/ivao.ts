// TODO: Replace any with the correct type
export async function getIvaoData(options?: RequestInit): Promise<any | undefined> {
  const ivaoDataUrl = "https://api.ivao.aero/v2/tracker/whazzup";
  
  try {
    const response = await fetch(ivaoDataUrl, options);
    const data = await response.json();
    
    return data;
  }
  catch (error) {
    console.error(error); 
  }
}