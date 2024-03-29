import {
  PiBriefcaseJobStroke,
  PiCalendarDefaultStroke,
  PiChatDefaultStroke,
  PiCommunityStroke,
  PiMapStroke,
  PiSparkleAi01Stroke,
  PiTroubleshootStroke,
  PiUserDefaultStroke,
} from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Rotate3D } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="z-20 hidden w-14 shrink-0 flex-col items-center gap-4 bg-background py-4 lg:flex">
      <Rotate3D className="mb-2 h-7 w-7 text-primary" />

      <Separator className="w-1/2" />

      <nav className="flex w-full flex-1 flex-col justify-between">
        <div className="flex flex-col gap-4">
          <SidebarItem
            href="/"
            icon={<PiMapStroke className="w-5" />}
            title="World map"
            label="Live network connections"
          />

          <SidebarItem
            href="/events"
            icon={<PiCalendarDefaultStroke className="w-5" />}
            title="Calendar"
            label="Live network connections"
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
            title="Friends"
            label="Manage your account settings"
          />
        </div>

        <div className="flex flex-col gap-3">
          <SidebarItem
            href="/feedback"
            icon={<PiChatDefaultStroke className="w-5" />}
            title="Feedback"
            label="Help us improve our service"
          />

          <SidebarItem
            href="/help"
            icon={<PiTroubleshootStroke className="w-5" />}
            title="Support"
            label="Get help with the app"
          />
          <SidebarItem
            href="/changelog"
            icon={<PiSparkleAi01Stroke className="w-5" />}
            title="Changelog"
            label="See what's new in the app"
          />
        </div>
      </nav>

      <Separator className="w-1/2" />

      <footer className="flex w-full flex-col gap-3 py-2">
        <SidebarItem
          href="/settings"
          icon={<PiUserDefaultStroke className="w-5" />}
          title="Settings"
          label="Manage your account settings"
        />
      </footer>
    </aside>
  );
}
