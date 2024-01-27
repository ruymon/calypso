'use client'

import '@/styles/map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback, useRef, useState } from 'react';
import InteractiveMap, { MapRef, Popup } from 'react-map-gl';
import { LiveFlight } from '@/types/live-flights';
import { FlightHoverInfo, MapFlightPopup } from './map-flight-popup';

interface MapBaseTileProps {
  children?: ReactNode;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

function parseFlightData({ currentPosition, flightPlan, pilot, ...rest }: {
  id: string;
  callsign: string;
  currentPosition: string;
  flightPlan: string;
  network: string;
  pilot: string;
}): LiveFlight {
  const parseJSON = (jsonString: string): any => {
    try {
      return JSON.parse(jsonString)
    } catch (error) {
      console.error(`Error parsing JSON: ${jsonString}`);
      return null;
    }
  };

  return {
    currentPosition: parseJSON(currentPosition),
    flightPlan: parseJSON(flightPlan),
    pilot: parseJSON(pilot),
    ...rest,
  };
}

export function MapBaseTile({ children }: MapBaseTileProps) {
  const router = useRouter();

  const mapRef = useRef<MapRef | null>(null);
  const [hoverInfo, setHoverInfo] = useState<FlightHoverInfo | null>(null);

  const [cursor, setCursor] = useState('auto');

  const onHover = useCallback(event => {
    const flight = event.features && event.features[0];

    if (!flight) {
      setHoverInfo(null);
      return;
    }

    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      data: parseFlightData(flight.properties),
    });
  }, []);

  const onMouseDown = event => {
    const flight = event.features && event.features[0];

    if (!flight) {
      //router.push('/map');
      return;
    }

    router.push(`/map/flight/${flight.properties.id}`);
    return;
  };

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('auto'), []);

  const mapRefCallback = useCallback((ref: MapRef | null) => {
    if (ref !== null) {
      mapRef.current = ref;
      const map = ref;

      // TODO: Load all images
      const loadImage = () => {
        if (!map.hasImage("m")) {
          map.loadImage("/assets/aircraft-icons/m.png", (error, image) => {
            if (error || image === undefined) throw error;
            map.addImage("m", image, { sdf: true });
          });
        }
      };

      loadImage();
    }
  }, []);

  return (
    <InteractiveMap
      style={{
        width: '100dvw',
        height: '100dvh',
        position: 'absolute',
        inset: 0,
      }}
      reuseMaps
      ref={mapRefCallback}
      mapStyle='mapbox://styles/filipecordovil/clrpc6xop006301o83famdf0h'
      mapboxAccessToken={MAPBOX_TOKEN}
      maxZoom={16}
      minZoom={2}
      attributionControl={false}
      dragRotate={false}
      cursor={cursor}
      initialViewState={{
        latitude: -15.8700,
        longitude: -47.9210,
        zoom: 3
      }}
      interactiveLayerIds={['live-flights-layer']}
      onMouseMove={onHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
    >
      {hoverInfo && <MapFlightPopup {...hoverInfo} />}

      {children}
    </InteractiveMap>
  );
}