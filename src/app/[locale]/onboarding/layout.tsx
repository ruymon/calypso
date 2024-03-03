import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowLeftIcon, LifeBuoyIcon } from "lucide-react";
import { ReactNode } from "react";

interface OnboardingLayoutProps {
  children: ReactNode;
};

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  
  return (
    <div className="flex-1 flex flex-col items-center justify-between container py-4 gap-4">
      <nav className="flex items-center w-full justify-between relative">
        <Button variant="ghost" size="icon"><ArrowLeftIcon className="w-4 h-4" /></Button>
        <LogoIcon variant="muted" className="absolute left-1/2 -translate-x-1/2"/>
        <Button variant="outline" size="sm"><LifeBuoyIcon className="w-4 h-4 mr-2" /> Contact support</Button>
      </nav>

      <main className="mx-auto flex w-full max-w-md flex-col gap-8">
        {children}
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </footer>
    </div>
  );
};
