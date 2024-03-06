import { ReactNode } from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="mx-auto flex container flex-1 flex-col items-center justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
