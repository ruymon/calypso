"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { INTEGRATION_PROVIDERS } from "@/config/integrations";
import { useScopedI18n } from "@/locales/client";
import { IntegrationProvider } from "@/types/integrations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IntegrationFinishRedirectProps {
  provider: IntegrationProvider;
}

const REDIRECT_TIMEOUT = 3000;

export function IntegrationFinishRedirect({
  provider,
}: IntegrationFinishRedirectProps) {
  const router = useRouter();
  const t = useScopedI18n("integrations.comum.callback");

  const providerDetails = INTEGRATION_PROVIDERS[provider];

  useEffect(() => {
    setTimeout(() => {
      router.push("/settings/integrations");
    }, REDIRECT_TIMEOUT);
  }, []);

  return (
    <header className="flex w-full flex-col gap-8 py-4">
      <Avatar className="rounded-md">
        <AvatarImage src={providerDetails.logoUrl} />
        <AvatarFallback />
      </Avatar>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-secondary-foreground">
          {/* @ts-expect-error */}
          {t("title", { provider: providerDetails.styledName ?? provider })}
        </h1>
        <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
      </div>
    </header>
  );
}
