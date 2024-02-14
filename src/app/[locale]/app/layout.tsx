import { InteractiveMap } from "@/components/app/map/interactive-map";
import { MapLiveFlightsLayer } from "@/components/app/map/map-live-flights-layer";
import { Sidebar } from "@/components/app/sidebar";
import { env } from "@/env";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default async function AppRootLayout({ children }: AppRootLayoutProps) {
  const cookieStore = cookies();

  const isSecureCookie = env.NODE_ENV === "production"
  const accessToken = cookieStore.get(isSecureCookie ? "__Secure-access-token" : "access-token");

  if (!accessToken) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-1 relative overflow-hidden max-h-screen">
      <Sidebar />

      <InteractiveMap>
        <MapLiveFlightsLayer />
      </InteractiveMap>

      {children}
    </div>
  );
}
