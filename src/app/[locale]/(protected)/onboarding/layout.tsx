import { ReactNode } from "react";
import { PageShell } from "../(root)/_components/page-shell";

interface OnboardingLayoutProps {
  children: ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <PageShell
      width="full"
      className="absolute inset-0 z-50 items-center justify-center gap-4"
    >
      {children}
    </PageShell>
  );
}
