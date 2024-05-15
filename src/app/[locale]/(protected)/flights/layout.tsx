import { PageShell } from "@/app/[locale]/(protected)/_components/page-shell";
import { ReactNode } from "react";

interface FlightsDetailsLayoutProps {
  children: ReactNode;
}

export default function FlightsDetailsLayout({
  children,
}: FlightsDetailsLayoutProps) {
  return (
    <PageShell shellTitle="Flight details" shellClassName="relative">
      {children}
    </PageShell>
  );
}
