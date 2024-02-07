'use client'

import { liveFlightToGeoJson } from '@/lib/geojson';
import { getLiveFlights } from '@/services/live-flights';
import { useQuery } from '@tanstack/react-query';
import { Layer, Source, SymbolLayer } from 'react-map-gl';

const flightsLayerStyle: SymbolLayer = {
  id: 'live-flights-layer',
  type: 'symbol',
  layout: {
    'icon-image': [
      'coalesce',
      // TODO: Investigate null cases and errors in the console. Not priority.
      // FIXME: Heliport icon is not showing up...
      ['image', ['downcase', ['get', 'wakeTurbulence', ['get', 'aircraft', ['get', 'flightPlan']]]]],
      ['image', 'm']
    ],
    'icon-allow-overlap': true,
    // TODO: Use wakeTurbulence and aircraft type to determine icon size
    'icon-size': ['interpolate', ['exponential', 1.8], ['zoom'], 14, 0.5, 16, 1.75],
    'icon-rotate': ['get', 'heading', ['get', 'currentPosition']],
  },
  paint: {
    // 'icon-color': [
    //   'match', // Use the 'match' expression: https://docs.mapbox.com/style-spec/reference/expressions/#match
    //   ['get', 'network'], // Use the result 'STORE_TYPE' property
    //   'vatsim',
    //   '#29B473',
    //   'ivao',
    //   '#3C55AC',
    //   '#616161' // any other store type
    // ],
    'icon-color': '#fff',
  },
}

const LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS = 1000 * 60; // 1 minute

export function MapLiveFlightsLayer() {
  const { data, error } = useQuery({
    queryKey: ['live-flights'],
    queryFn: getLiveFlights,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchInterval: LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS,
  })

  if (error) console.error(error);

  if (!data) return null;


  return (
    <Source id='live-flights-source' type='geojson' data={liveFlightToGeoJson(data)}>
      <Layer {...flightsLayerStyle} />
    </Source>
  )
}


