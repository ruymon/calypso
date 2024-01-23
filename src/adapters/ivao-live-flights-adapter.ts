import { IvaoDataPilot } from "@/types/ivao";
import { LiveFlights } from "@/types/live-flights";

export function ivaoLiveFlightsAdapter(data?: IvaoDataPilot[]): LiveFlights {
  return [
    {
      id: 'ivao-tst1234',
      callsign: 'TST1234',
      currentPosition: {
        coordinates: [0, 0],
        altitude: 0,
        heading: 0,
        transponder: '2000',
        groundSpeed: 0,
        onGround: false
      },
      flightPlan: {
        aircraft: {
          equipment: 'S',
          icao: 'A320',
          registration: 'PR-IVA',
          transponderTypes: 'LB1',
          wakeTurbulence: 'M'
        },
        alternate: null,
        alternate2: null,
        arrival: {
          icao: 'SBGR',
          iata: 'GRU',
          name: 'Guarulhos',
          coordinates: [-23.435556411743164, -46.47305679321289]
        },
        departure: {
          icao: 'SBSP',
          iata: 'CGH',
          name: 'Congonhas',
          coordinates: [-23.626110076904297, -46.65638732910156]
        },
        cruiseTas: '450',
        departureTime: '20210904000000',
        endurance: '0000',
        enrouteTime: '0000',
        flightType: 'S',
        level: '000',
        remarks: 'TEST',
        route: 'TEST',
        flightRules: 'I',
      },
      network: 'ivao',
      pilot: {
        id: 12345,
        rating: 'PP',
        name: 'Test Pilot'
      }
    }
  ]
}