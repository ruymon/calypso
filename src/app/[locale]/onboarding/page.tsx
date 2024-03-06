import { getScopedI18n } from "@/locales/server";
import Balancer from "react-wrap-balancer";
import { GetStartedButton } from "./_components/get-started-button";

interface OnboardingWelcomePageProps {}
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function OnboardingWelcomePage({}: OnboardingWelcomePageProps) {
  const t = await getScopedI18n("onboarding.welcome");

  return (
    <>
      <header className="flex flex-col items-center gap-1 text-center">
        <span className="mb-2 w-fit bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text px-2 font-handwriting text-xl font-medium text-transparent">
          {t("hat")}
        </span>
        <Balancer as="h1" className="text-6xl font-extrabold text-foreground">
          {t("title")}
        </Balancer>
        <Balancer as="span" className="text-muted-foreground">
          {t("subtitle")}
        </Balancer>
      </header>

      <GetStartedButton />
    </>
  );
}
