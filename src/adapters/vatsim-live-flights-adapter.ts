import { FlightPlan, LiveFlight, LiveFlights } from "@/types/live-flights";
import { VatsimDataFlightPlan, VatsimDataPilot } from "@/types/vatsim";

function parseVatsimAircraftWakeTurbulence(aircraft: string) {
  const regex = new RegExp(`\/(.+)\-`);
  const wakeTurbulence = regex.exec(aircraft)?.pop();

  return wakeTurbulence as string;
}

function parseVatsimAircraftEquipment(aircraft: string) {
  const regex = new RegExp(`-(.+)\/`);
  const equipment = regex.exec(aircraft)?.pop();

  return equipment as string;
}

function parseVatsimAircraftTransponderEquipmentCode(aircraft: string) {
  const regex = new RegExp(`\/.+.*?\/(.+)$`);
  const transponderCode = regex.exec(aircraft)?.pop();

  return transponderCode as string;
}

function parseVatsimFlightPlan(flight_plan: VatsimDataFlightPlan | null): FlightPlan | null {
  if (!flight_plan) return null;

  return {
    flightRules: flight_plan.flight_rules,
    flightType: 'X',
    departure: {
      icao: flight_plan.departure,
      iata: 'FIX', // TODO: Review this
      name: 'FIX', // TODO: Review this
      coordinates: [0, 0] // TODO: Review this
    },
    arrival: {
      icao: flight_plan.arrival,
      iata: 'FIX', // TODO: Review this
      name: 'FIX', // TODO: Review this
      coordinates: [0, 0] // TODO: Review this
    },
    aircraft: {
      icao: flight_plan.aircraft_short,
      wakeTurbulence: parseVatsimAircraftWakeTurbulence(flight_plan.aircraft),
      registration: 'PR-RUY', // TODO: Look this up in remarks (/REG=)
      transponderTypes: parseVatsimAircraftTransponderEquipmentCode(flight_plan.aircraft),
      equipment: parseVatsimAircraftEquipment(flight_plan.aircraft)
    },
    level: flight_plan.altitude, // FIXME: Parse this to FlightLevel by dividing by 100 and adding F in front of the number
    route: flight_plan.route,
    remarks: flight_plan.remarks, // FIXME: Parse this to get the rest of the information (Registration)
    cruiseTas: flight_plan.cruise_tas, // FIXME: Use ivao format. To parse, make 4 char add N in front.
    departureTime: flight_plan.deptime, // Vatsim "deptime": "0425", - IVAO - "departureTime": 82980,
    enrouteTime: flight_plan.enroute_time, // Vatsim - "enroute_time": "2150", IVAO - "eet": 32400,
    endurance: flight_plan.fuel_time, // VATSIM - "fuel_time": "2250", "endurance": 37800,
    alternate: flight_plan.alternate !== '' ? {
      icao: flight_plan.alternate,
      iata: 'FIX', // TODO: Review this
      name: 'FIX', // TODO: Review this
      coordinates: [0, 0] // TODO: Review this
    } : null,
    alternate2: null
  };
}

export function vatsimLiveFlightsAdapter(data: VatsimDataPilot[]): LiveFlights {
  if (!data) return [];

  return data.map(({ cid, name, latitude, longitude, altitude, heading, transponder, groundspeed, callsign, flight_plan, pilot_rating }: VatsimDataPilot) => (
    {
      id: `vatsim-${callsign.toLowerCase()}`,
      network: 'vatsim',
      callsign: callsign,
      pilot: {
        id: cid,
        rating: 'PP', // TODO: Use Enum to find the rating label (pilot_rating)
        name: name // TODO: Remove the Airport ICAO code from the name and Normalize the name Capitalization 
      },
      currentPosition: {
        coordinates: [longitude, latitude],
        altitude: altitude,
        heading: heading,
        transponder: transponder,
        groundSpeed: groundspeed,
        onGround: false // TODO: Implement this
      },
      flightPlan: parseVatsimFlightPlan(flight_plan)
    }
  ));

}