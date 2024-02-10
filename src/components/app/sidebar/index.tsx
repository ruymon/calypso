"use client";

import { LogoIcon } from "@/components/brand/logo";
import { sidebarItems } from "@/config/sidebar";
import { SidebarClock } from "./sidebar-clock";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps { };

export function Sidebar({ }: SidebarProps) {
  return (
    <aside className="py-4 flex flex-col items-center bg-background/50 backdrop-blur-xl gap-8 w-14 z-20">
      <LogoIcon />

      <nav className="flex flex-col flex-1 w-full gap-4">
        {sidebarItems.map(item => <SidebarItem key={item.href} {...item} />)}
      </nav>

      <SidebarClock />
    </aside>
  );
};
