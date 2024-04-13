import {
  PiAlertTriangleStroke,
  PiEnvelopeDefaultDuoSolid,
  PiUserDefaultDuoSolid,
} from "@/components/icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProfile } from "@/lib/auth";
import { getScopedI18n } from "@/locales/server";
import { notFound } from "next/navigation";
import { DangerCollapsible } from "./_components/danger-collapsible";

interface SettingsProfilePageProps {}

export default async function SettingsProfilePage({}: SettingsProfilePageProps) {
  const userProfile = await getProfile();

  const t = await getScopedI18n("settings.profile");
  if (!userProfile) {
    return notFound();
  }

  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col gap-8">
      <header className="flex flex-col py-4">
        <h2 className="text-2xl font-bold text-foreground">{t("title")}</h2>
        <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
      </header>

      <section className="flex flex-col gap-4">
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <PiEnvelopeDefaultDuoSolid className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">{t("emailCard.title")}</h3>
          </CardHeader>
          <Separator />

          <CardContent className="flex flex-col gap-4 pt-4">
            <span className="font-medium text-accent-foreground">
              {userProfile.email}
            </span>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <PiAlertTriangleStroke className="h-3 w-3" />
              <span>{t("emailCard.cannotChange")}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <PiUserDefaultDuoSolid className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">{t("nameCard.title")}</h3>
          </CardHeader>
          <Separator />

          <CardContent className="flex flex-col gap-4 pt-4">
            {userProfile.name ? (
              <span className="font-medium text-accent-foreground">
                {userProfile.name}
              </span>
            ) : (
              <span className="font-medium italic text-muted-foreground">
                {t("nameCard.emptyState")}
              </span>
            )}

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <PiAlertTriangleStroke className="h-3 w-3" />
              <span>{t("nameCard.cannotChange")}</span>
            </div>
          </CardContent>
        </Card>

        <DangerCollapsible />
      </section>
    </main>
  );
}
