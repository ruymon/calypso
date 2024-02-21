import { getScopedI18n } from "@/locales/server";

interface AuthDisabledPageProps {}

export default async function AuthDisabledPage({}: AuthDisabledPageProps) {
  const t = await getScopedI18n("auth.disabled");

  return (
    <header className="mb-6 flex flex-col">
      <h1 className="text-lg font-bold text-secondary-foreground">
        {t("title")}
      </h1>
      <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
    </header>
  );
}
