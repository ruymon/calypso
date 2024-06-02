import { ReactNode } from "react";

interface EventsLayoutProps {
  children: ReactNode;
}

export default function EventsLayout({ children }: EventsLayoutProps) {
  return (
    <div className="z-20 flex h-full w-full overflow-y-auto bg-background px-4 py-2 md:px-6">
      {children}
    </div>
  );
}
