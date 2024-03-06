"use client";

import { buttonVariants } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

interface GetStartedButtonProps {}

export function GetStartedButton({}: GetStartedButtonProps) {
  const t = useScopedI18n("onboarding.welcome");

  return (
    <Link
      href="/onboarding/integrations"
      className={buttonVariants({
        size: "lg",
        className: "mx-auto w-fit",
      })}
    >
      <SparklesIcon className="mr-2 h-4 w-4" />
      {t("getStarted")}
    </Link>
  );
}
