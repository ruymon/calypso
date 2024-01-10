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
    flightType: 'S', // TODO: Review this
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
    level: flight_plan.altitude, // TODO: Parse this to FlightLevel or Altitude
    route: flight_plan.route,
    remarks: flight_plan.remarks,
    cruiseTas: flight_plan.cruise_tas,
    departureTime: flight_plan.deptime,
    enrouteTime: flight_plan.enroute_time,
    endurance: flight_plan.fuel_time,
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
      id: `vatsim-${callsign}`,
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