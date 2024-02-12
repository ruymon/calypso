import { FlightDetailsProgressCircle } from "@/components/app/flight-details/progress-circle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

interface FlightDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function FlightDetailsPage({
  params: { id },
}: FlightDetailsPageProps) {
  //const flight = await getFlightDetails(id);

  return (
    <Tabs
      defaultValue="general"
      className="flex flex-col gap-6 bg-background/50 backdrop-blur-xl flex-1 p-4 max-w-sm"
    >
      <header className="flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-accent font-medium">
            Flight details panel
          </span>
          <Link
            href="/map"
            className={buttonVariants({ variant: "outline", size: "icon-sm" })}
          >
            <ArrowLeftToLine className="w-full h-full" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <Avatar className="rounded-xl w-11 h-11">
                <AvatarImage
                  src="https://i.pinimg.com/originals/de/e5/4e/dee54e3f5afdd59b2c8d52495f545cb9.png"
                  alt="Airline Logo"
                />
                <AvatarFallback />
              </Avatar>

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">TAM3380</h2>
                <span className="text-sm text-muted-foreground">
                  LATAM Airlines &bull; JJ3380
                </span>
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

      <TabsContent value="general" className="flex-1 overflow-y-auto">
        <h1>General Information</h1>
      </TabsContent>

      <TabsContent value="flight-plan" className="flex-1 overflow-y-auto">
        <h1>Flight plan page</h1>
      </TabsContent>

      <TabsContent value="pilot" className="flex-1 overflow-y-auto">
        <h1>Pilot details page</h1>
      </TabsContent>

      {/* <FlightPlan {...flight} /> */}
    </Tabs>
  );
}
