import { ReactNode } from "react";
import { SettingSidebar } from "./_components/sidebar";

interface AppSettingsLayoutProps {
  children: ReactNode;
}

export default function AppSettingsLayout({
  children,
}: AppSettingsLayoutProps) {
  return (
    <div className="z-20 flex h-full w-full overflow-y-auto bg-background px-4 py-6 md:px-6">
      <SettingSidebar />
      <section className="mx-auto flex w-full max-w-xl flex-1">
        {children}
      </section>
    </div>
  );
}
