import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapHoveredFeature } from "@/contexts/map";
import { LiveFlight } from "@/types/live-flights";
import { Popup } from "react-map-gl";

interface MapFlightPopupProps extends MapHoveredFeature { }

function parseFlightData({ currentPosition, flightPlan, pilot, ...rest }: {
  id: string;
  callsign: string;
  currentPosition: string;
  flightPlan: string;
  network: string;
  pilot: string;
}): LiveFlight {
  const parseJSON = (jsonString: string): any => {
    try {
      return JSON.parse(jsonString)
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


export function MapFlightPopup({ longitude, latitude, feature }: MapFlightPopupProps) {
  const data = parseFlightData(feature.properties as any);

  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      offset={[0, -20] as any}
      closeButton={false}
      className="flight-popup"
      anchor='bottom'
    >
      <div className='flex flex-col px-3 py-2 gap-2'>
        <header className='flex items-center justify-between w-full'>
          <div className="flex gap-1.5 items-center">
            <figure className="w-4 h-4 items-center justify-center flex text-white font-extrabold rounded-sm text-xs leading-3 bg-vatsim">
              <span>V</span>
            </figure>
            <span className='font-bold text-base text-secondary-foreground'>{data.callsign}</span>
          </div>
          {data.flightPlan?.aircraft && <span className='text-xs italic text-muted-foreground'>{data.flightPlan.aircraft.icao}</span>}
        </header>

        {(!data.flightPlan || !data.flightPlan.departure || !data.flightPlan.arrival) ? (

          <span>No flight plan available...</span>
        ) : (

          <div className='flex items-center justify-between w-full gap-3 font-medium text-sm'>
            <span>{data.flightPlan?.departure?.icao || 'TBN'}</span>
            <Progress className='w-full h-1' value={45} />
            <span>{data.flightPlan?.arrival?.icao || 'TBN'}</span>
          </div>
        )}


        <div className='flex justify-between w-full items-center'>
          <div className='flex flex-col'>
            <span className='z-10 pr-2 font-medium text-sm'>{data.pilot.name}</span>
            <span className='text-muted-foreground'>{data.pilot.id}</span>
          </div>
          <Badge className='w-fit h-fit px-1 text-[10px] leading-[10px]'>Private Pilot</Badge>
        </div>

      </div>

      <footer className='flex items-center justify-center px-2 py-1 border-t bg-popover/75 rounded-b-sm'>
        <span className='text-muted-foreground'>Click to open details</span>
      </footer>
    </Popup>
  );

};
