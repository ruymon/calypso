import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import { GitBranchIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import Balancer from "react-wrap-balancer";

interface FeaturesSectionProps {}
type FeatureStatuses = 0 | 1 | 2;

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  status: FeatureStatuses;
}

export async function FeaturesSection({}: FeaturesSectionProps) {
  const t = await getScopedI18n("landing.features");

  const features: Feature[] = [
    {
      id: `${t("idPrefix")}-01`,
      title: t("feature1.title"),
      subtitle: t("feature1.subtitle"),
      status: 0,
    },
    {
      id: `${t("idPrefix")}-02`,
      title: t("feature2.title"),
      subtitle: t("feature2.subtitle"),
      status: 1,
    },
    {
      id: `${t("idPrefix")}-03`,
      title: t("feature3.title"),
      subtitle: t("feature3.subtitle"),
      status: 2,
    },
    {
      id: `${t("idPrefix")}-04`,
      title: t("feature4.title"),
      subtitle: t("feature4.subtitle"),
      status: 1,
    },
  ];

  const featureStatuses = {
    0: t("status.planned"),
    1: t("status.inProgress"),
    2: t("status.completed"),
  };

  return (
    <section className="flex justify-between gap-16 py-24">
      <header className="flex flex-col gap-8 text-6xl">
        <Balancer as="h2">
          <span className="block font-bold leading-tight text-muted-foreground">
            {t("hat")}
          </span>
          <span className="font-bold text-secondary-foreground">
            {t("title")}
          </span>
        </Balancer>

        <div className="flex max-w-sm flex-col items-start gap-8">
          <span className="text-lg text-muted-foreground">{t("subtitle")}</span>

          <Link
            href={siteConfig.links.discord}
            rel="noopener noreferrer"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
          >
            {t("button")}
          </Link>
        </div>
      </header>

      <aside className="flex w-full flex-col">
        {features.map((feature, idx) => (
          <Fragment key={feature.id}>
            <Card key={feature.id}>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <figure className="flex items-center gap-2 text-muted-foreground">
                    <GitBranchIcon className="h-3 w-3" />
                    <span className="font-mono text-xs uppercase">
                      {feature.id}
                    </span>
                  </figure>
                  <Badge variant="outline">
                    {featureStatuses[feature.status]}
                  </Badge>
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.subtitle}</CardDescription>
              </CardHeader>
            </Card>

            {idx < features.length - 1 && (
              <Separator orientation="vertical" className="ml-8 h-8" />
            )}
          </Fragment>
        ))}
      </aside>
    </section>
  );
}
