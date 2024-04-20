"use client";

import { getParsedRouted } from "@/lib/flights";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface StoreFlightDataProps {
  data: LiveFlightDetail | null;
}

export function StoreFlightData({ data }: StoreFlightDataProps) {
  const { setTracks, setParsedRoute } = useSelectedFlightStore();

  if (!data) return null;

  useEffect(() => {
    const routeString = data.flightPlan?.route;
    const departureIcao = data.flightPlan?.departure?.icao;
    const arrivalIcao = data.flightPlan?.arrival?.icao;

    if (routeString && departureIcao && arrivalIcao) {
      const fetchParsedRoute = async () => {
        const routeStringWithDepartureAndArrival = `${departureIcao} ${routeString} ${arrivalIcao}`;
        const parsedRoute = await getParsedRouted(
          routeStringWithDepartureAndArrival,
        );

        setParsedRoute(parsedRoute);
      };

      fetchParsedRoute();
    }

    //cleanup
    return () => {
      setParsedRoute(null);
    };
  }, []);

  return null;
}
