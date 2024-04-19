import { ATCFacility } from "@/types/atcs";
import { Network } from "@/types/networks";
import {
  amber,
  blue,
  green,
  red,
  teal,
  violet,
  zinc,
} from "tailwindcss/colors";

export const MAP_STYLES = {
  light: "mapbox://styles/mapbox/outdoors-v11", //"mapbox://styles/filipecordovil/cls2lggkh01u201qo68uvfbrb",
  dark: "mapbox://styles/filipecordovil/clrpc6xop006301o83famdf0h",
};

export const AIRCRAFT_SPRITE_ICON_MAPPING = {
  heavy: { x: 0, y: 0, width: 32, height: 32, mask: true },
  helicopter: { x: 32, y: 0, width: 32, height: 32, mask: true },
  medium: { x: 0, y: 32, width: 32, height: 32, mask: true },
  light: { x: 32, y: 32, width: 32, height: 32, mask: true },
  super: { x: 64, y: 0, width: 32, height: 32, mask: true },
  supersonic: { x: 64, y: 32, width: 32, height: 32, mask: true },
};

export const ATC_FACILITIES_SPRITE_ICON_MAPPING = {
  TWR: { x: 20, y: 20, width: 20, height: 20, mask: false },
  AFIS: { x: 0, y: 20, width: 20, height: 20, mask: false },
  GND: { x: 20, y: 0, width: 20, height: 20, mask: false },
  RMP: { x: 40, y: 0, width: 20, height: 20, mask: false },
  DEL: { x: 0, y: 0, width: 20, height: 20, mask: false },
};

export const MAP_INITIAL_VIEW_STATE = {
  longitude: -47.921,
  latitude: -15.87,
  zoom: 3,
  bearing: 0,
  pitch: 0,
};

export const ATC_FACILITIES_ACCENT_COLOR: { [key in ATCFacility]: string } = {
  APP: amber[500],
  CTR: teal[500],
  DEP: violet[500],
  DEL: blue[500],
  FSS: violet[500],
  GND: green[500],
  TWR: red[500],
  UNKNOWN: zinc[500],
};

export const FLIGHT_ICON_ACCENT_COLOR: { [key in Network]: string } = {
  vatsim: green[500],
  ivao: blue[500],
};

export const FLIGHT_ICON_HOVER_ACCENT_COLOR: { [key in Network]: string } = {
  vatsim: green[400],
  ivao: blue[400],
};

export const ATC_FACILITIES_THAT_HAVE_LABEL: ATCFacility[] = [
  "DEL",
  "GND",
  "TWR",
];
