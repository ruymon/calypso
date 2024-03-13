import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import { Aircraft } from "@/types/live-flights";
import Image from "next/image";

interface AircraftCardProps {
  className?: string;
  data?: Aircraft;
}

interface AircraftImage {
  photos: Array<{
    id: string;
    thumbnail: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    thumbnail_large: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    link: string;
    photographer: string;
  }>;
}

async function getAircraftImage(
  registration?: string,
): Promise<AircraftImage["photos"][0] | null> {
  if (!registration) {
    return null;
  }

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {},
  };

  const url = `https://api.planespotters.net/pub/photos/reg/${registration}`;

  const result = await fetch(url, options);

  if (result.status !== 200) {
    console.error("Error fetching aircraft image", result);
    return null;
  }

  const data = await result.json();

  if (data.photos.length === 0) {
    return null;
  }

  return data.photos[0];
}

export async function AircraftCard({ className, data }: AircraftCardProps) {
  const image = await getAircraftImage(data?.registration);

  const t = await getScopedI18n("app.flightDetails.aircraft");
  return (
    // <Card className={cn("flex justify-between p-4", className)}>
    //   <CardHeader className="w-1/2 gap-0.5 p-0">
    //     <CardTitle>
    //       {data?.icao || "TBN"} / {data?.wakeTurbulence || "TBN"}
    //     </CardTitle>
    //     <CardDescription>
    //       {data?.equipment || "TBN"} / {data?.transponderTypes}
    //     </CardDescription>

    //     <div className="mt-4 flex flex-col gap-0.5">
    //       <span className="text-sm text-accent-foreground">
    //         {data?.registration || "TBN"}
    //       </span>
    //       <span className="text-xs text-muted-foreground">
    //         {t("registration")}
    //       </span>
    //     </div>
    //   </CardHeader>

    //   <CardContent className="h-fit p-0">
    //     {image && (
    //       <Link href={image.link} target="_blank">
    //         <Image
    //           src={image.thumbnail.src}
    //           className="h-full w-full rounded-sm object-cover"
    //           alt="Aircraft image"
    //           width={image.thumbnail.size.width}
    //           height={image.thumbnail.size.height}
    //         />
    //         <figcaption className="flex -translate-y-full items-center rounded-b-sm bg-background/90 px-2 py-1 text-2xs text-muted-foreground backdrop-blur-sm">
    //           &copy; {image.photographer}
    //         </figcaption>
    //       </Link>
    //     )}
    //   </CardContent>
    // </Card>

    <Card className={cn("relative flex overflow-clip", className)}>
      <CardHeader className="z-10 w-full gap-0.5 bg-gradient-to-r from-background via-background/90 to-background/5 p-4">
        <CardTitle>
          {data?.icao || "TBN"} / {data?.wakeTurbulence || "TBN"}
        </CardTitle>
        <CardDescription>
          {data?.equipment || "TBN"} / {data?.transponderTypes}
        </CardDescription>

        <div className="mt-4 flex flex-col gap-0.5">
          <span className="text-sm text-accent-foreground">
            {data?.registration || "TBN"}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("registration")}
          </span>
        </div>
      </CardHeader>
      {image && (
        <Image
          src={image.thumbnail_large.src}
          className="z-0 object-cover"
          alt="Aircraft image"
          fill
        />
      )}
    </Card>
  );
}
