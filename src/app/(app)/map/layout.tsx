"use client"

import { MapBaseTile } from "@/components/app/map/map-base-tile";
import { MapLiveFlightsLayer } from "@/components/app/map/map-live-flights-layer";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ReactNode } from "react";

interface MapLayoutProps {
  children: ReactNode;
};

export default function MapLayout({ children }: MapLayoutProps) {
  return (
    // <ResizablePanelGroup direction="horizontal" className="relative">
    //   <ResizablePanel defaultSize={75}>
    //     <MapBaseTile>
    //       <MapLiveFlightsLayer />
    //     </MapBaseTile>
    //   </ResizablePanel>
    //   <ResizableHandle withHandle />
    //   <ResizablePanel
    //     className="z-10 bg-background/50 backdrop-blur-lg"
    //     defaultSize={25}
    //     collapsible={true}
    //     collapsedSize={0}
    //     minSize={20}
    //     maxSize={60}
    //   >
    //     {children}
    //   </ResizablePanel>
    // </ResizablePanelGroup>

    <div className="flex-1 relative overflow-hidden">
      <MapBaseTile>
        <MapLiveFlightsLayer />
      </MapBaseTile>

      {children}
    </div>
  );
};
