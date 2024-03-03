import { Badge } from "@/components/ui/badge";
import { getScopedI18n } from "@/locales/server";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface MarketingAlertTopbarProps {}

export async function AlertTopbar({}: MarketingAlertTopbarProps) {
  const t = await getScopedI18n("landing.alert");

  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded-md bg-secondary p-2 text-center text-sm sm:flex-row sm:rounded-full">
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Badge>{t("new")}</Badge>
        <h5 className="text-secondary-foreground">{t("title")}</h5>
      </div>

      <Link
        href="#"
        className="group flex items-center gap-0.5 px-2.5 text-muted-foreground transition-colors hover:text-secondary-foreground"
      >
        <span>{t("link")}</span>
        <ChevronRightIcon className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
      </Link>
    </div>
  );
}
