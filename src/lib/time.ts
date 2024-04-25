import { intlFormatDistance } from "date-fns";

export function getRelativeTime(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const relativeTime = intlFormatDistance(date, new Date());
  return relativeTime;
}

export function getZuluTimeString(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // SHould return a string like 2200z
  return date.toISOString().slice(11, 16).replace(":", "") + "z";
}
