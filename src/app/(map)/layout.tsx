"use client"

import { MapBaseTile } from "@/components/map/base-tile";
import { MapLiveFlightsLayer } from "@/components/map/live-flights-layer";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ReactNode } from "react";

interface MapLayoutProps {
  children: ReactNode;
};

export default function MapLayout({ children }: MapLayoutProps) {
  return (
    <main className="relative w-screen h-screen">
      <Sidebar />
      <Navbar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={75}>
          <MapBaseTile>
            <MapLiveFlightsLayer />
          </MapBaseTile>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          className="z-10 bg-background/50 backdrop-blur-md mt-14"
          defaultSize={25}
          collapsible={true}
          collapsedSize={0}
          minSize={20}
          maxSize={60}
        >
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
