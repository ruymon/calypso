import { ReactNode } from "react";
import { SettingSidebar } from "./_components/sidebar";

interface AppSettingsLayoutProps {
  children: ReactNode;
}

export default function AppSettingsLayout({
  children,
}: AppSettingsLayoutProps) {
  return (
    <div className="z-10 flex flex-1 bg-background p-8">
      <div className="mx-auto flex max-w-5xl flex-1 gap-8">
        <SettingSidebar />
        <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
