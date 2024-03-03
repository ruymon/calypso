import { ReactNode } from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex flex-1 flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col gap-16 py-4">{children}</div>
      <Footer />
    </div>
  );
}
