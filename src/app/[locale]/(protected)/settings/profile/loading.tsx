import { Skeleton } from "@/components/ui/skeleton";

interface SettingsProfileLoadingProps {}

export default function SettingsProfileLoading({}: SettingsProfileLoadingProps) {
  return <Skeleton className="h-8 w-8" />;
}
