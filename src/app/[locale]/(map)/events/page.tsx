import { PiFilterHorizontalStroke } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EventCard } from "./_components/event-card";
import { FeaturedEventCard } from "./_components/featured-event-card";

interface EventsCataloguePageProps {}

export default function EventsCataloguePage({}: EventsCataloguePageProps) {
  return (
    <div className="mx-auto flex max-w-5xl flex-1 flex-col gap-12 px-6 py-8">
      <header className="flex max-w-xl flex-col">
        <h1 className="text-balance text-4xl font-bold text-foreground">
          Discover events
        </h1>
        <span className="text-balance text-base text-muted-foreground">
          Where will your wings take you today?
        </span>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-accent-foreground">
          Featured events
        </h2>
        <FeaturedEventCard />
      </section>

      <section className="pointer-events-none sticky -top-6 flex flex-col">
        <h2 className="pointer-events-auto flex h-6 items-center text-xl font-semibold leading-none text-accent-foreground">
          Filter events
        </h2>

        <div className="flex bg-gradient-to-b from-background via-background/95 to-background/5 pb-12 pt-4">
          <Input
            placeholder="Search for an event by name or location"
            className="pointer-events-auto h-12 rounded-r-none border-transparent bg-secondary/40 px-4 backdrop-blur-md"
          />

          <Button
            variant="secondary"
            className="pointer-events-auto h-12 w-12 rounded-l-none"
          >
            <PiFilterHorizontalStroke className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-accent-foreground">
          Upcoming events
        </h2>

        <div className="flex flex-wrap gap-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-accent-foreground">
          Just now
        </h2>

        <div className="flex flex-wrap gap-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-accent-foreground">
          Trending in IVAO
        </h2>

        <div className="flex flex-wrap gap-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-accent-foreground">
          Trending in Vatsim
        </h2>

        <div className="flex flex-wrap gap-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </div>
  );
}
