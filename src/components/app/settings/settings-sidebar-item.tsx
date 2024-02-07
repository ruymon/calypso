'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, useState } from "react";

interface SettingSidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  label: string
  href: string
};

export function SettingSidebarItem({ title, label, href, ...props }: SettingSidebarItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href={href} onClick={() => setIsActive(!isActive)} data-active={isActive} className={cn("relative text-base data-[active=true]:px-3 font-medium text-accent-foreground data-[active=true]:text-primary data-[active=true]:after:contents-[''] data-[active=true]:after:absolute data-[active=true]:after:left-0 data-[active=true]:after:top-1/2 data-[active=true]:after:-translate-y-1/2 data-[active=true]:after:w-1 data-[active=true]:after:h-full data-[active=true]:after:rounded-r-full data-[active=true]:after:bg-primary")}>
      {title}
    </Link>
  );
};
