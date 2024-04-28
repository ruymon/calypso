import { SettingSidebarItem } from "./sidebar-item";

interface SettingSidebarProps {}

export function SettingSidebar({}: SettingSidebarProps) {
  return (
    <aside className="fixed top-4 flex h-fit w-full max-w-52 flex-col gap-6">
      <h2 className="text-xl font-semibold text-foreground">Settings</h2>

      <nav className="flex flex-col gap-1">
        <SettingSidebarItem href="/settings/profile">
          Profile
        </SettingSidebarItem>

        <SettingSidebarItem href="/settings/integrations">
          Integrations
        </SettingSidebarItem>
      </nav>
    </aside>
  );
}
