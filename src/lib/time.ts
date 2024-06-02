import { intervalToDuration, intlFormatDistance } from "date-fns";

export function getRelativeTimeInWords(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const relativeTime = intlFormatDistance(date, new Date());
  return relativeTime;
}

export function getTimeDuration(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const duration = intervalToDuration({
    start: date,
    end: new Date(),
  });

  const parsedDurationHous =
    duration.hours?.toString().padStart(2, "0") || "00";
  const parsedDurationMinutes =
    duration.minutes?.toString().padStart(2, "0") || "00";

  const formattedDuration = `${parsedDurationHous}:${parsedDurationMinutes}`;

  return formattedDuration;
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

export function parseUnixTimestampToZuluTimeString(unixTimestamp: any) {
  return getZuluTimeString(new Date(unixTimestamp * 1000));
}
