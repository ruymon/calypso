import { LogoIcon } from "@/components/logo";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";
import { SupportCard } from "./_components/support-card";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="fixed inset-0 top-0 z-30 flex flex-col items-center justify-center gap-8 bg-background/45 px-4 py-6 backdrop-blur-lg md:px-6">
      <LogoIcon variant="muted" />

      <main className="mx-auto flex w-full max-w-xs flex-col gap-3">
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
