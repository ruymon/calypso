import { JoinForm } from "@/components/auth/join-form";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join",
};

interface JoinPageProps { };

export default async function JoinPage({ }: JoinPageProps) {
  const t = await getScopedI18n('auth.join');

  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">{t('title')}</h1>
        <span className="text-sm text-muted-foreground">{t('subtitle')}</span>
      </header>

      <JoinForm />

      <Link href="/auth/login" className={buttonVariants({ variant: 'outline', className: 'flex-col gap-0.5' })}>
        <span className="text-xs">{t('haveAccount')}</span>
        <span className="text-sm font-medium text-accent-foreground">{t('login')}</span>
      </Link>
    </>
  );
};
