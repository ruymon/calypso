import { redirect } from "next/navigation";

interface SettingsRootPageProps {}

export default async function SettingsRootPage({}: SettingsRootPageProps) {
  return redirect("/settings/profile");
}
