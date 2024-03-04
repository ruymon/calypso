"use client";

import { env } from "@/env";
import { useMapInitialization } from "@/hooks/use-map-initialization";
import { useMapCursorStore } from "@/stores/map-cursor-store";
import { MAP_INITIAL_VIEW_STATE } from "@/stores/map-focused-location-store";
import { useMapHoveredFeatureStore } from "@/stores/map-hovered-feature-store";
import { useMapLayersStore } from "@/stores/map-layers-store";
import { useMapLoadStore } from "@/stores/map-load-store";
import "@/styles/map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback } from "react";
import Map, { MapLayerMouseEvent } from "react-map-gl";
import { MapLayerControls } from "./map-controls/map-layer-controls";
import { MapZoomControls } from "./map-controls/map-zoom-controls";
import { MapFlightPopup } from "./map-flight-popup";

interface InteractiveMapProps {
  children?: ReactNode;
}

const mapboxAccessToken = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const mapStyles = {
  light: "mapbox://styles/mapbox/outdoors-v11", //"mapbox://styles/filipecordovil/cls2lggkh01u201qo68uvfbrb",
  dark: "mapbox://styles/filipecordovil/clrpc6xop006301o83famdf0h",
};

export function InteractiveMap({ children }: InteractiveMapProps) {
  const [cursor, setCursor] = useMapCursorStore((state) => [
    state.cursor,
    state.setCursor,
  ]);

  const [hoveredFeature, setHoveredFeature] = useMapHoveredFeatureStore(
    (state) => [state.hoveredFeature, state.setHoveredFeature],
  );

  const [isMapLoaded] = useMapLoadStore((state) => [state.isMapLoaded]);
  const [isVatsimFlightsLayerVisible, isIvaoFlightsLayerVisible] =
    useMapLayersStore((state) => [
      state.isVatsimFlightsLayerVisible,
      state.isIvaoFlightsLayerVisible,
    ]);

  const { setMapCallbackRef } = useMapInitialization();

  const { resolvedTheme } = useTheme();

  const router = useRouter();

  const handleMouseEnter = useCallback((e: MapLayerMouseEvent) => {
    if (!e.features?.[0]) return;

    const featureCoordinates = JSON.parse(
      e.features[0].properties!.position,
    ).coordinates;

    setHoveredFeature({
      coordinates: featureCoordinates,
      feature: e.features[0],
    });

    setCursor("pointer");
  }, []);

  const handleMouseLeave = useCallback((e: MapLayerMouseEvent) => {
    setHoveredFeature(null);
    setCursor("grab");
  }, []);

  const handleOnClick = useCallback((e: MapLayerMouseEvent) => {
    const feature = e.features && e.features[0];

    if (!feature) return;

    const featureId = feature.properties!.id;
    const featureNetwork = feature.properties!.network;

    router.push(`/flight/${featureNetwork}/${featureId}`);
  }, []);

  const getInteractiveLayerIds = useCallback(() => {
    const layerIds = [];

    if (isVatsimFlightsLayerVisible) {
      layerIds.push("vatsim-flights-layer");
    }

    if (isIvaoFlightsLayerVisible) {
      layerIds.push("ivao-flights-layer");
    }

    return layerIds;
  }, [isVatsimFlightsLayerVisible, isIvaoFlightsLayerVisible]);

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
      initialViewState={MAP_INITIAL_VIEW_STATE}
      attributionControl={true}
      dragRotate={false}
      interactiveLayerIds={getInteractiveLayerIds()}
      cursor={cursor}
      onClick={(e) => isMapLoaded && handleOnClick(e)}
      onMouseEnter={(e) => isMapLoaded && handleMouseEnter(e)}
      onMouseLeave={(e) => isMapLoaded && handleMouseLeave(e)}
    >
      {hoveredFeature && <MapFlightPopup {...hoveredFeature} />}

      <MapLayerControls />
      <div className="absolute bottom-5 right-2">
        <MapZoomControls />
      </div>

      {/* <footer className="absolute bottom-0 right-4 z-10 flex h-6">
        <div className="flex h-full items-center justify-center gap-1 bg-destructive px-2 py-1 font-mono text-xs text-destructive-foreground">
          <span className="font-semibold uppercase">Navdata Cycle 2304</span>

          <Separator
            orientation="vertical"
            className="bg-destructive-foreground/25"
          />

          <span className="italic">Outdated</span>
        </div>
      </footer> */}
      {children}
    </Map>
  );
}
