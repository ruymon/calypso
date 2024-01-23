import { CalendarSearchIcon, CompassIcon, LogInIcon, LogOutIcon, SettingsIcon, UsersIcon } from "lucide-react";
import { LogoIcon } from "../../brand/logo";
import { SidebarItem } from "./sidebar-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps { };

export function Sidebar({ }: SidebarProps) {
  return (
    <aside className="px-2 py-4 flex flex-col items-center justify-between bg-background">
      <div className="flex flex-col gap-4">
        <LogoIcon className="h-10 w-10 p-2 rounded-lg" />

        <nav className="flex items-center flex-col gap-2">
          <SidebarItem title="World map" href='/map' icon={CompassIcon} label="Live network connections" active />
          <SidebarItem title="World map" href='/map/live' icon={CompassIcon} label="Live network connections" />
          <SidebarItem title="Events" href='/' icon={CalendarSearchIcon} label="Check upcoming events among the networks" />
          <SidebarItem title="Friends" href='/' icon={UsersIcon} label="Manage your friends list" />
          <SidebarItem title="Real flight plans" href='/' icon={LogInIcon} label="Find real life flights" />
        </nav>
      </div>

      <Avatar className="w-9 h-9">
        <AvatarImage src="https://github.com/ruymon.png" />
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
    </aside>
  );
};
