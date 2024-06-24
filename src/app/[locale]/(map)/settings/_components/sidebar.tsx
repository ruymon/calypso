import { getScopedI18n } from "@/locales/server";
import { SettingSidebarItem } from "./sidebar-item";

interface SettingSidebarProps {}

export async function SettingSidebar({}: SettingSidebarProps) {
  const t = await getScopedI18n("settings.sidebar");

  return (
    <aside className="flex w-full max-w-52 flex-col gap-6">
      <h2 className="text-xl font-semibold text-foreground">
        {t("title")}
      </h2>

      <nav className="flex flex-col gap-1">
        <SettingSidebarItem href="/settings/profile">
          {t("profile")}
        </SettingSidebarItem>

        <SettingSidebarItem href="/settings/integrations">
          {t("integrations")}
        </SettingSidebarItem>
      </nav>
    </aside>
  );
}
