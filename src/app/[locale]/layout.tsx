'use client';

import { I18nProviderClient } from "@/locales/client";

interface LocaleRootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleRootLayout({ children, params: { locale } }: LocaleRootLayoutProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
}