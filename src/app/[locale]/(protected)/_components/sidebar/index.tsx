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
import { getScopedI18n } from "@/locales/server";
import { Rotate3D } from "lucide-react";
import { SidebarAvatar } from "./sidebar-avatar";
import { SidebarItem } from "./sidebar-item";
import { SidebarThemeSwitcher } from "./sidebar-theme-switcher";

interface SidebarProps {}

export async function Sidebar({}: SidebarProps) {
  const t = await getScopedI18n("sidebar");

  return (
    <aside className="z-20 hidden w-14 shrink-0 flex-col items-center gap-4 bg-background py-4 lg:flex">
      <Rotate3D className="mb-2 h-7 w-7 text-primary" />

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
            href="/events"
            icon={<PiCalendarDefaultStroke className="w-5" />}
            title={t("events.title")}
            label={t("events.subtitle")}
          />

          <SidebarItem
            href="/career"
            icon={<PiBriefcaseJobStroke className="w-5" />}
            title="Career"
            label="Manage your account settings"
          />

          <SidebarItem
            href="/friends"
            icon={<PiCommunityStroke className="w-5" />}
            title={t("friends.title")}
            label={t("friends.subtitle")}
          />
        </div>

        <div className="flex flex-col gap-3">
          <SidebarItem
            href="/feedback"
            icon={<PiChatDefaultStroke className="w-5" />}
            title={t("feedback.title")}
            label={t("feedback.subtitle")}
          />

          <SidebarItem
            href="/help"
            icon={<PiTroubleshootStroke className="w-5" />}
            title={t("help.title")}
            label={t("help.subtitle")}
          />
          <SidebarItem
            href="/changelog"
            icon={<PiSparkleAi01Stroke className="w-5" />}
            title={t("changelog.title")}
            label={t("changelog.subtitle")}
          />
          <SidebarThemeSwitcher />
        </div>
      </nav>

      <Separator className="w-1/2" />

      <SidebarAvatar />
    </aside>
  );
}
