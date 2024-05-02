import {
  exchangeTemporaryCodeForNavigraphToken,
  storeIntegrationCredentials,
} from "@/lib/integrations/navigraph";
import { getScopedI18n } from "@/locales/server";
import { redirect } from "next/navigation";

interface NavigraphIntegrationCallbackPageProps {
  searchParams: {
    state: string;
    code: string;
  };
}

export default async function NavigraphIntegrationCallbackPage({
  searchParams: { state, code },
}: NavigraphIntegrationCallbackPageProps) {
  const t = await getScopedI18n("integrations.navigraph.callback");
  const navigraphCredentials = await exchangeTemporaryCodeForNavigraphToken(
    code,
    state,
  );
  await storeIntegrationCredentials(navigraphCredentials);
  redirect("/settings/integrations");

  return (
    <header className="flex flex-col items-center">
      <h1 className="text-lg font-bold text-secondary-foreground">
        {t("title")}
      </h1>
      <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
    </header>
  );
}
