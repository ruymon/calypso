import { ReactNode } from "react";

interface FlightsDetailsLayoutProps {
  children: ReactNode;
}

export default function FlightsDetailsLayout({
  children,
}: FlightsDetailsLayoutProps) {
  return (
    <div className="z-10 flex min-h-screen w-full max-w-md shrink-0 overflow-y-auto bg-background p-4">
      {children}
    </div>
  );
}
