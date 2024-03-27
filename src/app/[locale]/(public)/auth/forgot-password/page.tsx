import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import { ForgotPasswordForm } from "../_components/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot password",
};

interface ForgotPasswordPageProps {
  params: { locale: string };
}

export default async function ForgotPasswordPage({
  params: { locale },
}: ForgotPasswordPageProps) {
  const t = await getScopedI18n("auth.forgotPassword");

  return (
    <>
      <header className="mb-6 flex flex-col">
        <h1 className="text-lg font-bold text-secondary-foreground">
          {t("title")}
        </h1>
        <span className="text-sm text-muted-foreground">{t("subtitle")}</span>
      </header>

      <ForgotPasswordForm />
    </>
  );
}
