import { ReactNode } from "react";
import { PageShell } from "../../_components/page-shell";

interface AirportDetailsLayoutProps {
  children: ReactNode;
}

export default function AirportDetailsLayout({
  children,
}: AirportDetailsLayoutProps) {
  return <PageShell className="relative overflow-y-auto">{children}</PageShell>;
}
