import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function MarketingNavbar({}) {
  return (
    <div className="sticky top-0 z-20 flex h-20 w-full items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Logo />

        <nav className="absolute left-1/2 right-1/2 flex w-fit -translate-x-1/2 items-center gap-2 rounded-full bg-accent/15 p-1.5 backdrop-blur-md">
          <Link
            href="#"
            className="rounded-full bg-foreground/10 px-2 py-0.5 text-sm font-medium text-foreground"
          >
            Sobre
          </Link>

          <Link
            href="#"
            className="rounded-full px-2 py-0.5 text-sm font-medium text-muted-foreground"
          >
            Precificação
          </Link>

          <Link
            href="#"
            className="rounded-full px-2 py-0.5 text-sm font-medium text-muted-foreground"
          >
            Blog
          </Link>

          <Link
            href="#"
            className="ext-sm rounded-full px-2 py-0.5  text-sm font-medium text-muted-foreground"
          >
            Changelog
          </Link>
        </nav>

        <Link
          href={"/app"}
          className={buttonVariants({
            size: "md",
            variant: "ghost",
            className: "",
          })}
        >
          Open app
        </Link>
      </div>
    </div>
  );
}
