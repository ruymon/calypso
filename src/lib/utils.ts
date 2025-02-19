import { EMERGENCY_TRANSPONDER_CODES } from "@/constants/transponder";
import { Network } from "@/types/networks";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNameInitials(name: string) {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return initials;
}

export function parseAltitudeToFlightLevel(altitude: number) {
  return (
    "FL" +
    Math.round(altitude / 100)
      .toString()
      .padStart(3, "0")
  );
}

export function hexToRGBArray(hex?: string): [number, number, number] {
  hex = (hex ? hex : "dddddd").toLowerCase();
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [
        parseInt(result[1]!, 16),
        parseInt(result[2]!, 16),
        parseInt(result[3]!, 16),
      ]
    : [175, 175, 175];
}

export function hexToRGBAArray(
  hex?: string,
  alpha = 255
): [number, number, number, number] {
  const rgb = hexToRGBArray(hex);
  return [...rgb, alpha];
}

export function guaranteeIsUppercase(str: string) {
  return str.toUpperCase();
}

export function convertHeadingToAngle(heading: number) {
  return heading * -1;
}

export function isEmergencyTransponder(code: string) {
  const isEmergency = EMERGENCY_TRANSPONDER_CODES.includes(code);
  return isEmergency;
}

export function guaranteeFirstLetterCapitalizedInEveryWord(str: string) {
  // Normalize the string to lowercase
  str = str.toLowerCase();

  const words = str.split(" ");
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

export function getIvaoProfileUrl(vid: number): string {
  return `https://ivao.aero/Member.aspx?ID=${vid}`;
}

export function getVatsimProfileUrl(cid: number): string {
  return `https://stats.vatsim.net/stats/${cid}`;
}

export function getNetworkMemberProfileUrl(
  id: number | string,
  network: Network
): string {
  if (typeof id === "string") {
    id = Number(id);
  }

  if (network === "ivao") {
    return getIvaoProfileUrl(id);
  }
  return getVatsimProfileUrl(id);
}
