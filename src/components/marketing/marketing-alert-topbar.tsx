import { getScopedI18n } from "@/locales/server";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface MarketingAlertTopbarProps { };

export async function MarketingAlertTopbar({ }: MarketingAlertTopbarProps) {
  const t = await getScopedI18n('landing.alert');

  return (
    <div className="bg-secondary rounded-md sm:rounded-full p-2 w-full flex flex-col sm:flex-row items-center justify-between text-sm text-center gap-2">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Badge variant="purple" radius="full">{t('new')}</Badge>
        <h5 className="text-secondary-foreground">{t('title')}</h5>
      </div>

      <Link href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors px-2.5 gap-0.5 flex items-center group">
        <span>{t('link')}</span>
        <ChevronRightIcon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
      </Link>
    </div>
  );
};
