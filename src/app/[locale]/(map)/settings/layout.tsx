import { getProfile } from "@/lib/profile";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { SettingSidebar } from "./_components/sidebar";

interface AppSettingsLayoutProps {
  children: ReactNode;
}

export default async function AppSettingsLayout({
  children,
}: AppSettingsLayoutProps) {
  const userProfile = await getProfile();

  if (!userProfile) {
    redirect("/auth/login?error=unauthorized");
  }

  return (
    <div className="absolute inset-0 z-30 flex overflow-y-auto bg-background/75 px-4 py-6 backdrop-blur-md md:left-14 md:w-[calc(100%-3.5rem)] md:px-6">
      <SettingSidebar />
      <section className="mx-auto flex w-full max-w-xl flex-1">
        {children}
      </section>
    </div>
  );
}
