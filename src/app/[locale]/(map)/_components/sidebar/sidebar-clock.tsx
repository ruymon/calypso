"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

function formatUtcClock(date: Date) {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
}

export function SidebarClock() {
  const [utcTime, setUtcTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  // This is a workaround to avoid the initial flicker
  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setUtcTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return <Skeleton className="h-8" />;
  }

  const formattedUtcTime = formatUtcClock(utcTime);

  return (
    <footer className="flex h-8 flex-col items-center text-xs">
      <time>{formattedUtcTime}</time>
      <span className="text-muted-foreground">ZULU</span>
    </footer>
  );
}
