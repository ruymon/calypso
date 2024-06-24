"use client";

import { DataItemCard } from "@/app/[locale]/(map)/_components/data-item-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { parseAltitudeToFlightLevel } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { LiveFlightDetail } from "@/types/live-flights";

interface FlightPlanDetailsProps {
  data?: LiveFlightDetail;
}

export function FlightPlanDetails({ data }: FlightPlanDetailsProps) {
  const t = useScopedI18n("flightDetails.flightPlanDetails");

  return (
    <Tabs defaultValue="simple" className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{t("title")}</span>
          <span className="text-xs text-muted-foreground">{t("subtitle")}</span>
        </div>
        <TabsList className="flex w-fit">
          <TabsTrigger value="simple" className="px-1 py-0.5">
            {t("viewTypes.simple")}
          </TabsTrigger>
          <TabsTrigger value="detailed" className="px-1 py-0.5">
            {t("viewTypes.detailed")}
          </TabsTrigger>
        </TabsList>
      </header>

      <TabsContent value="simple">
        <div className="grid grid-cols-4 gap-3">
          <DataItemCard
            title={t("flightRules")}
            data={data?.flightPlan?.flightRules}
          />
          <DataItemCard
            title={t("flightType")}
            data={data?.flightPlan?.flightType}
          />

          <DataItemCard title="tas" data={data?.flightPlan?.cruiseTas} />

          <DataItemCard
            title="alt"
            data={
              data?.flightPlan?.level
                ? parseAltitudeToFlightLevel(data.flightPlan.level)
                : undefined
            }
          />

          <DataItemCard
            title={t("route")}
            data={data?.flightPlan?.route}
            className="col-span-4"
          />
          <DataItemCard
            title={t("remarks")}
            data={data?.flightPlan?.remarks}
            className="col-span-4"
          />
        </div>
      </TabsContent>
      <TabsContent value="detailed">
        <DataItemCard title={t("icaoFplFormat")}>
          (FPL-{data?.callsign}-{data?.flightPlan?.flightRules}
          {data?.flightPlan?.flightType || "S"}
          <br />-{data?.flightPlan?.aircraft?.icao}/
          {data?.flightPlan?.aircraft?.wakeTurbulence}-
          {data?.flightPlan?.aircraft?.equipment}/
          {data?.flightPlan?.aircraft?.transponderTypes}
          <br />-{data?.flightPlan?.departure?.icao}
          {data?.flightPlan?.departureTime}
          <br />-
          {data?.flightPlan?.cruiseTas && `N${data.flightPlan.cruiseTas}`}
          {data?.flightPlan?.level &&
            parseAltitudeToFlightLevel(data.flightPlan.level)}{" "}
          {data?.flightPlan?.route}
          <br />-{data?.flightPlan?.arrival?.icao}
          {data?.flightPlan?.enrouteTime} {data?.flightPlan?.alternate?.icao}{" "}
          {data?.flightPlan?.alternate2?.icao}
          <br />-{data?.flightPlan?.remarks}
          <br />
          -E/{data?.flightPlan?.endurance})
        </DataItemCard>
      </TabsContent>
    </Tabs>
  );
}
