import { SupportCard } from "@/components/app/auth/support-card";
import { LogoIcon } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
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

      <footer className="flex flex-col gap-1 items-center">
        <span className="text-xs text-accent-foreground inline-flex items-center gap-1">&copy; {new Date().getUTCFullYear()} {siteConfig.name} <span className="text-xs px-1 py-0.5 rounded-sm bg-muted text-muted-foreground">Private Beta</span></span>

        <span className="text-xs text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">Privacy policy</Link>
          {' '} | {' '}
          <Link href="/tos" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">Terms of service</Link>
        </span>
        
      </footer>
    </div>
  );
};
