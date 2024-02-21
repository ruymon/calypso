import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex flex-1 flex-col bg-gradient-to-b from-slate-950 to-zinc-950">
      <MarketingNavbar />
      <div className="flex flex-1 flex-col gap-16">{children}</div>
      {/* <MarketingFooter /> */}
    </div>
  );
}
