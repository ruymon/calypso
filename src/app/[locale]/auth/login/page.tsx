import { LoginForm } from "@/components/auth/login-form";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

interface LoginPageProps { };

export default async function LoginPage({ }: LoginPageProps) {
  const t = await getScopedI18n('auth.login');

  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">{t('title')}</h1>
        <span className="text-sm text-muted-foreground">{t('subtitle')}</span>
      </header>

      <LoginForm />

      <Link href="/auth/join" className={buttonVariants({ variant: 'outline', className: 'flex-col gap-0.5' })}>
        <span className="text-xs">{t('noAccount')}</span>
        <span className="text-sm font-medium text-accent-foreground">{t('join')}</span>
      </Link>
    </>
  )
};
