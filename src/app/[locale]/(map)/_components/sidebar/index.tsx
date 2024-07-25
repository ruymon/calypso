"use client";

import {
  PiBriefcaseJobStroke,
  PiCalendarDefaultStroke,
  PiCommunityStroke,
  PiLogInLeftStroke,
  PiMapStroke,
} from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { IS_IN_DEVELOPMENT } from "@/constants/workspace";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { UserProfile } from "@/types/profile";
import { Rotate3DIcon } from "lucide-react";
import { SidebarAvatar } from "./sidebar-avatar";
import { SidebarItem } from "./sidebar-item";
import { SidebarThemeSwitcher } from "./sidebar-theme-switcher";

interface SidebarProps {
  user: UserProfile | null;
}

export function Sidebar({ user }: SidebarProps) {
  const t = useScopedI18n("sidebar");

  return (
    <aside className="hidden h-screen max-h-screen w-14 bg-background md:flex">
      <div className="flex flex-1 flex-col gap-4 py-4">
        <header className="flex flex-col items-center gap-3">
          <Rotate3DIcon
            className={cn(
              "h-7 w-7",
              IS_IN_DEVELOPMENT ? "text-red-500" : "text-primary"
            )}
          />

          <span
            className={cn(
              "rounded p-1 text-2xs font-bold uppercase leading-none",
              IS_IN_DEVELOPMENT
                ? "bg-red-500 font-black text-red-50"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {IS_IN_DEVELOPMENT ? "dev" : "beta"}
          </span>
        </header>

        <Separator className="mx-auto w-3/4" />

        <nav className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-4">
            <SidebarItem
              href="/"
              icon={<PiMapStroke className="w-5" />}
              title={t("map.title")}
              label={t("map.subtitle")}
            />

            <SidebarItem
              disabled
              href="/events"
              icon={<PiCalendarDefaultStroke className="w-5" />}
              title={t("events.title")}
              label={t("events.subtitle")}
            />

            <SidebarItem
              disabled
              href="/career"
              icon={<PiBriefcaseJobStroke className="w-5" />}
              title="Career"
              label="Manage your account settings"
            />

            <SidebarItem
              disabled
              href="/friends"
              icon={<PiCommunityStroke className="w-5" />}
              title={t("friends.title")}
              label={t("friends.subtitle")}
            />
          </div>

          <SidebarThemeSwitcher />
        </nav>
        <Separator className="mx-auto w-3/4" />

        {user ? (
          <SidebarAvatar user={user} />
        ) : (
          <SidebarItem
            href="/auth/login"
            icon={<PiLogInLeftStroke className="w-5" />}
            title={t("login.title")}
            label={t("login.subtitle")}
          />
        )}
      </div>
    </aside>
  );
}
