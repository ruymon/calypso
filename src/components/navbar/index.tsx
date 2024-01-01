import { siteConfig } from "@/config/site";
import { BellIcon } from "lucide-react";
import { LogoIcon } from "../logo-icon";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { NavbarThemeSwitcher } from "./theme-switcher";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex items-center gap-8 justify-between h-16 bg-background/50 backdrop-blur-md w-full absolute top-0 right-0 z-10">
      <header className="flex items-center gap-0.5">
        <div className="w-16 h-16 flex items-center justify-center relative overflow-clip">
          <LogoIcon />
        </div>
        
        <span className="text-3xl tracking-wide leading-8 text-primary-foreground font-extrabold whitespace-nowrap">{siteConfig.name}</span>
      </header>

      <Input type="search" placeholder="Search for airports, flights or users" className="bg-opacity-50 backdrop-blur-md max-w-md text-center absolute left-1/2 -translate-x-1/2"/>

      <div className="flex items-center gap-4 pr-5 text-muted-foreground h-8">
        <time>22:39z</time>
        <Separator orientation="vertical" />
        <BellIcon className="w-5 h-5"/>
        <NavbarThemeSwitcher />
      </div>
    </nav>
  );
};
