import { CalendarSearchIcon, CompassIcon, LogInIcon, UsersIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarItem } from "./item";

interface SidebarProps {};

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="w-16 h-[calc(100%-4rem)] bg-background/50 backdrop-blur-md flex flex-col items-center justify-between gap-4 absolute left-0 bottom-0 z-10">
      <nav className="flex items-center flex-col flex-1 gap-4 px-4">
        <SidebarItem icon={CompassIcon} label="world map" />
        <SidebarItem icon={CalendarSearchIcon} label="events" />
        <SidebarItem icon={UsersIcon} label="Friends" />
        <SidebarItem icon={LogInIcon} label="LogIn" />
      </nav>
      
      <footer className="pt-6 w-full flex items-center flex-col gap-4 px-4 py-6">
        <Avatar>
          <AvatarImage src="https://github.com/ruymon.png" alt="Avatar image" />
          <AvatarFallback />
        </Avatar>

      </footer>
    </aside>
  );
};
