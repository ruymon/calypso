import { DECK_GL_TOOLTIP_STYLE_OVERRIDE, MAP_LAYERS } from "@/config/map";
import { AirportSummary } from "@/types/airports";
import { LiveATC } from "@/types/atcs";
import { LiveFlight } from "@/types/live-flights";
import { PickingInfo } from "deck.gl";

export const flightLayerTooltip = (flight: LiveFlight) => {
  return {
    html: `
      <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
        <span class="text-sm font-semibold">${flight.callsign}</span>
        <span class="text-xs text-muted-foreground">${flight.departure || "TBN"} - ${flight.arrival || "TBN"}</span>
        <span class="text-2xs text-muted-foreground">${flight.aircraft} ${flight.aircraftType && "&bull;"} <span class="uppercase">${flight.network}</span></span>
      </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const atcLayerTooltip = ({
  callsign,
  facility,
  network,
  frequency,
  atis,
}: LiveATC) => {
  return {
    html: `
      <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
        <span class="text-sm font-semibold">${callsign}</span>
        <span class="text-2xs text-muted-foreground">${frequency} <span class="uppercase">${network}</span></span>
      </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const airportLayerTooltip = ({ icao, iata, name }: AirportSummary) => {
  return {
    html: `
    <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
    <span class="text-sm font-semibold">${icao}</span>
    <span class="text-2xs text-muted-foreground">${name}</span>
  </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const getTooltipContentBasedOnLayer = ({
  layer,
  object,
}: PickingInfo) => {
  if (!layer || !object) return null;

  if (layer.id === MAP_LAYERS.NETWORK_FLIGHTS_LAYER_ID) {
    return flightLayerTooltip(object);
  }

  if (
    layer.id === MAP_LAYERS.IVAO_ATCS_SHAPES_LAYER_ID ||
    layer.id === MAP_LAYERS.VATSIM_ATCS_SHAPES_LAYER_ID ||
    layer.id === MAP_LAYERS.NETWORK_ATCS_LABEL_LAYER_ID
  ) {
    return atcLayerTooltip(object);
  }

  if (layer.id === MAP_LAYERS.AIRPORTS_LAYER_ID) {
    return airportLayerTooltip(object);
  }

  return null;
};
