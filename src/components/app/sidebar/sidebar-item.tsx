import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from "next/link";
import { AnchorHTMLAttributes } from 'react';

interface SidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  label: string
  icon: LucideIcon
  href: string;
  active?: boolean;
};

export function SidebarItem({ icon: Icon, label, title, href, active, ...props }: SidebarItemProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link href={href} data-active={active} className={cn("h-9 w-9 p-2 rounded-lg text-muted-foreground bg-background transition-all hover:text-accent-foreground data-[active]:bg-muted data-[active]:text-secondary-foreground data-[active]:hover:text-secondary-foreground")} {...props}>
          <Icon className="w-full h-full" />
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex flex-col" sideOffset={6}>
        <span className='text-sm font-semibold'>{title}</span>
        <span className="text-muted-foreground">{label}</span>
      </TooltipContent>
    </Tooltip>
  );
};
