import { PiCalendarDefaultStroke, PiDatabaseStroke } from "@/components/icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface EventCardProps {}

export async function EventCard({}: EventCardProps) {
  return (
    <Card className="group flex flex-1 basis-1/6 flex-col gap-2 border-transparent pb-2 transition-all duration-500 hover:bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Event banner"
        className="aspect-video w-full rounded-sm object-cover transition-all duration-500 group-hover:rounded-b-none"
        width={1280}
        height={720}
      />

      <CardHeader className="gap-0 px-2 py-0">
        <CardTitle>Gatwick Overnighter</CardTitle>
        <CardDescription className="line-clamp-2 text-ellipsis">
          VATSIM UK is pleased to announce their latest event Gatwick
          Overnighter, join our controllers working the night shift on Saturday
          11th May from 2100-0100z.
        </CardDescription>
      </CardHeader>

      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center gap-1.5">
          <PiCalendarDefaultStroke className="h-3 w-3 text-muted-foreground" />
          <span className="text-sm text-accent-foreground">
            14th May &bull; 2200z - 2300z
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <PiDatabaseStroke className="h-3 w-3 text-muted-foreground" />
          <span className="text-sm text-accent-foreground">Vatsim</span>
        </div>
      </div>
    </Card>
  );
}
