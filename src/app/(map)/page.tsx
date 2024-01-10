import { LiveFlightCard } from "@/components/live-flight-card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLiveFlights } from "@/services/live-flights";
import { Search } from "lucide-react";


interface MapLiveFlightsPage { };

export default async function MapLiveFlightsPage({ }: MapLiveFlightsPage) {
  const liveFlights = await getLiveFlights();

  if (!liveFlights) return null

  return (
    <Tabs defaultValue="all" className="flex flex-col gap-2 px-1 pt-4">
      <header className="flex flex-col mb-2 px-3">
        <h2 className="text-2xl font-bold">Live flights</h2>
        <span className="text-sm text-muted-foreground">It is a long established fact that a reader</span>
      </header>

      <div className="flex items-center gap-2 w-full justify-between px-3">
        <form className="relative bg-background/20 backdrop-blur-lg rounded-md text-muted-foreground w-full">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" />
          <Input placeholder="Search" className="pl-8 bg-transparent border-none" />
        </form>

        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all">
        <ScrollArea className="h-[calc(100dvh-12.5rem)] pl-3">
          <div className="flex flex-col gap-3 mr-3">
            {/* {liveFlights.map(flight => <LiveFlightCard key={flight.id} {...flight} />)} */}
          </div>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="friends">
        <ScrollArea className="h-[calc(100dvh-12.5rem)] pl-3">
          <div className="flex flex-col gap-3 mr-3">
            {/* {liveFlights.map(flight => <LiveFlightCard key={flight.id} {...flight} />)} */}
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};
