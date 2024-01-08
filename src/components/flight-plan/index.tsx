import { ScrollArea } from "@/components/ui/scroll-area";
import { VatsimDataPilot } from "@/types/vatsim";
import { FlightPlanField } from "./field";
import { FlightPlanSeparator } from "./separator";

interface FlightPlanProps {
  data: VatsimDataPilot;
};

export function FlightPlan({data}: FlightPlanProps) {
  return (
    <ScrollArea className="h-[calc(100dvh-12.5rem)] pl-3">
      <div className="flex flex-col gap-8 mr-3">
        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="&lt;&#61;&#40;FPL" />
          <FlightPlanField label="7 - Aircraft Identification" value={data.callsign} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="8 - Flight Rules" value={data.flight_plan.flight_rules} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="Type of Flight" value="X" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="9 - Number" value="1" />
          <FlightPlanField label="Type of Aircraft" value={data.flight_plan.aircraft_short} />
          <FlightPlanSeparator content="/" />
          <FlightPlanField label="Wake Turbulence Category" value={data.flight_plan.aircraft} />
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="Equipment" value={data.flight_plan.aircraft} />
          <FlightPlanSeparator content="/" />
          <FlightPlanField label="Transponder" value="X" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="13 - Departure Aerodrome" value={data.flight_plan.departure} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Departure Time" value={data.flight_plan.deptime} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="15 - Cruising Speed" value={data.flight_plan.cruise_tas} prefix="N" />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Level" value={data.flight_plan.altitude} prefix="F" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2">
          <FlightPlanSeparator content="-" grow />
          <FlightPlanField label="Route" value={data.flight_plan.route} as="textarea" />
          <FlightPlanSeparator content="&lt;&#61;" grow />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-" />
          <FlightPlanField label="16 - Destination Aerodrome" value={data.flight_plan.arrival} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Total EET" value={data.flight_plan.enroute_time} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="Altn Aerodrome" value={data.flight_plan.alternate} />
          <FlightPlanSeparator content="&nbsp;" />
          <FlightPlanField label="2nd Altn Aerodrome" value="" />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

        <div className="flex gap-2">
          <FlightPlanSeparator content="-" grow />
          <FlightPlanField label="18 - Other Information" value={data.flight_plan.remarks} as="textarea" />
          <FlightPlanSeparator content="&lt;&#61;" grow />
        </div>

        <div className="flex gap-2 items-end">
          <FlightPlanSeparator content="-e/" />
          <FlightPlanField label="19 - Endurance" value={data.flight_plan.fuel_time} />
          <FlightPlanSeparator content="-p/" />
          <FlightPlanField label="People on Board" value="TBN" />
          <FlightPlanSeparator content="-C/" />
          <FlightPlanField label="Pilot in command (PIC)" value={data.name} />
          <FlightPlanSeparator content="&lt;&#61;" />
        </div>

      </div>
    </ScrollArea>
  );
};
