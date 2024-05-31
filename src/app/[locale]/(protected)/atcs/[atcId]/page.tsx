import { NetworkIcon } from "@/components/network-icon";
import { getATCDetails } from "@/lib/atcs";
import { Network } from "@/types/networks";
import { notFound } from "next/navigation";

interface ATCDetailsPageProps {
  params: {
    atcId: string;
  };
}

export default async function ATCDetailsPage({
  params: { atcId },
}: ATCDetailsPageProps) {
  if (!atcId) {
    return notFound();
  }

  const data = await getATCDetails(atcId);

  console.log(data);

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{data.callsign}</h1>
          <span className="text-sm text-muted-foreground">
            SÃO PAULO CONTROL
          </span>
        </div>

        <NetworkIcon
          network={data.network.toLowerCase() as Network}
          className="h-9 w-9 rounded-lg"
        />
      </header>

      <div className="grid grid-cols-2 items-center gap-4 bg-background p-2">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">24</span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            time
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">129.00</span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            freq
          </span>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">Controller details</span>
          <span className="text-xs text-muted-foreground">
            Detailed information about the controller
          </span>
        </header>

        {/* <div className="grid grid-cols-2 gap-3">
        <AirportCard
          data={data.flightPlan?.departure}
          type="departure"
          className="col-span-2"
        />
        <AirportCard
          data={data.flightPlan?.arrival}
          type="arrival"
          className="col-span-2"
        />
        <AirportCard
          data={data.flightPlan?.alternate}
          type="alternate"
          className={
            data.flightPlan?.alternate2 ? "col-span-1" : "col-span-2"
          }
        />
        {data.flightPlan?.alternate2 && (
          <AirportCard data={data.flightPlan?.alternate2} type="alternate2" />
        )}
      </div> */}
      </section>
    </div>
  );
}
