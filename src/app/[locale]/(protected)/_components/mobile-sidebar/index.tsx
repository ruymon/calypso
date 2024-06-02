import {
  PiCalendarDefaultStroke,
  PiCommunityStroke,
  PiMapStroke,
} from "@/components/icons";

interface MobileSidebarProps {}

export function MobileSidebar({}: MobileSidebarProps) {
  return (
    <nav className="z-30 flex h-16 w-full justify-between gap-6 bg-muted px-6 backdrop-blur-md md:hidden">
      <div className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground transition-all hover:text-accent-foreground">
        <PiMapStroke className="w-6" />
        <span className="text-xs font-medium">Map</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground transition-all hover:text-accent-foreground">
        <PiCalendarDefaultStroke className="w-6" />
        <span className="text-xs font-medium">Events</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground transition-all hover:text-accent-foreground">
        <PiCommunityStroke className="w-6" />
        <span className="text-xs font-medium">Friends</span>
      </div>
    </nav>
  );
}
