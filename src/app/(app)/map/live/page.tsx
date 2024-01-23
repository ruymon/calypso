import { LiveFlightCard } from "@/components/live-flight-card";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLiveFlights } from "@/services/live-flights";
import { ArrowLeftToLine, Search } from "lucide-react";
import Link from "next/link";

export default async function MapLiveFlightsPage() {
  const liveFlights = await getLiveFlights();

  if (!liveFlights) return null

  return (
    <Tabs defaultValue="all" className="flex flex-col z-10 bg-background absolute inset-0 max-w-xs">
      <header className="flex flex-col p-4 justify-between h-48">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-accent font-medium">Live flights panel</span>
          <Link href="/map" className={buttonVariants({ variant: 'outline', size: 'icon-sm' })}>
            <ArrowLeftToLine className="w-full h-full" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Now flying</h2>
            <span className="text-sm text-muted-foreground">It is a long established fact that a reader</span>
          </div>

          <div className="flex gap-2 w-full justify-between">
            <Input type="search" placeholder="Search" className="text-xs h-8" />


            <TabsList className="h-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
            </TabsList>
          </div>
        </div>
      </header>

      <TabsContent value="all" asChild>
        <ScrollArea className="mr-1.5 h-[calc(100vh-12rem)]">
          <div className="flex flex-col gap-4 pl-4 pr-3 pb-4">
            {liveFlights.slice(0, 10).map(flight => <LiveFlightCard key={flight.id} {...flight} />)}
          </div>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="friends" asChild>
        <ScrollArea className="mr-1.5 h-[calc(100vh-12rem)]">
          <div className="flex flex-col gap-4 pl-4 pr-3 pb-4">
            {liveFlights.slice(0, 10).map(flight => <LiveFlightCard key={flight.id} {...flight} />)}
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};
