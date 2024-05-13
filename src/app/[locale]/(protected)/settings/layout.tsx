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
    <PageShell width="full" hideTopNav>
      <SettingSidebar />
      <section className="mx-auto flex w-full max-w-xl flex-1">
        {children}
      </section>
    </PageShell>
  );
}
