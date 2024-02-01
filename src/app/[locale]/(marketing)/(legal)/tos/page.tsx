import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'ToS',
  description: `Read the ${siteConfig.name} Terms of Service.`,
}

interface TosPageProps { };

export default async function TosPage({ }: TosPageProps) {
  const t = await getScopedI18n('legal.terms');

  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>{t('title')}</h1>

      <h2>{t('topic1.title')}</h2>
      <p>{t('topic1.content')}</p>

      <h2>{t('topic2.title')}</h2>
      <p>{t('topic2.content')}</p>
      <ul>
        <li>{t('topic2.list1')}</li>
        <li>{t('topic2.list2')}</li>
        <li>{t('topic2.list3')}</li>
        <li>{t('topic2.list4')}</li>
        <li>{t('topic2.list5')}</li>
      </ul>
      <p>{t('topic2.content2')}</p>

      <h2>{t('topic3.title')}</h2>
      <p>{t('topic3.content')}</p>

      <h2>{t('topic4.title')}</h2>
      <p>{t('topic4.content')}</p>

      <h2>{t('topic5.title')}</h2>
      <p>{t('topic5.content')}</p>

      <h2>{t('topic6.title')}</h2>
      <p>{t('topic6.content')}</p>

      <h2>{t('topic7.title')}</h2>
      <p>{t('topic7.content')}</p>

      <h2>{t('topic8.title')}</h2>
      <p><Link href="/privacy">{t('topic8.content')}</Link></p>

      <h2>{t('topic9.title')}</h2>
      <p>{t('topic9.content')}</p>
    </div>
  );
};
