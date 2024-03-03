"use client";

import { LogoIcon } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/lib/utils";
import { UserRoundIcon } from "lucide-react";
import { sidebarItems } from "./helper";
import { SidebarClock } from "./sidebar-clock";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {
  avatarUrl?: string;
  name?: string;
}

export function Sidebar({ avatarUrl, name }: SidebarProps) {
  return (
    <aside className="z-20 flex w-14 flex-col items-center gap-8 bg-background py-4">
      <LogoIcon />

      <nav className="flex w-full flex-1 flex-col gap-4">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      <footer className="flex flex-col gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarUrl} alt="avatar" />
          <AvatarFallback>{name ? getNameInitials(name) : <UserRoundIcon className="w-4 h-4" />}</AvatarFallback>
        </Avatar>
        <SidebarClock />
      </footer>
    </aside>
  );
}
