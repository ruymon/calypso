export const flightLayerBaseLayout: mapboxgl.SymbolLayout = {
  "icon-image": [
    "coalesce", 
    ["image", ["get", "type", ["get", "aircraft", ["get", "flightPlan"]]]]
  ],
  "icon-allow-overlap": true,
  "icon-size": ['interpolate', ['linear'], ['zoom'], 2, 0.5, 14, 0.8, 15, 1, 16, 2.5],
  "icon-rotate": ["get", "heading", ["get", "position"]],
}