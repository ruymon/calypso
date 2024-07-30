"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { parseAltitudeToFlightLevel } from "@/lib/utils";
import { TrackPosition } from "@/types/live-flights";
import { useState } from "react";

const chartConfig = {
  profile: {
    label: "Vertical Profile",
  },
  groundSpeed: {
    label: "Ground Speed",
    color: "hsl(var(--chart-4))",
  },
  altitude: {
    label: "Altitude",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface FlightTelemetryChartProps {
  data: TrackPosition[];
}

export function FlightTelemetryChart({ data }: FlightTelemetryChartProps) {
  const [timeRange, setTimeRange] = useState("90d");

  return (
    <ChartContainer config={chartConfig} className="h-48 border border-red-300">
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis
          dataKey="timestamp"
          tickMargin={8}
          minTickGap={24}
          tickFormatter={value => {
            const date = new Date(value * 1000);
            return date.toISOString().slice(11, 16).replace(":", "") + "z";
          }}
        />
        <YAxis
          yAxisId="left"
          fontSize={10}
          tickMargin={8}
          tickFormatter={val => {
            if (val === 0) return "0";
            return parseAltitudeToFlightLevel(val);
          }}
          allowDuplicatedCategory={false}
          type="number"
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          fontSize={10}
          type="number"
          domain={[
            // @ts-ignore
            dataMin => 0,
            // @ts-ignore
            dataMax => Math.ceil((dataMax * 2) / 100) * 100,
          ]}
          scale="linear"
          allowDuplicatedCategory={false}
        />

        <ReferenceLine
          yAxisId="left"
          y={2400}
          strokeDasharray="5 5"
          label="CRUISE ALTITUDE"
          stroke="#ff5100"
        />

        <ChartTooltip
          content={
            <ChartTooltipContent
              className="min-w-36 border"
              labelKey="profile"
              indicator="line"
            />
          }
        />

        <defs>
          <linearGradient id="fillGroundSpeed" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-groundSpeed)"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="var(--color-groundSpeed)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="fillAltitude" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-altitude)"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="var(--color-altitude)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <Area
          yAxisId="left"
          dataKey="altitude"
          type="natural"
          fill="url(#fillAltitude)"
          fillOpacity={0.4}
          stroke="var(--color-altitude)"
          stackId="a"
        />
        <Area
          yAxisId="right"
          dataKey="groundSpeed"
          type="stepAfter"
          fill="url(#fillGroundSpeed)"
          fillOpacity={0.4}
          stroke="var(--color-groundSpeed)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );

  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-lg">Vertical Profile</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 p-0"></CardContent>
    </Card>
  );
}
