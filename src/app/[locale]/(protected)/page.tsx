import { setStaticParamsLocale } from "next-international/server";

interface AppHomePageProps {
  params: {
    locale: string;
  };
}
export default function AppHomePage({ params: { locale } }: AppHomePageProps) {
  setStaticParamsLocale(locale);

  return null;
}
