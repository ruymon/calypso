export interface VatsimDataGeneral {
  version: number
  reload: number
  update: string
  update_timestamp: string
  connected_clients: number
  unique_users: number
}

export interface VatsimDataFlightPlan {
  flight_rules: string
  aircraft: string
  aircraft_faa: string
  aircraft_short: string
  departure: string
  arrival: string
  alternate: string
  cruise_tas: string 
  altitude: string  
  deptime: string
  enroute_time: string
  fuel_time: string
  remarks: string
  route: string
  revision_id: number
  assigned_transponder: string
}

export interface VatsimDataPilot {
  cid: number
  name: string
  callsign: string
  server: string
  pilot_rating: number
  military_rating: number
  latitude: number
  longitude: number
  altitude: number
  groundspeed: number
  transponder: string
  heading: number
  qnh_i_hg: number
  qnh_mb: number
  flight_plan: VatsimDataFlightPlan | null
  logon_time: string
  last_updated: string
}

export interface VatsimDataController {
  cid: number
  name: string
  frequency: string
  facility: number
  rating: number
  server: string
  visual_range: number
  text_atis: string[]
  last_updated: string
  logon_time: string
}

export interface VatsimDataAtis {
  cid: number
  name: string
  callsign: string
  frequency: string
  facility: number
  rating: string
  server: string
  visual_range: number
  atis_code: string
  text_atis: string[]
  last_updated: string
  logon_time: string
}

export interface VatsimDataServer {
  ident: string
  hostname_or_ip: string
  location: string
  name: string
  clients_connection_allowed: number
  client_connections_allowed: boolean
  is_sweatbox: boolean
}

export interface VatsimDataPrefile {
  cid: number
  name: string
  callsign: string
  flight_plan: VatsimDataFlightPlan
  last_updated: string
}

export interface VatsimDataFacility {
  id: number
  short: string
  long: string
}

export interface VatsimDataRating {
  id: number
  short: string
  long: string
}

export interface VatsimDataPilotRating {
  id: number
  short_name: string
  long_name: string
}

export interface VatsimDataMilitaryRating {
  id: number
  short_name: string
  long_name: string
}

export interface VatsimData {
  general: VatsimDataGeneral
  pilots: VatsimDataPilot[]
  controllers: VatsimDataController[]
  atis: VatsimDataAtis[]
  servers: VatsimDataServer[]
  prefiles: VatsimDataPrefile[]
  facilities: VatsimDataFacility[]
  ratings: VatsimDataRating[]
  pilot_ratings: VatsimDataPilotRating[]
  military_ratings: VatsimDataMilitaryRating[]
}