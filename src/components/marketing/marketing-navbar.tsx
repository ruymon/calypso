import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

export function MarketingNavbar({}) {
  return (
    <nav className="w-full flex items-center justify-between bg-background/50 backdrop-blur-md z-20 sticky top-0 py-5">
      <Logo />
      <Link href={'/app'} className={buttonVariants({ size: 'sm', variant: 'outline'})}>Open app</Link>
    </nav>
  );
};