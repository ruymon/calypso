import {
  PiAlertTriangleStroke,
  PiLinkChainSlantDuoStroke,
} from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";
import { IntegrationCardProps } from "../page";
import { ActiveIntegrationBadgeTooltip } from "./active-integration-badge-tooltip";

export async function IntegrationCard(props: IntegrationCardProps) {
  const t = await getScopedI18n("integrations");

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src={props.logoUrl} />
          <AvatarFallback />
        </Avatar>
        <Link
          className={cn(
            buttonVariants({
              size: "sm",
              variant: "secondary",
              className: "gap-1",
            }),
          )}
          href={props.integrationUrl}
          title={`${t("comum.connect")} ${props.provider}`}
        >
          <PiLinkChainSlantDuoStroke className="w-4" />
          <span className="text-xs font-medium">
            {props.integratedAccount
              ? t("comum.changeAccount")
              : t("comum.connect")}
          </span>
        </Link>
      </CardContent>

      <CardHeader className="p-0">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-semibold">{props.title}</CardTitle>
          {props.integratedAccount && (
            <ActiveIntegrationBadgeTooltip
              integrationData={props.integratedAccount}
            />
          )}
        </div>
        <CardDescription className="text-muted-foreground">
          {props.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-2 p-0">
        <PiAlertTriangleStroke className="h-3 w-3 shrink-0" />
        <span>{t("comum.unstable")}</span>
      </CardFooter>
    </Card>
  );
}
