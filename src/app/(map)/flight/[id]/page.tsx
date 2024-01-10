import { FlightPlan } from "@/components/flight-plan";

interface FlightDetailsPageProps {
  params: {
    id: string
  }
}

export default async function FlightDetailsPage({ params: { id } }: FlightDetailsPageProps) {
  return null;
  // if (!flight) {
  //   return (
  //     <div>
  //       <h1>Flight not found</h1>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="flex flex-col gap-6 px-1 pt-4">
  //     <header className="flex flex-col mb-2 px-3">
  //       <h2 className="text-2xl font-bold">{flight.callsign}</h2>
  //       <span className="text-sm text-muted-foreground">It is a long established fact that a reader</span>
  //     </header>
  //     <FlightPlan {...flight} />
  //   </div>
  // );
};
