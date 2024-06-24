import { PiArrowLeftStroke, PiArrowRightStroke } from "@/components/icons";
import { NetworkIcon } from "@/components/network-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { remark } from "remark";
import html from "remark-html";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { EventCard } from "../_components/event-card";

interface EventDetailsPageProps {
  params: {
    eventId: string;
  };
}

interface VatsimEvent {
  id: number;
  type: string;
  name: string;
  link: string;
  organisers: Array<{
    region: string;
    division: string;
    subdivision: any;
    organised_by_vatsim: boolean;
  }>;
  airports: Array<{
    icao: string;
  }>;
  routes: Array<{
    departure: string;
    arrival: string;
    route: string;
  }>;
  start_time: string;
  end_time: string;
  short_description: string;
  description: string;
  banner: string;
}

async function getVatsimEventDetails(eventId: string): Promise<VatsimEvent> {
  const url = `https://my.vatsim.net/api/v2/events/view/${eventId}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(url, options);
  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export default async function EventDetailsPage({
  params: { eventId },
}: EventDetailsPageProps) {
  const event = await getVatsimEventDetails(eventId);

  const processedDescription = (
    await remark().use(html).process(event.description)
  ).toString();

  const isTitleTooLong = event.name.length > 30;

  return (
    <div className="flex flex-1 flex-col">
      <div className="navbar-transition sticky top-0 z-10 flex h-14 w-full">
        <nav className="mx-auto flex max-w-6xl flex-1 items-center gap-8  px-6">
          <Link
            href="/events"
            className="flex w-fit items-center gap-1 text-muted-foreground transition-all hover:text-accent-foreground"
          >
            <PiArrowLeftStroke className="h-4 w-4" />
            <span className="text-sm">Back to events</span>
          </Link>
        </nav>
      </div>

      <header className="relative flex min-h-[75dvh] flex-1 -translate-y-14 flex-col justify-end">
        <figure className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-background before:to-background/0 after:absolute after:inset-0 after:bg-gradient-to-b after:from-background/5 after:to-background">
          <Image
            src={event.banner}
            alt="Event banner"
            className="object-cover"
            fill
          />
        </figure>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-12 pt-6 backdrop-blur-[0px]">
          <div className="flex flex-col gap-2">
            {/* <Badge variant="success-glass" className="mb-4">
              <PiSparkleAi01DuoSolid className="mr-1 h-3 w-3" />
              Featured Event
            </Badge> */}

            <h1
              className={cn(
                "text-balance font-black text-foreground",
                isTitleTooLong ? "text-6xl" : "text-7xl",
              )}
            >
              {event.name}
            </h1>

            <span className="line-clamp-2 w-3/4 text-ellipsis whitespace-normal text-balance text-lg text-muted-foreground">
              {event.short_description}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Date</span>
              <span className="font-medium text-accent-foreground">
                {format(new Date(event.start_time), "MMMM d, yyyy")}
              </span>
            </div>

            <Separator orientation="vertical" className="h-8 bg-accent" />

            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Network</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-accent-foreground">
                  Vatsim
                </span>
                <NetworkIcon network="vatsim" className="h-4 w-4" />
              </div>
            </div>

            <Separator orientation="vertical" className="h-8 bg-accent" />

            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Airports</span>
              <span className="font-medium text-accent-foreground">
                {event.airports.map((airport) => airport.icao).join(", ")}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button size="lg">Add to calendar</Button>

            <Link
              href={event.link}
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className:
                  "text-muted-foreground transition-all duration-300 hover:text-accent-foreground",
              })}
            >
              More details
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex gap-10">
          <article
            className="max-w-none flex-1 prose-p:my-0 prose-p:leading-loose prose-p:text-muted-foreground prose-strong:font-semibold prose-strong:text-accent-foreground"
            dangerouslySetInnerHTML={{ __html: processedDescription }}
          />

          <Separator orientation="vertical" />

          <aside className="flex basis-1/3 flex-col gap-12">
            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-accent-foreground">
                Event details
              </h2>

              <div className="flex items-center gap-3">
                <figure className="flex h-11 w-11 flex-col">
                  <div className="flex items-center justify-center rounded-t-sm bg-muted px-2 py-1">
                    <span className="text-2xs font-bold uppercase leading-none text-muted-foreground">
                      {format(new Date(event.start_time), "LLL")}
                    </span>
                  </div>

                  <div className="flex flex-1 items-center justify-center rounded-b-sm border border-muted p-1.5">
                    <span className="font-bold leading-none tracking-wider text-accent-foreground">
                      {format(new Date(event.start_time), "d")}
                    </span>
                  </div>
                </figure>

                <div className="flex flex-col">
                  <span className="font-semibold text-accent-foreground">
                    {format(new Date(event.start_time), "EEEE, MMMM do")}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(event.start_time), "h:mm a")} -{" "}
                    {format(new Date(event.end_time), "h:mm a")}
                  </span>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-accent-foreground">
                Preferential routes
              </h2>

              <div className="flex flex-col gap-2">
                {event.routes.map(({ route, arrival, departure }) => (
                  <div className="flex flex-col gap-0.5 rounded-md border px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-accent-foreground">
                        {departure}
                      </span>
                      <PiArrowRightStroke className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-semibold text-accent-foreground">
                        {arrival}
                      </span>
                    </div>
                    <pre className="font-mono text-xs text-muted-foreground">
                      {route}
                    </pre>
                  </div>
                ))}
              </div>

              {event.routes.length === 0 ? (
                <span className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  No preferential routes available.
                </span>
              ) : (
                <div className="mt-4 flex flex-col gap-2 rounded-sm border border-dashed border-accent bg-muted/25 p-3">
                  <span className="text-sm font-semibold text-accent-foreground">
                    Important
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    Some events require participants to follow the routes
                    provided by the event organizers. Check the event details
                    for more information.
                  </span>
                </div>
              )}
            </section>
          </aside>
        </div>

        <section className="flex flex-col gap-8">
          <h2 className="text-xl font-semibold text-accent-foreground">
            Related events
          </h2>

          <div className="flex flex-wrap gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </section>
      </div>
    </div>
  );
}
