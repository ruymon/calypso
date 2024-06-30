import { ParsedRoute } from "@/types/navigraph";
import { PathLayer, TextLayer } from "deck.gl";
import { blue, emerald, rose, violet } from "tailwindcss/colors";
import { hexToRGBAArray } from "../utils";
//@ts-ignore
import { CollisionFilterExtension } from "@deck.gl/extensions";

const mockRouteTrack: [ParsedRoute] = [
  {
    departure: {
      icao: "SBGR",
      name: "GUARULHOS-GOV ANDRE FRANCO MON",
      latitude: -23.43555556,
      longitude: -46.47305556,
    },
    points: [
      {
        latitude: -23.39958889,
        longitude: -46.36223333,
        identifier: "AMVUL",
        segment: {
          type: "SID",
          name: "AMVU4A",
        },
      },
      {
        latitude: -23.34704444,
        longitude: -45.31569722,
        identifier: "DORLU",
        segment: {
          type: "AIRWAY",
          name: "UZ42",
        },
      },
      {
        latitude: -23.19740556,
        longitude: -44.62482778,
        identifier: "IMDAB",
        segment: {
          type: "AIRWAY",
          name: "UZ42",
        },
      },
      {
        latitude: -23.18170556,
        longitude: -44.55326667,
        identifier: "VUREP",
        segment: {
          type: "AIRWAY",
          name: "UZ42",
        },
      },
      {
        latitude: -23.18170556,
        longitude: -44.55326667,
        identifier: "VUREP",
        segment: {
          type: "STAR",
          name: "PABE1B",
        },
      },
      {
        latitude: -22.92861111,
        longitude: -43.98111111,
        identifier: "PABEB",
        segment: {
          type: "STAR",
          name: "PABE1B",
        },
      },
      {
        latitude: -22.811125,
        longitude: -43.71794722,
        identifier: "GL039",
        segment: {
          type: "STAR",
          name: "PABE1B",
        },
      },
      {
        latitude: -22.78985278,
        longitude: -43.62665833,
        identifier: "GL071",
        segment: {
          type: "STAR",
          name: "PABE1B",
        },
      },
      {
        latitude: -22.77416667,
        longitude: -43.5595,
        identifier: "EGDUT",
        segment: {
          type: "STAR",
          name: "PABE1B",
        },
      },
    ],
    arrival: {
      icao: "SBGL",
      name: "GALEAO-ANTONIO CARLOS JOBIM IN",
      latitude: -22.81,
      longitude: -43.25055556,
    },
  },
];

export const getRouteTrackLayer = () => {
  const trackLayer = new PathLayer<ParsedRoute>({
    id: "route-track-layer",
    data: mockRouteTrack,
    getPath: d =>
      [
        [d.departure.longitude, d.departure.latitude],
        ...d.points.map(point => [point.longitude, point.latitude]),
        [d.arrival.longitude, d.arrival.latitude],
      ] as [number, number][],
    getWidth: d => 8,
    capRounded: true,

    widthUnits: "pixels",
    getColor: d =>
      d.points.map(point => {
        if (point.segment.type === "SID") {
          return hexToRGBAArray(rose[400], 120);
        }

        if (point.segment.type === "AIRWAY") {
          return hexToRGBAArray(violet[400], 120);
        }

        if (point.segment.type === "WAYPOINT") {
          return hexToRGBAArray(emerald[400], 120);
        }

        return hexToRGBAArray(blue[400], 120);
      }),
  });

  const routeNodesLabelLayer = new TextLayer({
    id: "route-nodes-label-layer",
    data: mockRouteTrack[0]!.points,

    getPosition: d => [d.longitude, d.latitude],
    getText: d => d.identifier,

    getColor: d => {
      if (d.segment.type === "SID") {
        return hexToRGBAArray(rose[50]);
      }

      if (d.segment.type === "AIRWAY") {
        return hexToRGBAArray(violet[50]);
      }

      if (d.segment.type === "WAYPOINT") {
        return hexToRGBAArray(emerald[50]);
      }

      return hexToRGBAArray(blue[50]);
    },
    background: true,

    backgroundPadding: [1, 0],
    getBackgroundColor: d => {
      if (d.segment.type === "SID") {
        return hexToRGBAArray(rose[600]);
      }

      if (d.segment.type === "AIRWAY") {
        return hexToRGBAArray(violet[600]);
      }

      if (d.segment.type === "WAYPOINT") {
        return hexToRGBAArray(emerald[600]);
      }

      return hexToRGBAArray(blue[600]);
    },
    fontFamily: "Geist Mono",
    fontWeight: "900",
    sizeScale: 1,
    sizeMinPixels: 5,
    sizeMaxPixels: 12,
    sizeUnits: "pixels",
    extensions: [new CollisionFilterExtension()],
    collisionTestProps: {
      alphaCutoff: -1,
      sizeScale: 1,
    },
    wrapLongitude: true,
    getAlignmentBaseline: "center",

    getPolygonOffset: ({ layerIndex }) => {
      return [0, -layerIndex * 950];
    },
  });

  return [trackLayer, routeNodesLabelLayer];
};
