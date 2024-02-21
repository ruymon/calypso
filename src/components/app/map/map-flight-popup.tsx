import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapHoveredFeature } from "@/stores/map-hovered-feature-store";
import { LiveFlight, Network } from "@/types/live-flights";
import { Popup } from "react-map-gl";
import { NetworkIcon } from "../network-icon";

interface MapFlightPopupProps extends MapHoveredFeature {}

function parseFlightData({
  currentPosition,
  flightPlan,
  pilot,
  ...rest
}: {
  id: string;
  callsign: string;
  currentPosition: string;
  flightPlan: string;
  network: Network;
  pilot: string;
}): LiveFlight {
  const parseJSON = (jsonString: string): any => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error(`Error parsing JSON: ${jsonString}`);
      return null;
    }
  };

  return {
    currentPosition: parseJSON(currentPosition),
    flightPlan: parseJSON(flightPlan),
    pilot: parseJSON(pilot),
    ...rest,
  };
}

export function MapFlightPopup({
  longitude,
  latitude,
  feature,
}: MapFlightPopupProps) {
  // const data = parseFlightData(feature.properties as any);

  const data = {
    network: "vatsim",
    callsign: "DAL123",
    flightPlan: {
      departure: {
        icao: "KATL",
        name: "Hartsfield–Jackson Atlanta International Airport",
      },
      arrival: {
        icao: "KJFK",
        name: "John F. Kennedy International Airport",
      },
      aircraft: {
        icao: "B738",
      },
    },
    pilot: {
      name: "John Doe",
      id: "123456",
    },
  };

  console.log(feature.properties);

  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      offset={[0, -20] as any}
      closeButton={false}
      className="flight-popup"
      anchor="bottom"
    >
      <div className="flex flex-col gap-2 px-3 py-2">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1.5">
            <NetworkIcon
              variant={data.network as "vatsim" | "ivao"}
              size="sm"
            />
            <span className="text-base font-bold text-secondary-foreground">
              {data.callsign}
            </span>
          </div>
          {data.flightPlan?.aircraft && (
            <span className="text-xs italic text-muted-foreground">
              {data.flightPlan.aircraft.icao}
            </span>
          )}
        </header>

        {!data.flightPlan ||
        !data.flightPlan.departure ||
        !data.flightPlan.arrival ? (
          <span>No flight plan available...</span>
        ) : (
          <div className="flex w-full items-center justify-between gap-3 text-sm font-medium">
            <span>{data.flightPlan?.departure?.icao || "TBN"}</span>
            <Progress className="h-1 w-full" value={45} />
            <span>{data.flightPlan?.arrival?.icao || "TBN"}</span>
          </div>
        )}

        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="z-10 pr-2 text-sm font-medium">
              {data.pilot.name}
            </span>
            <span className="text-muted-foreground">{data.pilot.id}</span>
          </div>
          <Badge className="h-fit w-fit px-1 text-[10px] leading-[10px]">
            Private Pilot
          </Badge>
        </div>
      </div>

      <footer className="flex items-center justify-center rounded-b-sm border-t bg-popover/75 px-2 py-1">
        <span className="text-muted-foreground">Click to open details</span>
      </footer>
    </Popup>
  );
}
