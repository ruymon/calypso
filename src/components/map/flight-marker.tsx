"use client";

import { cn } from "@/lib/utils";
import { VatsimDataPilot } from "@/types/vatsim";
import { Plane } from "lucide-react";
import { Marker } from "react-map-gl";
import { FlightPlan } from "../flight-plan";
import { Badge } from "../ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface MapFlightMarkerProps extends VatsimDataPilot {};

export function MapFlightMarker(data: MapFlightMarkerProps) {
  const { callsign, cid, name, heading, latitude, longitude, flight_plan } = data;
  const planeHeading = heading - 45;

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      clickTolerance={10}
      style={{ cursor: "pointer" }}
    >

      <Sheet>
        <HoverCard>
          <SheetTrigger asChild>
            <HoverCardTrigger>
              <Plane
                className={cn("fill-primary stroke-none text-lg",)}
                style={{ transform: `rotate(${planeHeading}deg)` }}
                size={16}
              />
            </HoverCardTrigger>
          </SheetTrigger>
          <HoverCardContent
            className="flex flex-col p-0 min-w-[15rem] w-fit max-w-xs"
            side="right"
            sideOffset={8}
          >
            <div className="flex flex-col px-3 py-2 gap-2">
              <header className="flex items-center justify-between w-full">
                <span className="font-bold text-base text-primary">{callsign}</span>
                <span className="text-xs italic text-muted-foreground">{flight_plan?.aircraft_short}</span>
              </header>

              <div className="flex items-center justify-between w-full relative">
                <span className="z-10 pr-2 bg-popover font-medium text-sm">{flight_plan?.departure}</span>
                <Separator className="absolute w-full bg-muted" />
                <span className="z-10 pl-2 bg-popover font-medium text-sm">{flight_plan?.arrival}</span>
              </div>

              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col">
                  <span className="z-10 pr-2 bg-popover font-medium text-sm">{name}</span>
                  <span className="text-muted-foreground">{cid}</span>
                </div>
                <Badge className="w-fit h-fit px-1 text-[10px] leading-[10px] font-extrabold">Private Pilot</Badge>
              </div>

            </div>

            <footer className="flex items-center justify-center px-2 py-1 border-t">
              <span className="text-muted-foreground">Click to open details</span>
            </footer>
          </HoverCardContent>
        </HoverCard>

        <SheetContent className="sm:max-w-2xl flex flex-col gap-8 px-6 h-screen">
          <SheetHeader>
            <SheetTitle className="font-bold text-3xl text-primary">{callsign}</SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">{flight_plan?.aircraft_short}</SheetDescription>
          </SheetHeader>

          <section className="flex items-center gap-4 w-full">
            <span>{flight_plan?.departure}</span>
            <Progress className="w-full h-1" value={45} />
            <span>{flight_plan?.arrival}</span>
          </section>

          <section className="bg-muted rounded-md px-4 py-1.5 flex items-center justify-between">
            <div className="flex flex-col items-center text-center">
              <span className="text-sm font-medium text-muted-foreground">Speed</span>
              <span className="text-secondary-foreground font-medium">490 kt</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-sm font-medium text-muted-foreground">Altitude</span>
              <span className="text-secondary-foreground font-medium">40028 ft</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-sm font-medium text-muted-foreground">To Go</span>
              <span className="text-secondary-foreground font-medium">543 nm</span>
            </div>
          </section>

          <Tabs defaultValue="flight-details" className="flex flex-col gap-6 flex-1">
            <TabsList>
              <TabsTrigger value="flight-details">Flight details</TabsTrigger>
              <TabsTrigger value="flight-plan">Flight plan</TabsTrigger>
              <TabsTrigger value="pilot-details">Pilot details</TabsTrigger>
            </TabsList>

            <TabsContent value="flight-details">Flight details</TabsContent>
            <TabsContent value="flight-plan" asChild>
              <FlightPlan data={data} />
            </TabsContent>
            <TabsContent value="pilot-details">Pilot details</TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </Marker>
  );
};
