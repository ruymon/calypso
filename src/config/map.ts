import { env } from "@/env.mjs";
import { ATCFacility } from "@/types/atcs";
import { Network } from "@/types/networks";
import { MapViewState } from "deck.gl";
import {
  blue,
  emerald,
  green,
  orange,
  red,
  violet,
  yellow,
  zinc,
} from "tailwindcss/colors";

export type MapStyles = "light" | "dark" | "satellite";
export const BASE_MAP_STYLES: {
  [key in MapStyles]: string;
} = {
  light: "mapbox://styles/mapbox/outdoors-v11", //"mapbox://styles/filipecordovil/cls2lggkh01u201qo68uvfbrb",
  dark: "mapbox://styles/filipecordovil/clrpc6xop006301o83famdf0h",
  satellite: "mapbox://styles/mapbox/satellite-v9",
};

export const MAP_SPRITES = {
  AIRPORT_ICONS:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgB7ZThDYIwEIWfTuAIjqAb1AkcwW7CjdAVHMEJHAE3wA1wA3wkJbSkpZQQ/sCXfGly6V3Su0uBNEIbq6QuH7EwGyyYQtES/VAqqjGTwik0tEAm2kmuqbFWTlyFEg8I79aDnumX3uwJG2tbcKIf+goVbUY0gftmLGfxKceefKcX+qNX+E9+o2/HExNR8FelG0rtxDUyEcR7JZiJhr8qJSLrkoNg/75WLfgHhktFwcwdGGMAAAAASUVORK5CYII=",
  AIRCRAFT_ICONS:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABACAYAAADlNHIOAAAAAXNSR0IArs4c6QAACPlJREFUeF7lnI9xJTUMxn0dQAVABRwVABUAFQAVABXAVQBUAFfBQQVABUAFQAXQAeQX9svo+ey1JO+f7JxnMi/J89qSPkmWZHuflLn2TSnl71LKs7lhbp7+upTyvJTy24ZjMhS0/lFK+XbjcaeGezL19P/Cp70+OY59/LVSyk+LwACi1+j3cSnln1LKj8tnr+/3i/C3VBTmeu+OTuj4Icv/DABMjqBob5ZS/soS0XgOpr4rpfx+991XnXHRZual/VxKeb/TD+H/upPmQwO0phVwBoAPSykvFqY/WdzGhhjcD/XlnXuDxhoEO7fmBACAUEMwuB2UZM2SsjRbBXwn6zJnAEA4EsznO2mYQECYXxhJ2bn1b2jAFf25aKXHjWWFz3MoHVaq31MgzwDA5BBBQ9OsgGYYaz3LPPj7jxZfz0KNwG2DBhZY1gQsE9eTEoqTeKsEKGJqfdkKAJj91El4thsmj+ABAeYFvsbD/aAE9OFz6yiqpvuVAwABsOhiebiZFgD0OUL4co1ywa+EBUgDBQJ/YxU03A4N67ALcdbaPM+dagEIgUVOYSAaSRTC5xENK2BuCf7pEouzBhxJw/Qa6F0DiELQNhIOmGWRk/AlcBhHA/G9hIloogS0NSiAD036EV3MfwQABACsNbbh+ggEQs0LAEKHaS1yMN5qCFx93toRAOUf0AAtCB2FIBDYAwAsDutCuRDyZx3+iYRYD5AXfYaBiRcA5qPs0BN8TQ9ApLNDhwqhfTDJD03WhgD2AODfRbB4Aa07PTIBCYsEiKF8hx2WWRiMRSfSpA2RZzx9oeUDI3yeQej8/LIw7hkn0ieifBoXevACq60HgC0yEeOTBGWaEjR8JpoxG6EgfLSRVpcnWBBxQ63SRYR2rFy5BJbc8vfe8aSE0IUC455v1sUeABCgBY4FdaZhjkyKRqSyRSNwhM8Ytgwg2lAaLABGtR5k6OZZimzwjfBHLmc0B/xTIlHkdlO07AHQYlCmzoBoM31EHFYC828vhNcREs/CEIRkWl1OxvdT4VSrzR3aWAQzURGKpypnhtbWMyigqqZDC0CoQovBeAABoHn2YaIiC4BWfFkObsu6CRumRhjrlZNtPaiViQISfERBWFvv4J8flBCFsnlQ/b8Wjy+ti7UF1P4On90L7QgF5Z5atSABgaCsG/PGyzw/KqphBVhjL9xT1uwJT9W35XIQLrIgFKUfymSLkXwP0NCsdQNvUJdLAAV6H5TCAmCRZzL+ZkOkl0xZAtaKcRAF0TZ5G0VI3l0x1YXW1hbNDQi9Ah1Chz4bZiMDBK3t0VoO1gJb1WAlr+8uEZsFlnGR73MLAAsck/CFZ9/UC4A1RTRCi2Rv/fEKn3E9ANBPICCoukRtFQ/+lc0CqjS65U68tSBZDN4FqwAIua5nVgggWvv5NV+d3Q9gcpWVW+NDIMrAoj5qXgAYB2GyLtShMDG+kifA8ZZPvAC0eND+xlMLgJAaMa3vZwiIztWjKQJAbwxchAfs+nmiLFlLdkfwBgCv4NVvCwKic9b9twAgS8PpW5KWgJkYPyIA3JMtiagQZxfPozZkbC6iJDDCy31fby2oNfAmBAQpxnXZsgiMqw6koYjItjwi0yPR8n/KqQi0zh7M8i5eQZmvdj/LBWHxzC3LU+wfPgSQtQAlSa1MeEsBj8Y6A4C1THmU37zETwYAxdSqxWvQmwxvJLmNvj8SgFrp0HoldshEsT1ZMeuQa18iCkC9F1zL8Yy94dkqq1cXVKBjjUHIhK42ZyGcJTDBPQEO68LQLUcAQAOovdgClFBWkgMz/M81uZfzlX6UD2ByuPU3ORf8sQk0OgSsaQBCZfjVqaMAEAKSSYI+jOtkgsqtaAFaEcmoZ2QDo6T3e57Km6Fv+GwEgNZgZIKUDS4rgKGE1jtMZ/QzAGjnCBLZgB/6u0lmH+PjVAMi9aNNoiDr53Q6OFsLeYxCjdA0fZtnxgJsPfyIw7kRwRzVl6BEh4JTc84AkNkPSBG58hC5CBHK7GmLLF2EpvcbK9kBrgqAEh+VA4iGSIqOqAFZWQOA9stTGFwVAJg94orUSKgAoMx31Lf5/ZUBmNkQSgmr8RAA6OBCaswrA/AY1iCqwVhAOhOPAKCjJboT2xMA/phyxN4LY30sBCEcnYuQhOpIyu4WoINYAs0ezLL3dCFq7d5uTSjAvrFEM6oz6UyRPWHXOm3nYVqHqVS34tP+LxvBaENm6iR4xAIkcG7C4H/rA0yKBuQXexena6HpsK1HmHv0icjAzm+3ZOs7ym46I5O37ub2JopcW70qAPZkYITfG5l5ANDR6tYxuzWkZRGjjYnM2Xu3hg06us7wd8awdKfHWQMAP0yNJ3oxo6bXAwRzUVbWMUZAV5Zb77y15CGf3vuOJE07WPqcSdrsawo0JzSHx2wBIMFT6fNeSfJopAcIzzjqkz2ZF5mj19fOrT6pu8IWgJbg0RYiGl0y0DkcJu2FoWzKcKiXHSTdWlEEw3icOwWMkWsaCcoeDEsxP5qg870tw9suWBk7gaEmABiUyp4ErNuAa0f2IokQoODOcCfaxNCV1hDBpvMZB8NqxatpD781RgAoFkfTvX4sAoAlFACwDuZJv+hoAVO3ZNIn04Lo97Rfw2Dhoeu5nijI4wfP2A8442CYfUlUTy4hWVwZAASwxyvTeoKN3JbEvbqs++oA4IIwe2/WHfQ4D91H56Hqcd2u6OoAaEMGjduz9W6Nrs3p2ie/GgAstiRsRFP2qo+SK6I3IjeX+QcQa8X9o8dda8EMAKNLaiMCM99760YzfLXoAnAiN5reUUEeoywd4HFT5EzKusmFhm/tmiH0jBsyLQB0Ks8KboaviGLoWM4hGzI1YbYeclQcjsaxdyAXhIapXMLvemHHURszeqXDKQDYTfF0PTyibo2+mD0ADE19cp7e4ypUpt+BkTFVGKb2Ur+0aOti204y23RYoiMs8jAA6qs5NTcPN8A3ZfPxDoYrJCrLbmuGLunJ5+u9P3zqvUJoP7/LN6cvrT1eWTcpwwViAZl7xvcDRl1QfXVfoZl9DY29uHYxeabIxQIIOVPtP6COUf6oC/0GAAAAAElFTkSuQmCC",
  ATC_FACILITIES:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAAAXNSR0IArs4c6QAABC5JREFUaEPtmHtsS1Ecx7+3unhsLSbisVJmjIiKsC4m3oRFGEK8lk34Q4QgEo8IEY94zF/C/iCINUQkohYW75CIMCOyCuYRW231iKTZ2k4n21o551jdtefe9u5Wg9zfP/f2vHo+v9/v/H6/e4TkDQ+DiKOYZu+L42rAqwpXXNcTNGCV+tQsrFKBCXHpE8szIrZZ72/Fg/cNuPbCLYsgZ2Fr6igUmOdjhHEIXcPT4oO97g7srtvwtjRy1+UBC5PWAj37R473exF0VgBv7knukXuGfUdzJCc43U3IPfYSH90/uGOkgNdnrMD6ofncOS7/VxSUbwN5hgsXuPAMBPM4yT0GayoQtK3m9ssCN/hbQhadmNEdA1M700UIdE6RA6Q/XHjAC9Jm4qBlMx1KoGw1V+BpbsQC0wxYUy20/YnbQaEVA1eWsildDIA5iz0BBG8WIVh+LmI9WWCn+wdG7nkWmnR44WCsm9yP/j5wvRYHbtTGBHx3ylmkde1Dx06/vzJkSWNSCkifQZ9M+7JuL4pw7WgWDuxlCqOSORW6JUcZcGUpgqW71AF376qH65CVLuJwNSKnqDIq8AhjOuwTiiWtSPoN+hSqBE+zTx3w6HnQ5e1nwI/PIXirSB0wmf1y91iYUztTd07b/iQqMAlUtmz2xyXVdhysOknfhxvSYUxilm2T154PioGJJX9beBoE4tL1nxCwraLPcFHk0vEEtlkPw9pL5I4APcPkLIslmktHEDV5Ebi4EXA+jegiDYqASdB6tXusIpcmZ5ecUyLiwFQ4aD6GG9OppdvSVIeAxUErc1oIMlCyigutCHjHbBN25A6kixbf/4xt9uqoLk0GSAWt8L6OAIuDljA6D0Ieq+U7FKVpWnKwQmNUWjIsJnbmPv7KxSSKh0vsackHkq7Ebq0WGIOyoCs4zYA7ErR4h4DALj1VBYfrO/eMSBYeQ/NBig+eEFcn+Vg1cI/+0G24wYCVpKUTKyJLywZ/KyrrGlH2wo16TsHRBiJXWhKLkmKjLSeTVHT83Xk6lbSXVF9BlfdDO51wg1Z2PoS+mXRcQJxruxigm7WVAX95E3vhwTVDjI3a11KMipIalpCvJTV71CysRnv4A1c8+9d443qntfjmTJWI7adn1jwW4rmgoAGrVKdmYZUKTLhLm4d1gmW8nm7b8agFzretsgg8C/fetQk6Y4rsvIDHi2/72Me7WBIObBmfhLmF7GrnakkThZYTHnD6g8vQm9hNiZQ0131G9cSF/wfwgAvFSPoFTCytM7J7J2LVgMdH3wlw7bJ1/wewmKLvkZ0wLppDmxouleHrFnYlIyX/pEtrwJqFNZcOaUA7w7IhLnpn1Fo6HnlYC1p/c9CKR2kptjDJwd2yx9Cm7+XP4blU9nfl4einov0I7WtJqcbCxic8Sivdr2ZhpRr7wxb+CYFVAp6/pGIhAAAAAElFTkSuQmCC",
};

export const MAPBOX_ACCESS_TOKEN = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const AIRPORT_SPRITE_ICON_MAPPING = {
  airport: { x: 0, y: 0, width: 20, height: 20, mask: true },
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

export const MAP_INITIAL_VIEW_STATE: MapViewState = {
  longitude: -47.921,
  latitude: -15.87,
  zoom: 3,
  bearing: 0,
  pitch: 0,
  maxZoom: 16,
  minZoom: 2,
};

export const ATC_FACILITIES_ACCENT_COLOR: { [key in ATCFacility]: string } = {
  APP: red[400],
  DEP: emerald[500],
  CTR: orange[400],
  DEL: blue[500],
  FSS: violet[500],
  GND: green[500],
  TWR: red[500],
  UNKNOWN: zinc[500],
};

export const ATC_FACILITIES_Z_INDEX: { [key in ATCFacility]: number } = {
  TWR: 3,
  DEP: 3,
  DEL: 3,
  GND: 3,
  APP: 2,
  CTR: 1,
  FSS: 0,
  UNKNOWN: 0,
};

export const FLIGHT_ICON_ACCENT_COLOR: { [key in Network]: string } = {
  vatsim: green[500],
  ivao: blue[500],
};

export const FLIGHT_TRACK_ACCENT_COLOR: { [key in Network]: string } = {
  vatsim: green[600],
  ivao: blue[600],
};

export const FLIGHT_ICON_EMERGENCY_ACCENT_COLOR = red[500];
export const FLIGHT_TRACK_EMERGENCY_ACCENT_COLOR = red[500];

export const FLIGHT_ICON_USER_ACCENT_COLOR = yellow[500];
export const FLIGHT_TRACK_USER_ACCENT_COLOR = yellow[500];

export const ATC_FACILITIES_THAT_HAVE_LABEL: ATCFacility[] = [
  "DEL",
  "GND",
  "TWR",
];

/**
 * @see https://github.com/visgl/deck.gl/blob/5d9c5907c37b588fb5eb262b9622e1aa033ee8b3/modules/core/src/lib/tooltip.ts#L26
 */
export const DECK_GL_TOOLTIP_STYLE_OVERRIDE = {
  background: "transparent",
  margin: "0",
  padding: "0",
  border: "none",
  boxSizing: "border-box",
  pointerEvents: "none",
};

export const MAP_LAYERS = {
  NETWORK_FLIGHTS_LAYER_ID: "networks-flights-layer",
  NETWORK_ATCS_SHAPES_LAYER_ID: "networks-atcs-shapes-layer",
  NETWORK_ATCS_LABEL_LAYER_ID: "networks-atcs-label-layer",
  AIRPORTS_LAYER_ID: "airports-layer",
  SELECTED_FLIGHT_TRACK_LAYER_ID: "selected-flight-track-layer",
  SELECTED_FLIGHT_ICON_LAYER_ID: "selected-flight-icon-layer",
};
