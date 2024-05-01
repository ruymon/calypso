"use client";

import {
  PiAlertTriangleStroke,
  PiLinkChainSlantDuoStroke,
} from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirectToNavigraphAuth } from "@/lib/integrations/navigraph";
import { useScopedI18n } from "@/locales/client";

interface NavigraphIntegrationCardProps {}

export function NavigraphIntegrationCard({}: NavigraphIntegrationCardProps) {
  const t = useScopedI18n("integrations");

  function handleConnect() {
    //toast.error(t("ivao.cannotChange"));

    redirectToNavigraphAuth();
  }

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1502197605127839744/wS9ttQ02_400x400.jpg" />
          <AvatarFallback />
        </Avatar>

        <Button
          variant="secondary"
          size="sm"
          className="gap-1"
          onClick={handleConnect}
        >
          <PiLinkChainSlantDuoStroke className="w-4" />
          <span className="text-xs font-medium">{t("comum.connect")}</span>
        </Button>
      </CardContent>

      <CardHeader className="p-0">
        <CardTitle className="text-lg font-semibold">Navigraph</CardTitle>
        <CardDescription className="text-muted-foreground">
          {t("ivao.description")}
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-2 p-0">
        <PiAlertTriangleStroke className="h-3 w-3 shrink-0" />
        <span>{t("ivao.cannotChange")}</span>
      </CardFooter>
    </Card>
  );
}
