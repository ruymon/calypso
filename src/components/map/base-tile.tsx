'use client'

import '@/styles/map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback, useRef, useState } from 'react';
import InteractiveMap, { MapRef, Popup } from 'react-map-gl';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { LiveFlight } from '@/types/live-flights';

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
  const [hoverInfo, setHoverInfo] = useState<{
    longitude: number;
    latitude: number;
    data: LiveFlight;
  } | null>(null);

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
      return;
    }

    router.push(`/flight/${flight.properties.id}`);
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
          map.loadImage("/assets/images/aircraft-icons/m.png", (error, image) => {
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
        top: 0,
        left: 0,
      }}
      reuseMaps
      ref={mapRefCallback}
      mapStyle='mapbox://styles/filipecordovil/clqvo0fh700nt01quhqc05chh'
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
      {hoverInfo && (
        <Popup
          longitude={hoverInfo.longitude}
          latitude={hoverInfo.latitude}
          offset={[0, -20] as any}
          closeButton={false}
          className="flight-popup"
          anchor='bottom'
        >
          <div className='flex flex-col px-3 py-2 gap-2'>
            <header className='flex items-center justify-between w-full'>
              <span className='font-bold text-base text-secondary-foreground'>{hoverInfo.data.callsign}</span>
              <span className='text-xs italic text-muted-foreground'>{hoverInfo.data.flightPlan?.aircraft.icao}</span>
            </header>
            {hoverInfo.data.flightPlan ? (
              <div className='flex items-center justify-between w-full gap-3 font-medium text-sm'>
                <span>{hoverInfo.data.flightPlan.departure.icao}</span>
                <Progress className='w-full h-1' value={45} />
                <span>{hoverInfo.data.flightPlan.arrival.icao}</span>
              </div>
            ) : (
              <span>No flight plan available...</span>
            )}


            <div className='flex justify-between w-full items-center'>
              <div className='flex flex-col'>
                <span className='z-10 pr-2 font-medium text-sm'>{hoverInfo.data.pilot.name}</span>
                <span className='text-muted-foreground'>{hoverInfo.data.pilot.id}</span>
              </div>
              <Badge className='w-fit h-fit px-1 text-[10px] leading-[10px]'>Private Pilot</Badge>
            </div>

          </div>

          <footer className='flex items-center justify-center px-2 py-1 border-t bg-popover/75 rounded-b-sm'>
            <span className='text-muted-foreground'>Click to open details</span>
          </footer>
        </Popup>
      )}

      {children}
    </InteractiveMap>
  );
}