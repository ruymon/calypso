"use client";

import { mapStyles } from "@/config/map";
import { env } from "@/env";
import { useMapAircraftIcons } from "@/hooks/use-map-aircraft-icons";
import { useMapCursorStore } from "@/stores/map-cursor-store";
import { useMapHoveredFeatureStore } from "@/stores/map-hovered-feature-store";
import { useMapLoadStore } from "@/stores/map-load-store";
import "@/styles/map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback } from "react";
import Map, { ViewStateChangeEvent } from "react-map-gl";
import { MapControls } from "./map-controls";
import { MapFlightPopup } from "./map-flight-popup";

interface InteractiveMapProps {
  children?: ReactNode;
}

const mapboxAccessToken = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function InteractiveMap({ children }: InteractiveMapProps) {
  const [cursor, setCursor] = useMapCursorStore((state) => [
    state.cursor,
    state.setCursor,
  ]);
  const [hoveredFeature, setHoveredFeature] = useMapHoveredFeatureStore(
    (state) => [state.hoveredFeature, state.setHoveredFeature],
  );
  const [isMapLoaded] = useMapLoadStore((state) => [state.isMapLoaded]);
  const { setMapCallbackRef } = useMapAircraftIcons();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const handleMove = useCallback((evt: ViewStateChangeEvent) => {
    // Do something with the map move event
  }, []);

  const handleMouseMove = useCallback(
    (evt: mapboxgl.MapLayerMouseEvent) => {
      const feature = evt.features && evt.features[0];

      if (!feature) {
        setHoveredFeature(null);
        return;
      }

      setHoveredFeature({
        longitude: evt.lngLat.lng,
        latitude: evt.lngLat.lat,
        feature: feature,
      });

      return;
    },
    [setHoveredFeature],
  );

  const handleMouseEnter = useCallback(() => {
    setCursor("pointer");

    return;
  }, [setCursor]);

  const handleMouseLeave = useCallback(() => {
    setCursor("auto");

    return;
  }, [setCursor]);

  const handleMouseDown = useCallback(
    (evt: mapboxgl.MapLayerMouseEvent) => {
      const feature = evt.features && evt.features[0];

      if (!feature || !feature.properties) return;

      console.log(feature);

      router.push(`/app/map/flight/${feature.properties.id}`);

      return;
    },
    [router],
  );

  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
      reuseMaps={true}
      ref={setMapCallbackRef}
      mapStyle={resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light}
      maxZoom={16}
      minZoom={2}
      attributionControl={false}
      dragRotate={false}
      interactiveLayerIds={[
        "vatsim-live-flights-layer",
        "ivao-live-flights-layer",
      ]}
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
  );
}
