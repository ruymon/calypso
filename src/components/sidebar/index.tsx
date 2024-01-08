import { CalendarSearchIcon, CompassIcon, LogInIcon, UsersIcon } from "lucide-react";
import { LogoIcon } from "../logo-icon";
import { SidebarItem } from "./item";

interface SidebarProps {};

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="p-2 flex flex-col items-center justify-between gap-4 w-14 z-10 bg-background/50 backdrop-blur-md absolute top-0 left-0 h-full">
      <LogoIcon />

      <nav className="flex items-center flex-col flex-1 gap-4">
        <SidebarItem title="world map" href='/' icon={CompassIcon} label="world map" />
        <SidebarItem variant="ghost" title="flight details" href='/flight/1234' icon={CalendarSearchIcon} label="events" />
        <SidebarItem variant="ghost" title="lorem" href='/' icon={UsersIcon} label="Friends" />
        <SidebarItem variant="ghost" title="lorem" href='/' icon={LogInIcon} label="LogIn" />
      </nav>
      
    </aside>
  );
};
