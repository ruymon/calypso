import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNameInitials(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return initials;
}

export function parseAltitudeToFlightLevel(altitude: number) {
  return (
    "F" +
    Math.round(altitude / 100)
      .toString()
      .padStart(3, "0")
  );
}
