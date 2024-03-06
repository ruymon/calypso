import { Progress } from "@/components/ui/progress";
import { getAirlineTailImageUrl } from "@/lib/images";
import { MapHoveredFeature } from "@/stores/map-hovered-feature-store";
import { LiveFlight } from "@/types/live-flights";
import { Popup } from "react-map-gl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface MapFlightPopupProps extends MapHoveredFeature {}

export function MapFlightPopup({ feature, lat, lng }: MapFlightPopupProps) {
  const data: LiveFlight = {
    callsign: feature.properties!.callsign,
    position: JSON.parse(feature.properties!.position),
    flightPlan:
      feature.properties?.flightPlan &&
      JSON.parse(feature.properties.flightPlan),
    id: feature.properties!.id,
    network: feature.properties!.network,
    pilot: JSON.parse(feature.properties!.pilot),
  };

  return (
    <Popup
      longitude={lng}
      latitude={lat}
      offset={[0, -20] as any}
      closeButton={false}
      className="flight-popup"
      anchor="bottom"
    >
      <Card className="flex min-w-56 flex-col gap-2 rounded-md py-2">
        <CardHeader className="flex-row items-center gap-3 px-3 py-0">
          <Avatar className="h-8 w-9 rounded-none">
            <AvatarImage
              src={getAirlineTailImageUrl(data.callsign)}
              alt="Airline Tail Image"
            />
            <AvatarFallback className="clip-tail animate-pulse rounded-none" />
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-base">{data.callsign}</CardTitle>
            <CardDescription className="text-xs">
              {data.flightPlan?.aircraft?.icao || "TBN"}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex w-full items-center justify-between gap-3 px-3 py-0">
          {!data.flightPlan ? (
            <span>No flight plan available...</span>
          ) : (
            <>
              <span className="text-sm font-medium text-accent-foreground">
                {data.flightPlan.departure?.icao || "TBN"}
              </span>
              <Progress className="h-1 w-full" value={45} />
              <span className="text-sm font-medium text-accent-foreground">
                {data.flightPlan.arrival?.icao || "TBN"}
              </span>
            </>
          )}
        </CardContent>

        <CardFooter className="flex gap-1 px-3 py-0 text-xs">
          <span className="font-normal">Flying on</span>
          <span className="font-medium uppercase">{data.network}</span>
        </CardFooter>
      </Card>
    </Popup>
  );
}
