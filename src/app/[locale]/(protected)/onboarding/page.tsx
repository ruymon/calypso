import { redirect } from "next/navigation";

interface OnboardingRootPageProps {}

export default async function OnboardingRootPage({}: OnboardingRootPageProps) {
  return redirect("/onboarding/welcome");
}
