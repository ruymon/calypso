import { DataItemCard } from "@/app/[locale]/(protected)/_components/data-item-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDecodedMetar } from "@/lib/airports";
import { DecodedMetarCard } from "./decoded-metar";

interface WeatherCardProps {
  metar: string | null;
  taf: string | null;
}

export function WeatherCard({ metar, taf }: WeatherCardProps) {
  const decodedMetar = metar ? getDecodedMetar(metar) : null;

  return (
    <Tabs defaultValue="raw" className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Weather information</span>
          <span className="text-xs text-muted-foreground">
            Detailed reports
          </span>
        </div>
        <TabsList className="flex w-fit">
          <TabsTrigger value="raw" className="px-1 py-0.5">
            Raw
          </TabsTrigger>
          <TabsTrigger value="decoded" className="px-1 py-0.5">
            Decoded
          </TabsTrigger>
        </TabsList>
      </header>

      <TabsContent value="raw">
        <div className="flex flex-col gap-4">
          <DataItemCard title="METAR" data={metar} />
          <DataItemCard title="TAF" data={taf} />
        </div>
      </TabsContent>
      <TabsContent value="decoded">
        {decodedMetar ? (
          <DecodedMetarCard data={decodedMetar} />
        ) : (
          <span className="text-muted-foreground">
            No decoded METAR available
          </span>
        )}
      </TabsContent>
    </Tabs>
  );
}
