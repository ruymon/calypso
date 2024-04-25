"use client";

import { AircraftImage } from "@/lib/flights";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AircraftCardImageProps {
  data: AircraftImage | null;
  className?: string;
}

export function AircraftCardImage({ data, className }: AircraftCardImageProps) {
  if (!data) {
    return null;
  }

  const src = data.photos[0]?.thumbnail_large.src;

  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      className={cn(
        "pointer-events-none rounded-lg object-cover opacity-0 transition-opacity duration-1000 ease-in-out",
        className,
      )}
      alt="Aircraft image"
      fill
      draggable={false}
      onLoad={(e) => {
        e.currentTarget.classList.remove("opacity-0");
        e.currentTarget.classList.add("opacity-100");
      }}
    />
  );
}
