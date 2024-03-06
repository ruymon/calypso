import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

interface CallToActionSectionProps {}

export async function CallToActionSection({}: CallToActionSectionProps) {
  const t = await getScopedI18n("landing.callToAction");

  return (
    <Card className="my-48 bg-foreground p-4">
      <CardHeader className="items-center gap-2 text-center">
        <span className="mb-3 rounded bg-violet-400 px-2 py-0 font-mono text-sm font-black uppercase text-black">
          {t("hat")}
        </span>

        <CardTitle className="w-3/4 text-5xl font-extrabold text-background">
          {t("title")}
        </CardTitle>
        <CardDescription className="w-1/2 text-lg font-medium text-muted">
          {t("subtitle")}
        </CardDescription>

        <Link
          href={siteConfig.links.discord}
          rel="noopener noreferrer"
          target="_blank"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "mt-6",
          })}
        >
          {t("button")}
        </Link>
      </CardHeader>
    </Card>
  );
}
