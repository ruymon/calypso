import { LiveFlightCard } from "@/components/live-flight-card";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLiveFlights } from "@/services/live-flights";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

export default async function MapLiveFlightsPage() {
  const liveFlights = await getLiveFlights();

  if (!liveFlights) return null;

  return (
    <Tabs
      defaultValue="all"
      className="flex flex-col gap-6 bg-background/50 backdrop-blur-xl flex-1 p-4 max-w-sm"
    >
      <header className="flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Now flying</h2>
            <span className="text-sm text-muted-foreground">
              It is a long established fact that a reader
            </span>
          </div>

          <Link
            href="/app"
            className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
          >
            <ArrowLeftToLine className="w-full h-full" />
          </Link>
        </div>

        <div className="flex gap-2 w-full justify-between">
          <Input type="search" placeholder="Search" className="text-xs" />

          <TabsList className="h-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
        </div>
      </header>

      <TabsContent value="all" className="flex-1 overflow-y-auto">
        <section className="flex flex-col gap-4 pr-2">
          {liveFlights.slice(0, 10).map((flight) => (
            <LiveFlightCard key={flight.id} {...flight} />
          ))}
        </section>
      </TabsContent>

      <TabsContent value="friends" className="flex-1 overflow-y-auto">
        To be implemented...
      </TabsContent>
    </Tabs>
  );
}
