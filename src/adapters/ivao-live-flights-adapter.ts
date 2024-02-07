import { IvaoDataPilot } from "@/types/ivao";
import { LiveFlights } from "@/types/live-flights";

export function ivaoLiveFlightsAdapter(data?: IvaoDataPilot[]): LiveFlights {
  if (!data) return [];

  return data.map(flight => (
    {
      id: `ivao-${flight.callsign.toLowerCase()}`,
      network: 'ivao',
      callsign: flight.callsign,
      pilot: {
        id: flight.userId,
        rating: 'PP', // TODO: Use Enum to find the rating label (flight.rating)
        name: 'Jonh Doe'
      },
      currentPosition: {
        coordinates: [flight.lastTrack?.longitude || 0, flight.lastTrack?.latitude || 0],
        altitude: flight.lastTrack?.altitude || 0,
        heading: flight.lastTrack?.heading || 0,
        transponder: String(flight.lastTrack?.transponder), // FIXME: WTF is Transponder a number? FUCK IVAO!       
        groundSpeed: flight.lastTrack?.groundSpeed || 0,
        onGround: flight.lastTrack?.onGround || false
      },
      flightPlan: flight.flightPlan ? {
        aircraft: flight.flightPlan?.aircraft?.icaoCode ? {
          equipment: flight.flightPlan.aircraftEquipments,
          icao: flight.flightPlan.aircraft?.icaoCode,
          registration: 'PR-TODO',
          transponderTypes: flight.flightPlan.aircraftTransponderTypes,
          wakeTurbulence: flight.flightPlan.aircraft?.wakeTurbulence || ''
        } : null,
        alternate: flight.flightPlan?.alternativeId ? {
          icao: flight.flightPlan.alternativeId,
          iata: 'FIX', // FIXME: Fetch airport info
          name: 'FIX ME', // FIXME: Fetch airport info
          coordinates: [-23.435556411743164, -46.47305679321289] // FIXME: Fetch airport info
        } : null,
        alternate2: flight.flightPlan?.alternative2Id ? {
          icao: flight.flightPlan.alternative2Id,
          iata: 'FIX', // FIXME: Fetch airport info
          name: 'FIX ME', // FIXME: Fetch airport info
          coordinates: [-23.435556411743164, -46.47305679321289] // FIXME: Fetch airport info
        } : null,
        departure: flight.flightPlan?.departureId ? {
          icao: flight.flightPlan.departureId,
          iata: 'FIX', // FIXME: Fetch airport info
          name: 'FIX ME', // FIXME: Fetch airport info
          coordinates: [-23.435556411743164, -46.47305679321289] // FIXME: Fetch airport info
        } : null,
        arrival: flight.flightPlan?.arrivalId ? {
          icao: flight.flightPlan.arrivalId,
          iata: 'FIX', // FIXME: Fetch airport info
          name: 'FIX ME', // FIXME: Fetch airport info
          coordinates: [-23.435556411743164, -46.47305679321289] // FIXME: Fetch airport info
        } : null,
        cruiseTas: flight.flightPlan.speed,
        departureTime: String(flight.flightPlan.departureTime),
        endurance: String(flight.flightPlan.endurance),
        enrouteTime: String(flight.flightPlan.eet),
        flightType: flight.flightPlan.flightType,
        level: flight.flightPlan.level,
        remarks: flight.flightPlan.remarks || '',
        route: flight.flightPlan.route,
        flightRules: flight.flightPlan.flightRules,
      } : null,
    }
  )) as LiveFlights;
}