"use client"; // Error components must be Client Components

import { PiServerExclamationMarkDuoSolid } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

export default function AirportErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.warn(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-0.5">
        <PiServerExclamationMarkDuoSolid className="mb-6 h-8 w-8 text-destructive" />
        <h1 className="text-3xl font-bold text-foreground">
          Ohh noo... Something went wrong
        </h1>
        <span className="text-sm text-muted-foreground">
          We are sorry for the inconvenience, please try again later
        </span>
      </header>

      <Separator />

      <section className="flex flex-col gap-3">
        <header className="flex flex-col">
          <h3 className="text-base font-medium text-secondary-foreground">
            System logs
          </h3>
          {/* <span className="text-xs text-muted-foreground">some subtitle</span> */}
        </header>

        {/* <ErrorLogs /> */}
      </section>
    </div>
  );
}
