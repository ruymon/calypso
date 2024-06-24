import { ReactNode } from "react";
import { PageShell } from "../_components/page-shell";

interface FlightsDetailsLayoutProps {
  children: ReactNode;
}

export default function FlightsDetailsLayout({
  children,
}: FlightsDetailsLayoutProps) {
  return (
    <PageShell
      shellTitle="Flight details"
      shellClassName="relative"
      mobileDrawerSnapPoints={[0.2, 0.4, 1]}
    >
      {children}
    </PageShell>
  );
}
