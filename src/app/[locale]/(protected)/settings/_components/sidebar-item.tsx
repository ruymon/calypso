import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface SettingSidebarItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  label: string;
  href: string;
}

export function SettingSidebarItem({
  title,
  label,
  href,
  ...props
}: SettingSidebarItemProps) {
  return (
    <Link
      href={href}
      data-active={false}
      className="rounded-sm px-2 py-1 text-muted-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
      {...props}
    >
      {title}
    </Link>
  );
}
