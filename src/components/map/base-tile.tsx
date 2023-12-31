"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode } from "react";
import Map from "react-map-gl";

interface MapBaseTileProps {
  children?: ReactNode;
}

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function MapBaseTile({ children }: MapBaseTileProps) {

  return (
    <Map
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/kewynf/clqt089cl007y01qvgxrx0i1v"
      initialViewState={{ latitude: -15, longitude: -47, zoom: 2 }}
      maxZoom={20}
      minZoom={3}
      attributionControl={false}
      touchZoomRotate={false}
      doubleClickZoom={true}
      dragRotate={false}
    >
      {children}
    </Map>
  );
}
