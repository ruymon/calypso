import { NavLink, NavLinkProps } from "@/components/nav-link";
import { cn } from "@/lib/utils";

interface SettingSidebarItemProps extends NavLinkProps {}

export function SettingSidebarItem({
  className,
  ...props
}: SettingSidebarItemProps) {
  return (
    <NavLink
      className={cn(
        "flex w-full items-center rounded-md p-2 text-sm font-medium text-muted-foreground transition-all hover:text-accent-foreground data-[current=true]:bg-muted  data-[current=true]:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}
