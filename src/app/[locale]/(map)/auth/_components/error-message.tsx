"use client";

import { PiLockCloseDuoSolid } from "@/components/icons";
import { useSearchParams } from "next/navigation";

interface ErrorMessageProps {}

const ERROR_MESSAGE = {
  unauthorized: "You are not authorized to access this page!",
};

export function ErrorMessage({}: ErrorMessageProps) {
  const searchParams = useSearchParams();
  const message =
    ERROR_MESSAGE[searchParams.get("error") as keyof typeof ERROR_MESSAGE];

  if (!message) return null;

  return (
    <div className="fixed top-6 flex items-center gap-3 rounded-md border border-destructive bg-destructive/10 p-3">
      <PiLockCloseDuoSolid className="h-5 w-5 text-destructive" />

      <div className="flex flex-col">
        <span className="text-sm font-medium text-secondary-foreground">
          Oh no...
        </span>
        <span className="text-xs text-muted-foreground">{message}</span>
      </div>
    </div>
  );
}
