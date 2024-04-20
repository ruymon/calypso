import { getAirportDetails } from "@/lib/flights";
import { notFound } from "next/navigation";

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

  console.log(data);

  // if (!data) {
  //   return notFound();
  // }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between gap-4 pt-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">sbgr</h1>
          <span className="text-sm text-muted-foreground">
            guarulhos international airport
          </span>
        </div>
      </header>

      <div className="p-0.5" />
    </div>
  );
}
