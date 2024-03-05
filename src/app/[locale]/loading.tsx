import { LogoIcon } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

interface AppLoadingPageProps {}

export default function AppLoadingPage({}: AppLoadingPageProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 bg-background px-4 py-8">
      <header className="flex animate-pulse flex-col items-center justify-center gap-8">
        <LogoIcon size="xl" />

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">Loading</h3>
          <span className="text-sm text-muted-foreground">
            This should take a few seconds
          </span>
        </div>
      </header>

      <Card className="w-full max-w-64 rounded-md">
        <CardHeader className="flex-row items-center p-2 pb-1">
          <LightbulbIcon className="h-4 w-4" />
          <CardTitle className="text-sm font-semibold">
            Tip of the day:
          </CardTitle>
        </CardHeader>

        <CardContent className="p-2 pt-0">
          <CardDescription className="text-xs leading-relaxed">
            You can change the UI theme in the settings menu
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
