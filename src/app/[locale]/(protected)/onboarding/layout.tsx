import { ReactNode } from "react";

interface OnboardingLayoutProps {
  children: ReactNode;
}

export default async function OnboardingLayout({
  children,
}: OnboardingLayoutProps) {
  return (
    <div className="absolute z-20 flex h-screen w-screen items-center justify-center gap-4 bg-background/10 p-8 backdrop-blur-lg">
      {children}
    </div>
  );
}
