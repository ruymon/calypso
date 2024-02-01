import { SupportCard } from "@/components/auth/support-card";
import { LogoIcon } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex-1 flex flex-col justify-between items-center py-8 px-4 gap-8">
      <LogoIcon variant="muted" />

      <main className="mx-auto w-full max-w-56 flex flex-col gap-5">
        {children}
        <SupportCard />
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">&copy; {new Date().getUTCFullYear()} {siteConfig.name}</span>
      </footer>
    </div>
  );
};
