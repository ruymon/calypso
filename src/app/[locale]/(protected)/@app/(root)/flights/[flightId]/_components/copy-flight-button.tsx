"use client";

import { Button } from "@/components/ui/button";

interface CopyFlightPlanButtonProps {}

export function CopyFlightPlanButton({}: CopyFlightPlanButtonProps) {
  function handleClick() {
    throw new Error("Sentry Frontend Error");
  }

  return <Button onClick={handleClick}>Copy Flight Plan</Button>;
}
