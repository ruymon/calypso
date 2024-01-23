import { Sidebar } from "@/components/app/sidebar";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex flex-1">
      <Sidebar />
      <section className="flex-1 flex">
        {children}
      </section>
    </main>
  );
};
