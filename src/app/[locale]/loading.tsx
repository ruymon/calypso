import { LogoIcon } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import { LightbulbIcon } from "lucide-react";

export default async function AppLoadingPage() {
  const t = await getScopedI18n("loading");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 bg-background px-4 py-8">
      <header className="flex animate-pulse flex-col items-center justify-center gap-8">
        <LogoIcon size="xl" />

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">{t("title")}</h3>
          <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
        </div>
      </header>

      <Card className="w-full max-w-64 rounded-md">
        <CardHeader className="flex-row items-center p-2 pb-1">
          <LightbulbIcon className="h-4 w-4" />
          <CardTitle className="text-sm font-semibold">
            {t("tipOfTheDay")}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-2 pt-0">
          <CardDescription className="text-xs leading-relaxed">
            {t("tipOfTheDay.content")}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
