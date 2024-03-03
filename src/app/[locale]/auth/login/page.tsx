import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";
import { JoinButton } from "../_components/join-button";
import { LoginForm } from "../_components/login-form";

export const metadata: Metadata = {
  title: "Login",
};

interface LoginPageProps {
  params: { locale: string };
}

export default async function LoginPage({
  params: { locale },
}: LoginPageProps) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("auth.login");

  return (
    <>
      <header className="mb-6 flex flex-col">
        <h1 className="text-lg font-bold text-secondary-foreground">
          {t("title")}
        </h1>
        <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
      </header>

      <LoginForm />

      <Link
        href="/en/auth/forgot-password"
        className={buttonVariants({
          variant: "link",
          className: "text-xs",
        })}
      >
        {t("forgotPassword")}
      </Link>

      <JoinButton />
    </>
  );
}
