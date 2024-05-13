import { ReactNode } from "react";
import { PageShell } from "../_components/page-shell";

interface EventsLayoutProps {
  children: ReactNode;
}

export default function EventsLayout({ children }: EventsLayoutProps) {
  return (
    <PageShell
      hideTopNav
      width="full"
      shellClassName="relative"
      containerClassName="max-w-none gap-0 p-0"
    >
      {children}
    </PageShell>
  );
}
