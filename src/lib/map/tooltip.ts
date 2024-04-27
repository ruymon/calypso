import { DECK_GL_TOOLTIP_STYLE_OVERRIDE } from "@/config/map";
import { AirportSummary } from "@/types/airports";
import { LiveATC } from "@/types/atcs";
import { LiveFlight } from "@/types/live-flights";
import { PickingInfo } from "deck.gl";

export const flightLayerTooltip = ({
  callsign,
  flightPlan,
  network,
}: LiveFlight) => {
  return {
    html: `
      <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
        <span class="text-sm font-semibold">${callsign}</span>
        <span class="text-xs text-muted-foreground">${flightPlan?.departure?.icao || "TBN"} - ${flightPlan?.arrival?.icao || "TBN"}</span>
        <span class="text-2xs text-muted-foreground">${flightPlan?.aircraft?.icao} ${flightPlan?.aircraft?.icao && "&bull;"} <span class="uppercase">${network}</span></span>
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

  if (layer.id.includes("flights-layer")) {
    return flightLayerTooltip(object);
  }

  if (
    layer.id.includes("atcs-layer") ||
    layer.id.includes("atcs-facilities-icon")
  ) {
    return atcLayerTooltip(object);
  }

  if (layer.id.includes("airports-layer")) {
    return airportLayerTooltip(object);
  }

  return null;
};
