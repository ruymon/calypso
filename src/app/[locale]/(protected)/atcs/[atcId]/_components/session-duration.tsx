"use client";

import { getTimeDuration } from "@/lib/time";
import { useEffect, useState } from "react";

interface SessionDurationProps {
  onlineAt: string;
}

const ONE_MINUTE = 60 * 1000;

export function SessionDuration({ onlineAt }: SessionDurationProps) {
  const [duration, setDuration] = useState<string>(getTimeDuration(onlineAt));

  useEffect(() => {
    const updateDuration = () => {
      setDuration(getTimeDuration(onlineAt));
    };

    updateDuration();

    const interval = setInterval(updateDuration, ONE_MINUTE);

    return () => clearInterval(interval);
  }, [onlineAt]);

  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-accent-foreground">{duration}</span>
      <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
        online time
      </span>
    </div>
  );
}
