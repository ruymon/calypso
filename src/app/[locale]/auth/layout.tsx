import { LogoIcon } from "@/components/logo";
import { siteConfig } from "@/config/site";
import { COOKIE_PREFIX } from "@/constants/cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { SupportCard } from "./_components/support-card";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const accessToken = cookies().get(`${COOKIE_PREFIX}access-token`);
  const refreshToken = cookies().get(`${COOKIE_PREFIX}refresh-token`);

  if (accessToken && refreshToken) {
    return redirect("/");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-8 px-4 py-8">
      <LogoIcon variant="muted" />

      <main className="mx-auto flex w-full max-w-56 flex-col gap-5">
        {children}
        <SupportCard />
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </footer>
    </div>
  );
}
