import { InteractiveMap } from "@/components/interactive-map";
import { FlightTrackLayer } from "@/components/map-layers/flight-track-layer";
import { IvaoFlightsLayerContainer } from "@/components/map-layers/ivao/ivao-flights-layer-container";
import { VatsimFlightsLayerContainer } from "@/components/map-layers/vatsim/vatsim-flights-layer-container";
import { WeatherLayerContainer } from "@/components/map-layers/weather/weather-layer-container";
import { API_BASE_URL } from "@/constants/api";
import { getAccessToken } from "@/lib/auth";
import { ReactNode, Suspense } from "react";
import { CommandDialogDemo } from "./_components/command-bar";
import { Sidebar } from "./_components/sidebar";

interface AppRootLayoutProps {
  children: ReactNode;
}

export interface UserProfile {
  id: string;
  name?: string;
  email: string;
  avatarUrl?: string;
  ivaoId?: string;
  vatsimId?: string;
  posconId?: string;
  navigraphId?: string;
  simbriefId?: string;
}

async function fetchUserProfile(
  accessToken: string,
): Promise<UserProfile | null> {
  const url = `${API_BASE_URL}/users/profile`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["user-profile"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching user profile", data);
    return null;
  }

  return data;
}

export default async function AppRootLayout({ children }: AppRootLayoutProps) {
  const accessToken = await getAccessToken();

  if (!accessToken) return null;

  const userProfile = await fetchUserProfile(accessToken);

  return (
    <div className="relative flex max-h-screen flex-1 overflow-hidden">
      <div className="flex gap-0">
        <Sidebar avatarUrl={userProfile?.avatarUrl} name={userProfile?.name} />
        {children}
        <CommandDialogDemo />
      </div>

      <InteractiveMap>
        <Suspense fallback={null}>
          <WeatherLayerContainer />
        </Suspense>

        <Suspense fallback={null}>
          <VatsimFlightsLayerContainer />
        </Suspense>

        <Suspense fallback={null}>
          <IvaoFlightsLayerContainer />
        </Suspense>

        <FlightTrackLayer />
      </InteractiveMap>
    </div>
  );
}
