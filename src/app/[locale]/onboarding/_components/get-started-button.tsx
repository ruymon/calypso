"use client";

import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface GetStartedButtonProps {};

export function GetStartedButton({}: GetStartedButtonProps) {
  const router = useRouter();

  function handleStartOnboardingFlow() {
    router.push("/onboarding/integrations")
  }
  return (
    <Button className="w-fit mx-auto font-semibold" size="lg" onClick={handleStartOnboardingFlow}>
    <SparklesIcon className="w-4 h-4 mr-2"/>
    Lets get started
  </Button>
  );
};
