import { PiSparkleAi01DuoSolid } from "@/components/icons";
import { NetworkIcon } from "@/components/network-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface FeaturedEventCardProps {}

export function FeaturedEventCard({}: FeaturedEventCardProps) {
  return (
    <Link href="/events/11312">
      <Card className="group relative flex h-96 overflow-clip rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event banner"
          className="object-cover transition-all duration-500 group-hover:scale-105"
          fill
        />

        <div className="flex h-full flex-1 flex-col justify-end gap-6 bg-gradient-to-b from-background/25 via-background/80 via-30% to-background p-8 backdrop-blur-[0px] dark:via-50%">
          <div className="flex flex-col gap-6">
            <header className="flex max-w-2xl flex-col gap-0.5">
              <Badge variant="success-glass" className="mb-2">
                <PiSparkleAi01DuoSolid className="mr-1 h-3 w-3" />
                Featured Event
              </Badge>

              <CardTitle className="text-balance text-5xl font-extrabold">
                Discover Dubai
              </CardTitle>
              <CardDescription className="text-balance text-lg text-accent-foreground">
                Embark on an epic journey through the wilds of the Amazon
                rainforest!
              </CardDescription>
            </header>

            <div className="flex h-full gap-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Date</span>
                <span className="font-semibold text-accent-foreground">
                  14th May
                </span>
              </div>

              <Separator orientation="vertical" className="bg-accent" />

              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Network</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-accent-foreground">
                    Vatsim
                  </span>
                  <NetworkIcon network="vatsim" className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
