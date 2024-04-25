import { ReactNode } from "react";
import { PageShell } from "../_components/page-shell";
import { SettingSidebar } from "./_components/sidebar";

interface AppSettingsLayoutProps {
  children: ReactNode;
}

export default function AppSettingsLayout({
  children,
}: AppSettingsLayoutProps) {
  return (
    <PageShell width="full" hasTopNav={false}>
      <SettingSidebar />

      {children}
    </PageShell>
  );
}
