import { SettingSidebar } from "@/components/app/settings/settings-sidebar";
import { ReactNode } from "react";

interface AppSettingsLayoutProps {
  children: ReactNode;
};

export default function AppSettingsLayout({ children }: AppSettingsLayoutProps) {
  return (
    <div className="flex bg-background/75 backdrop-blur-md flex-1">
      <div className="flex w-full max-w-5xl mx-auto gap-12 p-4 mt-8">
        <SettingSidebar />
        <div className="flex-1 flex flex-col gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};
