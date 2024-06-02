import { ReactNode } from "react";
import { PageShell } from "../_components/page-shell";

interface AirportDetailsLayoutProps {
  children: ReactNode;
}

export default function AirportDetailsLayout({
  children,
}: AirportDetailsLayoutProps) {
  return (
    <PageShell
      shellTitle="Aerodrome details"
      shellClassName="relative"
      mobileDrawerSnapPoints={[0.2, 0.6, 1]}
    >
      {children}
    </PageShell>
  );
}
