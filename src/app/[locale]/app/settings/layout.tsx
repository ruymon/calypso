import { SettingSidebar } from "@/components/app/settings/settings-sidebar";
import { ReactNode } from "react";

interface AppSettingsLayoutProps {
  children: ReactNode;
}

export default function AppSettingsLayout({
  children,
}: AppSettingsLayoutProps) {
  return (
    <div className="flex bg-background/75 backdrop-blur-md flex-1 p-8">
      <div className="flex flex-1 max-w-5xl gap-8 mx-auto">
        <SettingSidebar />
        <main className="flex flex-col gap-8 flex-1 px-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
