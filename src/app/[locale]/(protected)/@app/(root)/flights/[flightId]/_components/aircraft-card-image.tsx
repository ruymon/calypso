"use client";

import { AircraftImage } from "@/lib/flights";
import Image from "next/image";

interface AircraftCardImageProps {
  data: AircraftImage | null;
}

export function AircraftCardImage({ data }: AircraftCardImageProps) {
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
      className="pointer-events-none rounded-lg object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
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
