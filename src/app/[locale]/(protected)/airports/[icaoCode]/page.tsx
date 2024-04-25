import { PiCalendarDefaultStroke, PiCloudSunStroke } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAirportDetails } from "@/lib/airports";
import { PlaneIcon, RadarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { FlightListCard } from "./_components/flight-list-card";
import { WeatherCard } from "./_components/weather-card";

interface AirportDetailPageProps {
  params: {
    icaoCode: string;
  };
}

export default async function AirportDetailPage({
  params: { icaoCode },
}: AirportDetailPageProps) {
  // const t = await getScopedI18n("flightDetails");

  if (!icaoCode) {
    return notFound();
  }

  const data = await getAirportDetails(icaoCode);

  if (!data) {
    return notFound();
  }
  {
    /* <figure className="absolute inset-0 top-0 -z-10 max-h-56 before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-background before:via-background/75 before:to-background/5 before:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-background after:via-background/5 after:to-background after:content-['']">
        <Image
          alt="weather image"
          src="https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          className="object-cover"
        />
      </figure> */
  }

  return (
    <Tabs defaultValue="weather" className="flex flex-1 flex-col gap-4">
      <header className="flex flex-col gap-4">
        {/* <Badge className="w-fit p-0.5 px-1.5 text-xs font-semibold">
          <PiLightningThunderElectricOnSolid className="mr-1 h-3 w-3" />{" "}
          Trending
        </Badge> */}

        <div className="flex flex-col">
          <h1 className="text-4xl font-bold leading-none">
            {data.icao}{" "}
            <span className="font-medium text-muted-foreground">
              {data.iata}
            </span>
          </h1>
          <span className="text-sm text-muted-foreground">{data.name}</span>
        </div>

        <TabsList className="mt-2 justify-start gap-2 rounded-none border-x-0 border-b border-t-0 p-0">
          <TabsTrigger
            value="weather"
            className="rounded-none border-b border-transparent px-1 py-2 data-[state=active]:border-accent-foreground data-[state=active]:bg-background"
          >
            <PiCloudSunStroke className="mr-1 h-3 w-3" />
            Weather
          </TabsTrigger>

          <TabsTrigger
            value="flights-insights"
            className="rounded-none border-b border-transparent px-1 py-2 data-[state=active]:border-accent-foreground data-[state=active]:bg-background"
          >
            <PlaneIcon className="mr-1 h-3 w-3" />
            Flights insights
          </TabsTrigger>
          <TabsTrigger
            value="atcs-insights"
            disabled
            className="rounded-none border-b border-transparent px-1 py-2 data-[state=active]:border-accent-foreground data-[state=active]:bg-background"
          >
            <RadarIcon className="mr-1 h-3 w-3" />
            ATC insights
          </TabsTrigger>
          <TabsTrigger
            value="events"
            disabled
            className="rounded-none border-b border-transparent px-1 py-2 data-[state=active]:border-accent-foreground data-[state=active]:bg-background"
          >
            <PiCalendarDefaultStroke className="mr-1 h-3 w-3" />
            Events
          </TabsTrigger>
        </TabsList>
      </header>

      <TabsContent value="weather">
        <WeatherCard metar={data.metar} taf={data.taf} />
      </TabsContent>

      <TabsContent value="events">
        <section className="flex flex-col gap-4">
          <header className="flex flex-col">
            <span className="text-xl font-semibold">Upcoming events</span>
            <span className="text-xs text-muted-foreground">METAR and TAF</span>
          </header>
        </section>
      </TabsContent>

      <TabsContent value="flights-insights">
        <FlightListCard data={data.stats} />
      </TabsContent>

      <TabsContent value="atcs-insights">
        <section className="flex flex-col gap-4">
          <header className="flex flex-col">
            <span className="text-xl font-semibold">Live traffic</span>
            <span className="text-xs text-muted-foreground">
              Departure and arrival insights among the networks
            </span>
          </header>

          <div className="flex h-4 w-full gap-1">
            <figure className="w-1/4 rounded bg-violet-400"></figure>
            <figure className="w-3/4 rounded bg-sky-400"></figure>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://static.skyscope.app/tails/TAM.png"
                alt="placeholder"
                className="h-7 w-8"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-accent-foreground">
                  TAM3314
                </span>
                <span className="text-xs text-muted-foreground">
                  SBGR - SBRJ
                </span>
              </div>
            </div>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
}
