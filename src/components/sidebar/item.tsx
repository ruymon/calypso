import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from "next/link";
import { AnchorHTMLAttributes } from 'react';

interface SidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  label?: string
  icon: LucideIcon
  variant?: "default" | "ghost"
  href: string;
};

export function SidebarItem({ icon: Icon, label, title, variant = 'default', href, ...props }: SidebarItemProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: variant, size: "icon" }),
            "h-10 w-10",
          )}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {title}
        {label && (
          <span className="ml-auto text-muted-foreground">
            {label}
          </span>
        )}
      </TooltipContent>
    </Tooltip>
  );
};
