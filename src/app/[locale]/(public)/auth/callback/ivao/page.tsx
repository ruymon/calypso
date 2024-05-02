import {
  exchangeTemporaryCodeForIvaoToken,
  storeIntegrationCredentials,
} from "@/lib/integrations/ivao";
import { getScopedI18n } from "@/locales/server";
import { redirect } from "next/navigation";

interface IvaoIntegrationCallbackPageProps {
  searchParams: {
    state: string;
    code: string;
  };
}

export default async function IvaoIntegrationCallbackPage({
  searchParams: { state, code },
}: IvaoIntegrationCallbackPageProps) {
  const t = await getScopedI18n("integrations.ivao.callback");
  const ivaoCredentials = await exchangeTemporaryCodeForIvaoToken(code);
  await storeIntegrationCredentials(ivaoCredentials);

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
