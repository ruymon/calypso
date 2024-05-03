import {
  PiBriefcaseJobStroke,
  PiCalendarDefaultStroke,
  PiChatDefaultStroke,
  PiCommunityStroke,
  PiMapStroke,
  PiSparkleAi01Stroke,
  PiTroubleshootStroke,
} from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";
import { IS_IN_DEVELOPMENT } from "@/constants/workspace";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import { Rotate3D } from "lucide-react";
import { Suspense } from "react";
import { SidebarAvatar } from "./sidebar-avatar";
import { SidebarItem } from "./sidebar-item";
import { SidebarThemeSwitcher } from "./sidebar-theme-switcher";

interface SidebarProps {}

export async function Sidebar({}: SidebarProps) {
  const t = await getScopedI18n("sidebar");

  return (
    <aside className="z-20 hidden w-14 shrink-0 flex-col items-center gap-4 bg-background py-4 lg:flex">
      <header className="flex w-full flex-col items-center gap-1">
        <Rotate3D
          className={cn(
            "mb-2 h-7 w-7",
            IS_IN_DEVELOPMENT ? "text-red-500" : "text-primary",
          )}
        />

        <span
          className={cn(
            "rounded p-1 text-2xs font-bold uppercase leading-none",
            IS_IN_DEVELOPMENT
              ? "bg-red-500 font-black text-red-50"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          {IS_IN_DEVELOPMENT ? "dev" : "beta"}
        </span>
      </header>

      <Separator className="w-1/2" />

      <nav className="flex w-full flex-1 flex-col justify-between">
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

        <div className="flex flex-col gap-3">
          <SidebarItem
            href={siteConfig.links.discord}
            icon={<PiChatDefaultStroke className="w-5" />}
            title={t("feedback.title")}
            label={t("feedback.subtitle")}
          />

          <SidebarItem
            href={siteConfig.links.discord}
            icon={<PiTroubleshootStroke className="w-5" />}
            title={t("help.title")}
            label={t("help.subtitle")}
          />
          <SidebarItem
            href={siteConfig.links.discord}
            icon={<PiSparkleAi01Stroke className="w-5" />}
            title={t("changelog.title")}
            label={t("changelog.subtitle")}
          />
          <SidebarThemeSwitcher />
        </div>
      </nav>

      <Separator className="w-1/2" />

      <Suspense fallback={<Skeleton className="h-7 w-7 rounded-full" />}>
        <SidebarAvatar />
      </Suspense>
    </aside>
  );
}
