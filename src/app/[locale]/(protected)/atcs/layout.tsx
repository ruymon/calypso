import { PageShell } from "@/app/[locale]/(protected)/_components/page-shell";
import { ReactNode } from "react";

interface ATCsDetailsLayoutProps {
  children: ReactNode;
}

export default function ATCsDetailsLayout({
  children,
}: ATCsDetailsLayoutProps) {
  return (
    <PageShell shellTitle="Air traffic controller details">
      {children}
    </PageShell>
  );
}
