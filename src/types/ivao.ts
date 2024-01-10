export interface IvaoData {
  updatedAt: string
  servers: IvaoDataServer[]
  voiceServers: IvaoDataServer[]
  clients: IvaoDataClients
  connections: IvaoDataConnections
}

export interface IvaoDataServer {
  id: string
  hostname: string
  ip: string
  description: string
  countryId: string
  currentConnections: number
  maximumConnections: number
}

export interface IvaoDataClients {
  pilots: IvaoDataPilot[]
  atcs: IvaoDataAtc[]
  followMe: IvaoDataFollowMe[]
  observers: IvaoDataObserver[]
}

export interface IvaoDataPilot {
  time: number
  id: number
  userId: number
  callsign: string
  serverId: string
  softwareTypeId: string | null
  softwareVersion: string | null
  rating: number | null
  lastTrack: IvaoDataLastTrack | null
  flightPlan: IvaoDataFlightPlan
  pilotSession: IvaoDataPilotSession
  createdAt: string
}

export interface IvaoDataLastTrack {
  altitude: number
  altitudeDifference: number
  arrivalDistance: number | null
  departureDistance: number | null
  groundSpeed: number
  heading: number
  latitude: number
  longitude: number
  onGround: boolean
  state: string | null
  timestamp: string
  transponder: number
  transponderMode: string
  time: number
}

export interface IvaoDataFlightPlan {
  id: number
  revision: number
  aircraftId: string | null
  aircraftNumber: number
  departureId: string | null
  arrivalId: string | null
  alternativeId: string | null
  alternative2Id: string | null
  route: string
  remarks: string | null
  speed: string
  level: string
  flightRules: string
  flightType: string
  eet: number
  endurance: number
  departureTime: number
  actualDepartureTime: number | null
  peopleOnBoard: number
  createdAt: string
  aircraft: IvaoDataAircraft | null
  aircraftEquipments: string
  aircraftTransponderTypes: string
}

export interface IvaoDataAircraft {
  icaoCode: string
  model: string
  wakeTurbulence: string
  isMilitary: boolean | null
  description: string
}

export interface IvaoDataPilotSession {
  simulatorId: string | null
  textureId: number | null
}

export interface IvaoDataAtc {
  time: number
  id: number
  userId: number
  callsign: string
  serverId: string
  softwareTypeId: string | null
  softwareVersion: string | null
  rating: number | null
  lastTrack: IvaoDataLastTrack | null
  atcSession: IvaoDataAtcSession
  atis: IvaoDataAtis
  createdAt: string
}

export interface IvaoDataAtcSession {
  frequency: number
  position: string | null
}

export interface IvaoDataAtis {
  lines: string[]
  revision: string
  timestamp: string
}

export interface IvaoDataFollowMe {
  time: number
  id: number
  userId: number
  callsign: string
  serverId: string
  softwareTypeId: string | null
  softwareVersion: string | null
  rating: number | null
  created_at: string
  lastTrack: IvaoDataLastTrack | null
  pilotSession: IvaoDataPilotSession
}

export interface IvaoDataObserver {
  time: number
  id: number
  userId: number
  callsign: string
  serverId: string
  softwareTypeId: string | null
  softwareVersion: string | null
  rating: number | null
  createdAt: string
  lastTrack: IvaoDataLastTrack | null
  atcSession: IvaoDataAtcSession
}

export interface IvaoDataConnections {
  total: number
  supervisor: number
  atc: number
  observer: number
  pilot: number
  worldTour: number
  followMe: number
}
