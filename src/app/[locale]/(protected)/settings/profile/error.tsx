"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  function handleRetry() {
    reset();
    toast.info("Retrying...");
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-8">
      <header className="flex flex-col">
        <h2 className="text-2xl font-bold text-foreground">
          Something went wrong.
        </h2>
        <span className="text-sm text-muted-foreground">
          An error occurred while loading the page. Try and refresh the page.
        </span>
      </header>
      <Button onClick={handleRetry}>Try again</Button>
    </div>
  );
}
