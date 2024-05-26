"use client";

import { PiMapPinAreaStroke } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useMapViewStateStore } from "@/stores/map-view-state-store";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { FlyToInterpolator } from "deck.gl";

interface FlyToPlaneButtonProps {}

export function FlyToPlaneButton({}: FlyToPlaneButtonProps) {
  const { selectedFlight } = useSelectedFlightStore();
  const { setViewState } = useMapViewStateStore();

  if (!selectedFlight) return null;

  const handleFlyToFeature = () => {
    setViewState({
      longitude: selectedFlight.position.lng,
      latitude: selectedFlight.position.lat,
      zoom: 6,
      transitionInterpolator: new FlyToInterpolator({ speed: 1 }),
      transitionDuration: "auto",
      transitionInterruption: 3,
      transitionEasing: (t: number) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      },
    });
  };

  return (
    <section className="sticky bottom-0 z-20 flex items-center justify-center bg-gradient-to-b from-background/0 via-background/75 to-background pb-4 pt-8">
      <Button
        onClick={handleFlyToFeature}
        variant="secondary"
        size="lg"
        className="rounded-full hover:bg-secondary-foreground hover:text-secondary"
      >
        <PiMapPinAreaStroke className="mr-3 h-4 w-4" />
        Focus flight on map
      </Button>
    </section>
  );
}
