import { getFlightDetails } from "@/lib/flights";
import { notFound } from "next/navigation";
import { FlightDetails } from "./_components/flight-details";

interface FlightsDetailPageProps {
  params: {
    flightId: string;
  };
}

export default async function FlightsDetailPage({
  params: { flightId },
}: FlightsDetailPageProps) {
  if (!flightId) {
    return notFound();
  }

  const data = await getFlightDetails(flightId);

  if (!data) {
    return notFound();
  }

  return <FlightDetails initialData={data} />;
}
