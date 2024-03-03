"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

interface SidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export function SidebarItem({
  icon: Icon,
  label,
  title,
  href,
  ...props
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href; // TODO: Fix this

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          data-active={isActive}
          className={cn(
            "data-[active=true]:after:contents-[''] relative flex w-full items-center justify-center py-2 text-muted-foreground data-[active=true]:text-primary data-[active=true]:after:absolute data-[active=true]:after:left-0 data-[active=true]:after:h-1/2 data-[active=true]:after:w-1 data-[active=true]:after:rounded-r-full data-[active=true]:after:bg-primary",
          )}
          {...props}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex flex-col" sideOffset={6}>
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-muted-foreground">{label}</span>
      </TooltipContent>
    </Tooltip>
  );
}
