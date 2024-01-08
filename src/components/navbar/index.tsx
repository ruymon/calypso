import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { BellIcon, Search } from "lucide-react";
import { NavbarThemeSwitcher } from "./theme-switcher";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex items-center gap-8 justify-between w-[calc(100%-3.5rem)] p-2 pl-0 h-14 bg-background/50 backdrop-blur-md absolute top-0 right-0 z-10">
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl font-bold whitespace-nowrap leading-6">{siteConfig.name}</span>
        <span className="text-sm text-muted-foreground leading-3 italic font-medium">{siteConfig.slogan}</span>
      </div>

      <form className="relative bg-background/20 backdrop-blur-lg rounded-md text-muted-foreground w-full max-w-md">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input placeholder="Search for airports, flights or users" className="pl-8 bg-transparent border-none" />
      </form>

      <div className="flex items-center gap-4 text-muted-foreground">
        <time>22:39z</time>
        <Separator orientation="vertical" />
        <BellIcon className="w-5 h-5" />
        <NavbarThemeSwitcher />
      </div>
    </nav>
  );
};
