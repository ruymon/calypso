"use client"

import { MapBaseTile } from "@/components/app/map/map-base-tile";
import { MapLiveFlightsLayer } from "@/components/app/map/map-live-flights-layer";
import { ReactNode } from "react";

interface MapLayoutProps {
  children: ReactNode;
};

export default function MapLayout({ children }: MapLayoutProps) {
  return (
    <div className="flex-1 relative overflow-hidden">
      <MapBaseTile>
        <MapLiveFlightsLayer />
      </MapBaseTile>

      {children}
    </div>
  );
};
