import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export function MarketingNavbar({}) {
  return (
    <nav className="w-full flex items-center justify-between bg-background/50 backdrop-blur-md z-20 sticky top-0 py-5">
      <Logo />
      <Button size="sm" variant="outline">Open app</Button>
    </nav>
  );
};