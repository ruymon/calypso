import { CalendarSearchIcon, CompassIcon, LogInIcon, UsersIcon } from "lucide-react";
import { SidebarItem } from "./item";

interface SidebarProps {};

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="w-16 py-3 h-[calc(100%-4rem)] bg-background/50 backdrop-blur-md flex flex-col items-center justify-between gap-8 absolute left-0 bottom-0 z-10">
      <nav className="flex items-center flex-col flex-1 gap-4">
        <SidebarItem icon={CompassIcon} label="world map" />
        <SidebarItem icon={CalendarSearchIcon} label="events" />
        <SidebarItem icon={UsersIcon} label="Friends" />
        <SidebarItem icon={LogInIcon} label="LogIn" />
      </nav>
      
      <footer>
        <img src="https://github.com/ruymon.png" alt="Ruy Monteiro's Avatar" className="w-8 h-8 rounded-full" />
      </footer>
    </aside>
  );
};
