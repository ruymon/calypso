import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";

interface PrivacyPageProps {
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Privacy",
  description: `Read the $${siteConfig.name} Privacy Policy.`,
};

export default async function PrivacyPage({
  params: { locale },
}: PrivacyPageProps) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("legal.privacy");

  return (
    <article className="prose mx-auto py-8 dark:prose-invert">
      <h1>{t("title")}</h1>
      <p>{t("paragraph1")}</p>
      <p>
        {t("paragraph2")}{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>
      <p>{t("paragraph3")}</p>

      <h2>{t("topic1.title")}</h2>
      <p>{t("topic1.content")}</p>

      <h2>{t("topic2.title")}</h2>
      <p>{t("topic2.content")}</p>

      <h2>{t("topic3.title")}</h2>

      <ul>
        <li>{t("topic3.list1")}</li>
        <li>{t("topic3.list2")}</li>
        <li>{t("topic3.list3")}</li>
      </ul>

      <h2>{t("topic4.title")}</h2>
      <p>{t("topic4.content")}</p>

      <h2>{t("topic5.title")}</h2>
      <p>{t("topic5.content")}</p>

      <h2>{t("topic6.title")}</h2>
      <p>{t("topic6.content")}</p>
      <p>{t("topic6.content2")}</p>
      <p>{t("topic6.content3")}</p>

      <h2>{t("topic7.title")}</h2>
      <p>{t("topic7.content")}</p>
      <p>{t("topic7.content2")}</p>

      <h2>{t("topic8.title")}</h2>
      <p>{t("topic8.content")}</p>

      <h2>{t("topic9.title")}</h2>
      <p>{t("topic9.content")}</p>
      <ul>
        <li>{t("topic9.list1")}</li>
        <li>{t("topic9.list2")}</li>
        <li>{t("topic9.list3")}</li>
      </ul>
      <p>
        {t("topic9.content2")}{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <h2>{t("topic10.title")}</h2>
      <p>{t("topic10.content")}</p>
      <p>{t("topic10.content2")}</p>
      <p>{t("topic10.content3")}</p>

      <h2>{t("topic11.title")}</h2>
      <p>{t("topic11.content")}</p>

      <h2>{t("topic12.title")}</h2>
      <p>{t("topic12.content")}</p>
      <ul>
        <li>{t("topic12.list1")}</li>
        <li>{t("topic12.list2")}</li>
        <li>{t("topic12.list3")}</li>
        <li>{t("topic12.list4")}</li>
        <li>{t("topic12.list5")}</li>
        <li>{t("topic12.list6")}</li>
      </ul>
      <p>
        {t("topic12.content2")}{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <h2>{t("topic13.title")}</h2>
      <p>{t("topic13.content")}</p>
      <p>{t("topic13.content2")}</p>

      <h2>{t("topic14.title")}</h2>
      <p>{t("topic14.content")}</p>

      <h2>{t("topic15.title")}</h2>
      <p>
        {t("topic15.content")}{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <p>{t("lastModified")} 27/01/2024</p>
    </article>
  );
}
