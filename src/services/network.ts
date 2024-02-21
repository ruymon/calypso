import { IS_IN_DEVELOPMENT } from "@/lib/constants";
import { Network } from "@/types/live-flights";

export async function getNetworkLiveTrafficInGeoJSON(network: Network): Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined> {
  const options: RequestInit = {
    method: 'GET',
    headers: IS_IN_DEVELOPMENT ? {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzZWFiMDBhNzc5MTk3Yzc0MWQ2NjJmY2EzODE1OGJkN2JlNGEyY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUnV5IE1vbnRlaXJvIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NreXNjb3BlYXBwIiwiYXVkIjoic2t5c2NvcGVhcHAiLCJhdXRoX3RpbWUiOjE3MDc5NDc3NjMsInVzZXJfaWQiOiJTZ0VqWkI3bXN6TVZPdmRvSUozQUQ3TE5kangxIiwic3ViIjoiU2dFalpCN21zek1WT3Zkb0lKM0FEN0xOZGp4MSIsImlhdCI6MTcwNzk1MTM4MiwiZXhwIjoxNzA3OTU0OTgyLCJlbWFpbCI6InJ1eXN0ZnJhbmNpc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicnV5c3RmcmFuY2lzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WwX9xY_YcgU4uhLu_N_0w-fyNBaTi9zejy8cWiEHG-8f_L_RNYzF0alFMqHOfXRtmV0cD7eKbKc_eE_I-SVZYm_XG1jdFPArqf4guliInoDqiTh32VpqskRqADYtslbz6Efgh2cAViPCurcMI41Gqnu_2m5Gqnv4jY_VZrdmTTImXs3xBjWmmTfL5ETxqXdIB9sywScxlJOKnhRhmaVH732Ra03Xao_EQ7muGlAkT2zrMDqsuEz46HgwlrcgYKDk71iiLOEhLFqluSmyk_vf2BXB4cFzj3k-FSPvbIu67sJbw9nQGeE1Y9yjkw4UCgxbH2e70E3PRjPUiVb1Ca6KDg'
    } : {
      'Content-Type': 'application/json',
    }
  }

  try {
    const res = await fetch(`https://api.skyscope.app/api/v1/networks/${network}/flights`, options);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const data = await res.json();

    return data;
  }
  catch (error) {
    console.error(error);
  }
}