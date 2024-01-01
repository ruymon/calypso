import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
};

export function SidebarItem({ icon: Icon, label }: SidebarItemProps) {
  return (
    <div className={cn("transition-colors flex items-center bg-transparent text-muted-foreground hover:text-secondary-foreground p-2 hover:bg-primary rounded-sm", )}>
      <Icon className="w-6" />
    </div>
  );
};
