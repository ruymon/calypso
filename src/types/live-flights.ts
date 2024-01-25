export type LiveFlights = LiveFlight[]

export interface LiveFlight {
  id: string
  pilot: Pilot
  currentPosition: CurrentPosition
  callsign: string
  network: string
  flightPlan: FlightPlan | null 
}

export interface Pilot {
  id: number,
  rating: string
  name: string | null
}

export interface CurrentPosition {
  coordinates: number[]
  altitude: number
  heading: number
  transponder: string
  groundSpeed: number
  onGround: boolean
}

export interface FlightPlan {
  flightRules: string
  flightType: string
  level: string
  departure: Airport | null
  arrival: Airport | null
  aircraft: Aircraft | null
  route: string
  remarks: string
  cruiseTas: string
  departureTime: string
  enrouteTime: string
  endurance: string
  alternate: Airport | null,
  alternate2: Airport | null,
}

export interface Airport {
  icao: string
  iata: string
  name: string
  coordinates: number[]
}

export interface Aircraft {
  icao: string
  wakeTurbulence: string
  registration: string
  transponderTypes: string
  equipment: string
}
