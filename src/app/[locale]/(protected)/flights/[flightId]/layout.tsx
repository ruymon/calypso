import { ReactNode } from "react";
import { PageShell } from "../../_components/page-shell";

interface FlightsDetailsLayoutProps {
  children: ReactNode;
}

export default function FlightsDetailsLayout({
  children,
}: FlightsDetailsLayoutProps) {
  return (
    <PageShell shellTitle="Flight details" className="relative overflow-y-auto">
      {children}
    </PageShell>
  );
}
