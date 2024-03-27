import { PiHomeAiDuoSolid } from "@/components/icons";

interface MobileSidebarProps {}

export function MobileSidebar({}: MobileSidebarProps) {
  return (
    <nav className="z-20 flex h-16 w-full bg-background lg:hidden">
      <PiHomeAiDuoSolid className="h-8 w-8 text-accent-foreground" />
    </nav>
  );
}
