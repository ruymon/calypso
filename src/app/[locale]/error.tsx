"use client"; // Error components must be Client Components

import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useEffect } from "react";
import { SupportCard } from "./(public)/auth/_components/support-card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-8 px-4 py-8">
      <LogoIcon variant="muted" />

      <main className="mx-auto flex w-full max-w-56 flex-col gap-5">
        <header className="mb-6 flex flex-col">
          <h1 className="text-lg font-bold text-secondary-foreground">
            Oops... Something went wrong.
          </h1>
          <span className="text-sm text-muted-foreground">
            An unexpected error occurred. If the problem persists, please
            contact support.
          </span>
        </header>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <SupportCard />
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </footer>
    </div>
  );
}
