import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <main className="flex mx-auto w-full flex-col gap-8 max-w-5xl px-4">
      <MarketingNavbar />
      {children}
      <MarketingFooter />
    </main>
  );
};
