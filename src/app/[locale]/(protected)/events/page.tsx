import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftToLine, CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventsPageProps {}

export default function EventsPage({}: EventsPageProps) {
  return (
    <main className="z-10 flex h-screen max-w-sm flex-1 flex-col gap-12 overflow-y-auto bg-background p-6">
      <header className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Upcoming events</h2>
          <span className="text-sm text-muted-foreground">
            It is a long established fact that a reader
          </span>
        </div>

        <Link
          href="/app"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <ArrowLeftToLine className="h-4 w-4" />
        </Link>
      </header>

      <section className="flex flex-col gap-4">
        <Link href="/app/events/1">
          <Card className="overflow-clip">
            <Image
              src="https://media.discordapp.net/attachments/751056678732038254/1178670124765544551/Lapland_1.png?ex=65eef598&is=65dc8098&hm=636d16e9f3c48df6a7d9e3b291829e203bd15fbabeacbb26035b85e5568d975a&=&format=webp&quality=lossless&width=494&height=278"
              height={485}
              width={863}
              alt="Event banner image"
              className="max-h-32 w-full rounded-t-lg object-cover"
            />

            <CardHeader>
              <CardTitle>Lapland x-mas fly-in</CardTitle>
              <CardDescription className="line-clamp-2">
                Fly into the enchanting Lapland airports and experience the
                thrill of North-Wind, Snow, and the mesmerizing Northern Lights!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <CalendarIcon className="h-4 w-4 text-secondary-foreground" />
                <span className="text-sm text-muted-foreground">
                  Dec 24, 2021
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium">
                <CalendarIcon className="h-4 w-4 text-secondary-foreground" />
                <span className="text-sm text-muted-foreground">
                  Dec 24, 2021
                </span>
              </div>
            </CardContent>
            <CardFooter className="mt-2">
              <div className="flex items-center gap-2">
                <Badge>HQ Event</Badge>
                <Badge>Fly-in</Badge>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </section>
    </main>
  );
}
