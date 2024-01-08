'use client'

import { formatVatsimPilotDataToGeoJSON } from '@/lib/geojson';
import { getLiveFlights } from '@/services/live-flights';
import { useQuery } from '@tanstack/react-query';
import { Layer, Source, SymbolLayer } from 'react-map-gl';

const flightsLayerStyle: SymbolLayer = {
  id: 'live-flights-layer',
  type: 'symbol',
  layout: {
    'icon-image': [
      'coalesce',
      ['image', ['get', 'wake_turbulence', ['get', 'flight_plan']]],
      ['image', 'm']
    ],
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
    'icon-rotate': ['get', 'heading'],
  },
  paint: {
    'icon-color': '#818cf8',
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

  return (
    <Source id='live-flights-source' type='geojson' data={data && formatVatsimPilotDataToGeoJSON(data?.pilots)}>
      <Layer {...flightsLayerStyle} />
    </Source>
  )
}


