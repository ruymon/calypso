"use client";

import { NavLink } from "@/components/nav-link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
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
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <NavLink
          href={href}
          className={cn(
            "data-[current=true]:after:contents-[''] relative flex w-full items-center justify-center py-2 text-muted-foreground data-[current=true]:text-primary data-[current=true]:after:absolute data-[current=true]:after:left-0 data-[current=true]:after:h-1/2 data-[current=true]:after:w-1 data-[current=true]:after:rounded-r-full data-[current=true]:after:bg-primary",
          )}
          {...props}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{title}</span>
        </NavLink>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex flex-col" sideOffset={6}>
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-muted-foreground">{label}</span>
      </TooltipContent>
    </Tooltip>
  );
}
