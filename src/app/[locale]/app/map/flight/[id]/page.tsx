import { FlightDetailsProgressCircle } from "@/components/app/flight-details/progress-circle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFlightDetails } from "@/services/live-flights";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

interface FlightDetailsPageProps {
  params: {
    id: string
  }
}

export default async function FlightDetailsPage({ params: { id } }: FlightDetailsPageProps) {
  const flight = await getFlightDetails(id);

  return (
    <Tabs defaultValue="general" className="flex flex-col z-10 bg-background absolute inset-0 max-w-sm">
      <header className="flex flex-col px-4 py-2 justify-between h-48">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-accent font-medium">Flight details panel</span>
          <Link href="/map" className={buttonVariants({ variant: 'outline', size: 'icon-sm' })}>
            <ArrowLeftToLine className="w-full h-full" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <Avatar className="rounded-xl w-11 h-11">
                <AvatarImage src="https://i.pinimg.com/originals/de/e5/4e/dee54e3f5afdd59b2c8d52495f545cb9.png" alt="Airline Logo" />
                <AvatarFallback />
              </Avatar>

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">TAM3380</h2>
                <span className="text-sm text-muted-foreground">LATAM Airlines &bull; JJ3380</span>
              </div>
            </div>

            <FlightDetailsProgressCircle percentage={40} />
          </div>

          <TabsList className="h-9">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="flight-plan">Flight plan</TabsTrigger>
            <TabsTrigger value="pilot">Pilot</TabsTrigger>
          </TabsList>
        </div>
      </header>

      <TabsContent value="general" asChild>
        <ScrollArea className="mr-1.5 h-[calc(100vh-11rem)]">
          <h1>general page</h1>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="flight-plan" asChild>
        <ScrollArea className="mr-1.5 h-[calc(100vh-11rem)]">
          <h1>Flight plan page</h1>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="pilot" asChild>
        <ScrollArea className="mr-1.5 h-[calc(100vh-11rem)]">
          <h1>Pilot details page</h1>
        </ScrollArea>
      </TabsContent>


      {/* <FlightPlan {...flight} /> */}
    </Tabs>
  );
};
