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
import { redirectToVatsimAuth } from "@/lib/integrations/vatsim";
import { useScopedI18n } from "@/locales/client";

interface VatsimIntegrationCardProps {}

export function VatsimIntegrationCard({}: VatsimIntegrationCardProps) {
  const t = useScopedI18n("integrations");

  function handleConnect() {
    // toast.error(t("vatsim.cannotChange"));
    redirectToVatsimAuth();
  }

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src="https://static.skyscope.app/networks/vatsim.png" />
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
        <CardTitle className="text-lg font-semibold">Vatsim</CardTitle>
        <CardDescription className="text-muted-foreground">
          {t("vatsim.description")}
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-1 p-0">
        <PiAlertTriangleStroke className="h-3 w-3" />
        <span>{t("vatsim.cannotChange")}</span>
      </CardFooter>
    </Card>
  );
}
