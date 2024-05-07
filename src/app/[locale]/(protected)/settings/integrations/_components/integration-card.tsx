"use client";

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
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

interface IntegrationCardProps {
  provider: string;
  logoUrl: string;
  title: string;
  description: string;
  integrationUrl: string;
}

export function IntegrationCard({
  provider,
  logoUrl,
  title,
  description,
  integrationUrl,
}: IntegrationCardProps) {
  const t = useScopedI18n("integrations");

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src={logoUrl} />
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
          href={integrationUrl}
          title={`${t("comum.connect")} ${provider}`}
        >
          <PiLinkChainSlantDuoStroke className="w-4" />
          <span className="text-xs font-medium">{t("comum.connect")}</span>
        </Link>
      </CardContent>

      <CardHeader className="p-0">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-2 p-0">
        <PiAlertTriangleStroke className="h-3 w-3 shrink-0" />
        <span>{t("comum.unstable")}</span>
      </CardFooter>
    </Card>
  );
}
