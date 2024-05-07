import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getScopedI18n } from "@/locales/server";
import { IntegrationCardProps } from "../page";

interface ActiveIntegrationBadgeTooltipProps {
  integrationData: IntegrationCardProps["integratedAccount"];
}

export async function ActiveIntegrationBadgeTooltip({
  integrationData,
}: ActiveIntegrationBadgeTooltipProps) {
  const t = await getScopedI18n("integrations");
  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger>
        <Badge variant="success" className="px-1 text-2xs leading-none">
          {t("comum.connected")}
        </Badge>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="flex flex-col rounded-sm px-2"
        sideOffset={6}
      >
        <span className="text-xs font-semibold">
          {t("integrationDetailsTooltip.title")}
        </span>
        <span className="text-2xs text-muted-foreground">
          {t("integrationDetailsTooltip.accountId")}:
          <span className="ml-1 font-mono">{integrationData}</span>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
