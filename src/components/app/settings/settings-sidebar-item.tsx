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
      className="font-medium text-muted-foreground data-[active=true]:text-secondary-foreground"
      {...props}
    >
      {title}
    </Link>
  );
}
