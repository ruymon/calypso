'use client'

import { mapStyles } from '@/config/map';
import { useMapContext } from '@/contexts/map';
import { useMapAircraftIcons } from '@/hooks/use-map-aircraft-icons';
import '@/styles/map.css';
import { motion } from "framer-motion";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';
import Map, { ViewStateChangeEvent } from 'react-map-gl';
import { MapControls } from './map-controls';
import { MapFlightPopup } from './map-flight-popup';

interface InteractiveMapProps {
  children?: ReactNode;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export function InteractiveMap({ children }: InteractiveMapProps) {
  const { isMapLoaded, setIsMapLoaded, setHoveredFeature, hoveredFeature, cursor, setCursor, setFocusedLocation } = useMapContext();
  const [mapRef] = useMapAircraftIcons();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const handleMove = useCallback((evt: ViewStateChangeEvent) => {
    // Do something with the map move event
  }, []);

  const handleMouseMove = useCallback((evt: mapboxgl.MapLayerMouseEvent) => {
    const feature = evt.features && evt.features[0];

    if (!feature) {
      setHoveredFeature(undefined);
      return;
    }

    setHoveredFeature({
      longitude: evt.lngLat.lng,
      latitude: evt.lngLat.lat,
      feature: feature
    });

    return;
  }, [setHoveredFeature]);

  const handleMouseEnter = useCallback(() => {
    setCursor('pointer')

    return;
  }, [setCursor]);

  const handleMouseLeave = useCallback(() => {
    setCursor('auto')

    return;
  }, [setCursor]);

  const handleMouseDown = useCallback((evt: mapboxgl.MapLayerMouseEvent) => {
    const feature = evt.features && evt.features[0];

    if (!feature || !feature.properties) return;

    console.log(feature);

    router.push(`/map/flight/${feature.properties.id}`);

    return;
  }, [router])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isMapLoaded ? 1 : 0 }}>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        reuseMaps={true}
        onLoad={() => setIsMapLoaded(true)}
        ref={mapRef}
        mapStyle={resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light}
        maxZoom={16}
        minZoom={2}
        attributionControl={false}
        dragRotate={false}
        interactiveLayerIds={['live-flights-layer']}
        cursor={cursor}
        onMove={(evt) => isMapLoaded && handleMove(evt)}
        onMouseMove={(evt) => isMapLoaded && handleMouseMove(evt)}
        onMouseEnter={() => isMapLoaded && handleMouseEnter}
        onMouseLeave={() => isMapLoaded && handleMouseLeave}
        onMouseDown={(evt) => isMapLoaded && handleMouseDown(evt)}
      >
        {hoveredFeature && <MapFlightPopup {...hoveredFeature} />}
        <MapControls />

        {children}
      </Map>
    </motion.div>
  );
}