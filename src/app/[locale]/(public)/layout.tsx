import { ReactNode } from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-1 flex-col items-center px-10">
      <Navbar />
      <main className="flex flex-1 flex-col gap-16">{children}</main>
      <Footer />
    </div>
  );
}
