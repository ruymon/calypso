"use client";

import { getAirlineTailImageUrl } from "@/lib/images";
import Image from "next/image";

interface BlurBackdropProps {
  callsign?: string;
}

export function BlurBackdrop({ callsign }: BlurBackdropProps) {
  if (!callsign) {
    return null;
  }

  const imageSrc = getAirlineTailImageUrl(callsign);

  return (
    <Image
      src={imageSrc}
      fill
      className="pointer-events-none absolute inset-0 top-0 -z-10 max-h-64 scale-y-[-1] opacity-0 blur-[360px] saturate-150 transition-opacity duration-1000 ease-in-out"
      alt="Illustration"
      draggable={false}
      onLoad={(e) => {
        e.currentTarget.classList.remove("opacity-0");
        e.currentTarget.classList.add("opacity-100");
      }}
    />
  );
}
