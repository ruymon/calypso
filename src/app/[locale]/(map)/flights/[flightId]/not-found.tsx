import { PiServerExclamationMarkDuoSolid } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { getScopedI18n } from "@/locales/server";
import { ErrorLogs } from "./_components/error-logs";

export default async function FlightNotFoundPage() {
  const t = await getScopedI18n("flightDetails.notFound");

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-0.5">
        <PiServerExclamationMarkDuoSolid className="mb-6 h-8 w-8 text-destructive" />
        <h1 className="text-3xl font-bold text-foreground">{t("title")}</h1>
        <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
      </header>

      <section className="flex flex-col gap-5">
        <header className="flex flex-col">
          <h2 className="text-lg font-semibold text-secondary-foreground">
            {t("troubleshooting.title")}
          </h2>
          <span className="text-xs text-muted-foreground">
            {t("troubleshooting.subtitle")}
          </span>
        </header>

        <ul className="flex list-disc flex-col gap-3 pl-3 text-sm text-accent-foreground">
          <li>{t("troubleshooting.steps.verifyFlightExists")}</li>
          <li>{t("troubleshooting.steps.refresh")}</li>
          <li>{t("troubleshooting.steps.checkInternetConnection")}</li>
          <li>{t("troubleshooting.steps.checkLoginStatus")}</li>
        </ul>
      </section>

      <Separator />

      <section className="flex flex-col gap-3">
        <header className="flex flex-col">
          <h3 className="text-base font-medium text-secondary-foreground">
            {t("systemLogs.title")}
          </h3>
          <span className="text-xs text-muted-foreground">
            {t("systemLogs.subtitle")}
          </span>
        </header>

        <ErrorLogs />
      </section>
    </div>
  );
}
