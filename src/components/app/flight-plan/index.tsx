import { ScrollArea } from "@/components/ui/scroll-area";
import { LiveFlight } from "@/types/live-flights";
import { FlightPlanField } from "./field";
import { FlightPlanSeparator } from "./separator";

type FlightPlanProps = LiveFlight

export function FlightPlan({ callsign, currentPosition, flightPlan, pilot }: FlightPlanProps) {
  if (!flightPlan) return (
    <span>Flight plan not available.</span>
  );

  return (
    <ScrollArea className="h-[calc(100dvh-12.5rem)] pl-3">
      <div className="flex flex-col gap-8 mr-3">
        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="&lt;&#61;&#40;FPL" />
          <FlightPlanField label="7 - Aircraft Identification" value={callsign} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="8 - Flight Rules" value={flightPlan.flightRules} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="Type of Flight" value={flightPlan.flightType} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="9 - Number" value="1" />
          <FlightPlanField label="Type of Aircraft" value={flightPlan.aircraft?.icao || ''} />
          <FlightPlanSeparator content="/" />
          <FlightPlanField label="Wake Turbulence Category" value={flightPlan.aircraft?.wakeTurbulence || ''} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="Equipment" value={flightPlan.aircraft?.equipment || ''} />
          <FlightPlanSeparator content="/" />
          <FlightPlanField label="Transponder" value={flightPlan.aircraft?.transponderTypes || ''} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="13 - Departure Aerodrome" value={flightPlan.departure?.icao || ''} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Departure Time" value={flightPlan.departureTime} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="15 - Cruising Speed" value={flightPlan.cruiseTas} prefix="N" />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Level" value={flightPlan.level} prefix="F" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2">
          <FlightPlanSeparator content="-" grow />
          <FlightPlanField label="Route" value={flightPlan.route} as="textarea" />
          <FlightPlanSeparator content="&lt;&#61;" grow />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="16 - Destination Aerodrome" value={flightPlan.arrival?.icao || ''} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Total EET" value={flightPlan.enrouteTime} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Altn Aerodrome" value={flightPlan.alternate?.icao ?? 'TBN'} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="2nd Altn Aerodrome" value="TBN" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2">
          <FlightPlanSeparator content="-" grow />
          <FlightPlanField label="18 - Other Information" value={flightPlan.remarks} as="textarea" />
          <FlightPlanSeparator content="&lt;&#61;" grow />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-e/" />
          <FlightPlanField label="19 - Endurance" value={flightPlan.endurance} />
          <FlightPlanSeparator content="-p/" />
          <FlightPlanField label="People on Board" value="TBN" />
          <FlightPlanSeparator content="-C/" />
          <FlightPlanField label="Pilot in command (PIC)" value={pilot.name ?? 'TBN'} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

      </div>
    </ScrollArea>
  );
};
