"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { parseUnixTimestampToZuluTimeString } from "@/lib/time";
import { useScopedI18n } from "@/locales/client";
import { TrackPosition } from "@/types/live-flights";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import Chart from "react-apexcharts";
import { amber, zinc } from "tailwindcss/colors";

interface VerticalProfileChartProps {
  data: TrackPosition[];
}

const colors = {
  altitude: amber[400],
  speed: zinc[400],
};

export default function VerticalProfileChart({
  data,
}: VerticalProfileChartProps) {
  const { resolvedTheme } = useTheme();
  const t = useScopedI18n("flightDetails.analytics.verticalPathChart");

  const chartData = useMemo(() => {
    const invertedTime = [];
    const invertedAltitude = [];
    const invertedGroundSpeed = [];
    const invertedCoordinates = [];

    for (let i = data.length - 1; i >= 0; i--) {
      invertedTime.push(data[i]!.timestamp);
      invertedAltitude.push(data[i]!.altitude);
      invertedGroundSpeed.push(data[i]!.groundSpeed);
      invertedCoordinates.push({
        latitude: data[i]!.lat,
        longitude: data[i]!.lng,
      });
    }

    return {
      invertedTime,
      invertedAltitude,
      invertedGroundSpeed,
    };
  }, [data]);

  return (
    <Card>
      <CardHeader className="gap-0.5">
        <CardTitle className="text-lg">{t("title")}</CardTitle>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <figure className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>{t("altitude")}</span>
          </div>

          <div className="flex items-center gap-1">
            <figure className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{t("speed")}</span>
          </div>
        </div>
      </CardHeader>
      <Chart
        type="area"
        width="100%"
        height={128}
        options={{
          chart: {
            id: "vertical-profile-chart",
            toolbar: {
              show: false,
            },
            parentHeightOffset: 0,
            sparkline: {
              enabled: true,
            },
          },
          grid: {
            show: false,
            padding: {
              bottom: 0,
              top: 16,
              left: 0,
              right: 0,
            },
          },
          tooltip: {
            // enabled: false,
            theme: resolvedTheme,
            style: {
              fontFamily: "Geist",
              fontSize: "11px",
            },
            x: {
              formatter: (value) => parseUnixTimestampToZuluTimeString(value),
            },
          },
          colors: [colors.altitude, colors.speed],
          stroke: {
            curve: "monotoneCubic",
            width: 2,
          },
          fill: {
            gradient: {
              opacityFrom: 0.4,
              opacityTo: 0.1,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: "datetime",
            labels: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            categories: chartData.invertedTime,
            tooltip: {
              enabled: false,
            },
          },
          yaxis: [
            {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              title: {
                text: t("altitude"),
              },
              forceNiceScale: true,
            },
            {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              title: {
                text: t("speed"),
              },
              forceNiceScale: true,
            },
          ],
        }}
        series={[
          {
            name: t("altitude"),
            data: chartData.invertedAltitude,
          },
          {
            name: t("speed"),
            data: chartData.invertedGroundSpeed,
          },
        ]}
      />
    </Card>
  );
}
