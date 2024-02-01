import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password",
};

interface ForgotPasswordPageProps { };

export default async function ForgotPasswordPage({ }: ForgotPasswordPageProps) {
  const t = await getScopedI18n('auth.forgotPassword');

  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">{t('title')}</h1>
        <span className="text-sm text-muted-foreground">{t('subtitle')}</span>
      </header>

      <ForgotPasswordForm />
    </>
  );
};
