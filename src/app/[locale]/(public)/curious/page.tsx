import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

interface CuriousPageProps {
  params: { locale: string };
}

export default async function CuriousPage({
  params: { locale },
}: CuriousPageProps) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("curious");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-24">
      <h1 className="max-w-xl text-center text-3xl font-black text-foreground md:text-6xl lg:text-7xl">
        {t("title")}
      </h1>

      <h2 className="text-center text-3xl font-black text-foreground md:text-6xl lg:text-7xl">
        ☕ + 🍩
      </h2>
    </main>
  );
}
