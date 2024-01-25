'use client'

import { liveFlightToGeoJson } from '@/lib/geojson';
import { getLiveFlights } from '@/services/live-flights';
import { useQuery } from '@tanstack/react-query';
import { Layer, Source, SymbolLayer } from 'react-map-gl';

const flightsLayerStyle: SymbolLayer = {
  id: 'live-flights-layer',
  type: 'symbol',
  layout: {
    // 'icon-image': [
    //   'coalesce',
    //   ['image', ['get', 'wakeTurbulence', ['get', 'aircraft', ['get', 'flightPlan']]]],
    //   ['image', 'm']
    // ],
    'icon-image': 'm', // TODO: use wake turbulence if available. else use 'm'
    'icon-allow-overlap': true,
    "icon-size": [
      'interpolate',
      ['linear'],
      ['zoom'],
      0, 0.5,
      10, 0.75,
      15, 1,
      16, 1.75,
    ],
    'icon-rotate': ['get', 'heading', ['get', 'currentPosition']],
  },
  paint: {
    'icon-color': [
      'match', // Use the 'match' expression: https://docs.mapbox.com/style-spec/reference/expressions/#match
      ['get', 'network'], // Use the result 'STORE_TYPE' property
      'vatsim',
      '#13862E',
      'ivao',
      '#144EB6',
      '#616161' // any other store type
    ],
  },
}

const LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS = 1000 * 60; // 1 minute

export function MapLiveFlightsLayer() {
  const { data, error } = useQuery({
    queryKey: ['live-flights'],
    queryFn: getLiveFlights,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
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


