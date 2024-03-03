import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function Navbar({}) {
  return (
    <div className="flex h-20 w-full items-center justify-between px-10 py-2">
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
        href="/"
        className={buttonVariants({
          size: "sm",
          variant: "outline",
        })}
      >
        Open app
      </Link>
    </div>
  );
}
